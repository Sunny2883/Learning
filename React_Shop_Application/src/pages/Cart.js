import React from 'react';
import '../styles/Cart.css';
function Cart({ cart }) {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button>Proceed to Checkout</button>}
    </div>
  );
}

export default Cart;
