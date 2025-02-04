import React from 'react';
import { useCart } from './CartContext';
import './styles/CartModal.css';

function CartModal({ isOpen, onClose }) {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    totalPrice 
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={onClose}>×</button>
        </div>
        
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>${item.discountedPrice.toFixed(2)}</p>
                    <div className="quantity-control">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="remove-item" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <div className="cart-actions">
                <button onClick={clearCart}>Clear Cart</button>
                <button className="checkout-btn">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;