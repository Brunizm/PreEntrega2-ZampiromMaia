import React, { useState } from "react";
import coffeeShops from "../data/coffeeShops";
import { useCart } from "../context/CartContext"; 

const Catalog = () => {
    const { addItem } = useCart();
    const [quantities, setQuantities] = useState({}); // ✅ Store quantity per item

    // ✅ Function to handle quantity changes
    const handleQuantityChange = (id, value) => {
        setQuantities(prev => ({ ...prev, [id]: Math.max(1, value) })); // ✅ Prevents negative values
    };

    return (
        <div>
            <h2 className="catalog-title">Coffee Catalog</h2>
            <div className="catalog">
                {coffeeShops.map((shop) => (
                    <div key={shop.id} className="card">
                        <img src={shop.image} alt={shop.name} />
                        <h3>{shop.name}</h3>
                        <p>{shop.city}</p>
                        <p>${shop.price}</p>

                        {/* ✅ Quantity Selector */}
                        <div className="quantity-selector">
                            <button onClick={() => handleQuantityChange(shop.id, (quantities[shop.id] || 1) - 1)}>-</button>
                            <span>{quantities[shop.id] || 1}</span> {/* ✅ Displays quantity */}
                            <button onClick={() => handleQuantityChange(shop.id, (quantities[shop.id] || 1) + 1)}>+</button>
                        </div>

                        <button onClick={() => addItem(shop, quantities[shop.id] || 1)}>Add to Cart</button> {/* ✅ Uses correct quantity */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
