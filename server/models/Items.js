const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    productInfo: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { getters: true },
  }
);

const ItemModel = mongoose.model("items", ItemsSchema);
module.exports = ItemModel;
