import React, { useState } from 'react';
import ProductCard from './ProductCard';
import productsData from './products.json';
import './styles/ProductsGrid.css';

function ProductsGrid({ searchTerm = '', filters = {}, sortBy = 'default' }) {
  const filteredProducts = productsData.products
  .filter(product => {
    // Search filter
    const matchesSearch = searchTerm 
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
      : true;

    // Category filter
    const matchesCategory = filters.category 
      ? product.category === filters.category 
      : true;

    // Brand filter (Add this)
    const matchesBrand = filters.brand
      ? product.brand === filters.brand
      : true;

    // Price range filter
    const matchesMinPrice = filters.minPrice 
      ? product.discountedPrice >= parseFloat(filters.minPrice) 
      : true;
    const matchesMaxPrice = filters.maxPrice 
      ? product.discountedPrice <= parseFloat(filters.maxPrice) 
      : true;

    // In stock filter
    const matchesStockStatus = filters.inStock 
      ? product.quantity > 0 
      : true;

    return matchesSearch && 
           matchesCategory && 
           matchesBrand &&    // Add this to the return statement
           matchesMinPrice && 
           matchesMaxPrice && 
           matchesStockStatus;
  })
  
  .sort((a, b) => {
    if (sortBy === 'price_asc') return a.discountedPrice - b.discountedPrice;
    if (sortBy === 'price_desc') return b.discountedPrice - a.discountedPrice;
    return 0;
  });

  return (
    <div className="products-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))
      ) : (
        <div className="no-products">No products found</div>
      )}
    </div>
  );
}

export default ProductsGrid;