import React from "react";
import "./App.css";
import ItemsGrid from "./components/ShopGrid/ItemsGrid";
import ItemDetail from "./components/ShopGrid/ItemDetail";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="content-container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemsGrid />} />
            <Route exact path="/itemDetail/:id" element={<ItemDetail />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
