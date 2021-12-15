import React from "react";
import { Link } from "react-router-dom";

const Item = ({ productName, price, image, productDesc, id }) => {
  return (
    <Link to={`/itemDetail/${id}`}>
      <div className="shop-item">
        <div className="shop-image">
          <img src={`../images/${image}`} />
        </div>
        <h1>{productName}</h1>
        <h2>{`£${price}`}</h2>
      </div>
    </Link>
  );
};

export default Item;
