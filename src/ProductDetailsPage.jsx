import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './styles/ProductDetails.css';
import FadeInComponent from './FadeInComponent';

function ProductDetailsPage() {
  const { state: product } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!product) return navigate('/');

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back to Products
      </button>

      <FadeInComponent>
      
      <div className="product-details-content">
        <div className="product-image-section">
          <img 
            src={product.image} 
            alt={product.name} 
            className="details-product-image"
          />
        </div>
        
        <div className="product-info-section">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-category">{product.category}</p>
          
          <div className="price-container">
            <span className="discounted-price">${product.discountedPrice.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="product-description">{product.description}</p>
          
          <div className="product-features">
            <h3>Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="action-bar">
            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
              disabled={product.quantity === 0}
            >
              {product.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      
      </div>
      </FadeInComponent>
    </div>
  );
}

export default ProductDetailsPage;