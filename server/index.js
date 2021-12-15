const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ItemModel = require("./models/Items");
const cors = require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://jordan:230796j.s@cluster0.us60t.mongodb.net/shopdata?retryWrites=true&w=majority"
);

app.get("/getItems", (req, res) => {
  ItemModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/getItem/:id", (req, res) => {
  ItemModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.json(result);
    } else {
      res.json(result);
    }
  });
});

app.post("/addItem", async (req, res) => {
  const item = req.body;
  const newItem = new ItemModel(item);
  await newItem.save();
  res.json(item);
});

app.listen(3001, () => {
  console.log("server works!");
});
