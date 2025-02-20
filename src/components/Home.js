import React, { useState } from 'react';
import coffeeShops from '../data/coffeeShops';
import { useCart } from '../context/CartContext';

const Home = () => {
    const { addToCart } = useCart();
    const [quantities, setQuantities] = useState(
        coffeeShops.reduce((acc, shop) => {
            acc[shop.id] = 1;
            return acc;
        }, {})
    );

    const handleQuantityChange = (id, delta) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, prev[id] + delta)
        }));
    };

    const handleAddToCart = (shop) => {
        addToCart(shop, quantities[shop.id]);
    };

    return (
        <div>
            <h1>Welcome to the Coffee Experience Catalog</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {coffeeShops.map((shop) => (
                    <div key={shop.id} style={{
                        margin: '20px',
                        border: '1px solid #ccc',
                        padding: '15px',
                        width: '23%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // ✅ Centers all content inside each card
                        textAlign: 'center'
                    }}>
                        <img src={shop.image} alt={shop.name} style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                            borderRadius: '5px'
                        }} />
                        <h2 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{shop.name}</h2>
                        <p>{shop.description}</p>
                        <p><strong>Price: ${shop.price}</strong></p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '10px'
                        }}>
                            <button onClick={() => handleQuantityChange(shop.id, -1)}>-</button>
                            <input type="text" value={quantities[shop.id]} readOnly style={{
                                width: '40px',
                                textAlign: 'center',
                                margin: '0 10px'
                            }} />
                            <button onClick={() => handleQuantityChange(shop.id, 1)}>+</button>
                        </div>
                        <button style={{ marginTop: '10px', padding: '8px 15px' }} onClick={() => handleAddToCart(shop)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
