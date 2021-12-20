import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const [item, setItem] = useState([]);

  const [quantity, setQuantity] = useState(1);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/getItem/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, []);

  useEffect(() => {
    console.log(item);
  }, [item]);
  return (
    <>
      <div className="item-detail-container">
        <div className="item-detail-wrapper">
          <div className="item-detail-image-container">
            <img src={`../images/${item.image}`} />
          </div>
          <div className="item-detail-text-container">
            <h1>{item.productName}</h1>
            <h3>{`£${item.price}`}</h3>
            <h2>{item.productInfo}</h2>
            <div className="item-detail-quantity">
              <h4>Quantity:</h4>
              <select onChange={(e) => setQuantity(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="item-detail-lower">
              <h1>{`Subtotal: £${parseFloat(item.price * quantity).toFixed(
                2
              )}`}</h1>
              <button>Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
