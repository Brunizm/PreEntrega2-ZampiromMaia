import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Import the Modal component

const CartWidget = () => {
    const { cartItems } = useCart();
    const [isModalOpen, setModalOpen] = useState(false);

    // Calculate total price
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const toggleModal = () => setModalOpen(!isModalOpen);

    return (
        <div style={{ position: "relative" }}>
            {/* Cart Button to Open Modal */}
            <button onClick={toggleModal} style={{ cursor: "pointer" }}>
                <i className="fas fa-shopping-cart"></i> Cart ({cartItems.length})
            </button>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} closeModal={toggleModal}>
                <h4>Your Cart</h4>
                {cartItems.length > 0 ? (
                    <>
                        {cartItems.map(item => (
                            <div key={item.id} style={{ marginBottom: "10px" }}>
                                {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                            </div>
                        ))}
                        <p><strong>Total: ${totalAmount.toFixed(2)}</strong></p>
                        <Link to="/checkout">
                            <button>Go to Checkout</button>
                        </Link>
                    </>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </Modal>
        </div>
    );
};

export default CartWidget;
