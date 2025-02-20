import React from "react";
import { useParams } from "react-router-dom";
import coffeeShops from "../data/coffeeShops"; 

const ProductDetail = () => {
    const { id } = useParams();
    const product = coffeeShops.find((shop) => shop.id === parseInt(id));

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.city}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
