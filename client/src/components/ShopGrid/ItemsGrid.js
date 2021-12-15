import React, { useState, useEffect } from "react";
import Item from "./Item";

const ItemsGrid = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/getItems")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="products-container">
      {items.map((item) => {
        return (
          <Item
            id={item.id}
            productName={item.productName}
            price={item.price}
            image={item.image}
            productDesc={item.productInfo}
          />
        );
      })}
    </div>
  );
};

export default ItemsGrid;
