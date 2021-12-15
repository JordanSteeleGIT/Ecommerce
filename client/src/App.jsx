import React from "react";
import "./App.css";
import ItemsGrid from "./components/ShopGrid/ItemsGrid";
import ItemDetail from "./components/ShopGrid/ItemDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ItemsGrid />} />
          <Route exact path="/itemDetail/:id" element={<ItemDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
