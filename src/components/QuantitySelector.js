import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext"; // ✅ Import CartContext

const QuantitySelector = ({ item }) => {
  const { addItem } = useContext(CartContext); // ✅ Get addItem from CartContext
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex align-items-center mb-2">
        <button className="btn btn-secondary btn-sm" onClick={handleDecrement}>-</button>
        <span className="mx-2">{quantity}</span>
        <button className="btn btn-secondary btn-sm" onClick={handleIncrement}>+</button>
      </div>
      <button 
        className="btn btn-success" 
        onClick={() => {
          addItem(item, quantity); // ✅ Add item to cart
          console.log(`Clicked Add to Cart for ${item.name} with quantity ${quantity}`); // ✅ Debugging message
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default QuantitySelector;
