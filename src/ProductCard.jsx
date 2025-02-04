import React, { useEffect, useRef } from 'react';
import { useCart } from './CartContext';
import './styles/ProductCard.css';
import FadeInComponent from './FadeInComponent';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const featuresRef = useRef(null);
  const discountPercentage = Math.round(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100);

  useEffect(() => {
    const checkIfScrollable = () => {
      const element = featuresRef.current;
      if (element) {
        const isScrollable = element.scrollHeight > element.clientHeight;
        if (isScrollable) {
          element.classList.add('scrollable');
        } else {
          element.classList.remove('scrollable');
        }
      }
    };

    checkIfScrollable();
    window.addEventListener('resize', checkIfScrollable);
    return () => window.removeEventListener('resize', checkIfScrollable);
  }, [product.features]);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent the Link component from triggering
    addToCart(product);
  };

  return (
    <FadeInComponent duration="0.5s">
      <Link to={`/products/${product.id}`} state={product}>
        <div className="product-card">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
            {discountPercentage > 0 && (
              <span className="discount-badge">{discountPercentage}% OFF</span>
            )}
          </div>
          <div className="product-details">
            <h3>{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <div className="product-pricing">
              <span className="discounted-price">${product.discountedPrice.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="original-price">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            
            <ul className="product-features" ref={featuresRef}>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="product-actions">
              <span className="stock-info">
                {product.quantity > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            
            <button 
              className="add-to-cart-btn" 
              disabled={product.quantity === 0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </FadeInComponent>
  );
}

export default ProductCard;