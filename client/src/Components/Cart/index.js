import React from 'react';
import CartItem from '../CartItem';
import './style.css';

export default function Cart({ cartItems, totalCost }) {
  return (
    <div className="Cart">
      <h2 className="Cart-title">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              title={item.title}
              cost={item.price * item.quantity}
              quantity={item.quantity}
            />
          ))}
          <div className="Cart-total-cost">
            Total cost: ${totalCost.toFixed(2)}
          </div>
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
};