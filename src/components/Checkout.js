import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Make sure the path is correct
import { v4 as uuidv4 } from 'uuid';

function Checkout() {
  const { cartItems } = useCart();  // Access cart items from context
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const orderID = uuidv4(); // Generates a unique order ID
    setOrderId(orderID);
    alert(`Order submitted! Order ID: ${orderID}`);

    // Logic to send order details to the backend could be added here
  };

  // Calculate the total amount of the cart
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Place Order</button>
      </form>
      <div>
        <h3>Your Cart</h3>
        {cartItems.map(item => (
          <div key={item.id}>
            {item.name} - {item.quantity} x ${item.price.toFixed(2)}
          </div>
        ))}
        <p>Total: ${totalAmount.toFixed(2)}</p>
      </div>
      {orderId && <p>Your Order ID: {orderId}</p>}
    </div>
  );
}

export default Checkout;
