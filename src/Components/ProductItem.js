import React from "react";

function ProductItem({ image, name, capacity, price }) {
  return (
    <div className="menuItem">
      {/* <div style={{ backgroundImage: `url(${image})` }}> </div> */}
      <img src={image} alt={name} />
      <h2> {name} </h2>
      <h3> {capacity} </h3>
      <h3> ₹{price} </h3>
    </div>
  );
}

export default ProductItem;