import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      updateCartItemQuantity(id, quantity);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.newPrice * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2><hr></hr>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={require(`../Assets/${item.image}`)} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price:  ₹{item.newPrice}</p>
                  <div className="quantity-control">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                    
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total Amount:  ₹{calculateTotal()}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
