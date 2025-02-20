import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity) => {
        setCartItems(prevCartItems => {
            const existingItem = prevCartItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                // Update the quantity of an existing item
                return prevCartItems.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
                );
            } else {
                // Add new item to the cart
                return [...prevCartItems, { ...item, quantity }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, useCart };
