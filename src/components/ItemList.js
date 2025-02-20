import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import QuantitySelector from "./QuantitySelector"; // ✅ Import Quantity Selector

const ItemList = ({ items }) => {
  const { addItem } = useContext(CartContext);

  return (
    <div className="row">
      {items.map((item) => (
        <div key={item.id} className="col-md-4 mb-4">
          <div className="card h-100">
            <img 
              src={item.image} 
              className="card-img-top" 
              alt={item.name} 
              onError={(e) => { e.target.src = process.env.PUBLIC_URL + "/images/default-coffee.jpg"; }} 
            />
            <div className="card-body text-center">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.city}</p>
              <p className="card-text">${item.price}</p>

              {/* ✅ Use QuantitySelector */}
              <QuantitySelector item={item} addItem={addItem} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
