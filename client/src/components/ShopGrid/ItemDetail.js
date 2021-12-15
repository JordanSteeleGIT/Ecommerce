import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const [item, setItem] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/getItem/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <>
      <div>{item.id}</div>
      <div>{item.productName}</div>
      <div>{item.image}</div>
      <div>{item.price}</div>
    </>
  );
};

export default ItemDetail;
