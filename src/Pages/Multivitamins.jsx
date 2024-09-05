import React, { useState, useEffect, useContext } from 'react';
import './Allitems.css';
import items from '../Assets/items.json'; 
import { CartContext } from '../Context/CartContext';

const Multivitamins = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const multivitaminItems = items.filter(item => item.category === 'multivitamins');
    setProducts(multivitaminItems);
  }, []);

  const calculateDiscount = (oldPrice, newPrice) => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };

  return (
    <div className="all-items-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={require(`../Assets/${product.image}`)} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-prices">
            <span className="old-price"> ₹{product.oldPrice.toFixed(2)}</span>
            <span className="new-price"> ₹{product.newPrice.toFixed(2)}</span>
          </p>
          <p className="product-discount">{calculateDiscount(product.oldPrice, product.newPrice)}% off</p>
          <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Multivitamins;
