import React, { useState, useRef, useEffect } from 'react';
import './styles/ProductFilter.css';
import SortDropdown from './SortDropdown';

function ProductFilter({ onFilterChange, sortBy, onSortChange }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showMinPriceDropdown, setShowMinPriceDropdown] = useState(false);
  const [showMaxPriceDropdown, setShowMaxPriceDropdown] = useState(false);
  
  const minPriceRef = useRef(null);
  const maxPriceRef = useRef(null);

  const priceRanges = {
    min: ['0', '50', '100', '200', '500', '1000'],
    max: ['100', '200', '500', '1000', '2000', '5000']
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (minPriceRef.current && !minPriceRef.current.contains(event.target)) {
        setShowMinPriceDropdown(false);
      }
      if (maxPriceRef.current && !maxPriceRef.current.contains(event.target)) {
        setShowMaxPriceDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories = [
    'Laptops', 'Accessories', 'Software', 'Mobile Phones', 
    'Tablets', 'Wearables', 'Printers', 'Monitors'
  ];

  const brands = [
    'Apple', 'Samsung', 'Dell', 'HP', 
    'Lenovo', 'Microsoft', 'Sony', 'All Brands'
  ];

  const handleCategoryClick = (category) => {
    const newCategory = category === 'All Products' ? '' : category;
    setSelectedCategory(newCategory);
    onFilterChange({
      category: newCategory,
      brand: selectedBrand,
      minPrice,
      maxPrice,
      inStock: false
    });
  };

  const handleBrandClick = (brand) => {
    const newBrand = brand === 'All Brands' ? '' : brand;
    setSelectedBrand(newBrand);
    onFilterChange({
      category: selectedCategory,
      brand: newBrand,
      minPrice,
      maxPrice,
      inStock: false
    });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    if (name === 'minPrice') {
      setMinPrice(value);
    } else if (name === 'maxPrice') {
      setMaxPrice(value);
    }
    onFilterChange({
      category: selectedCategory,
      brand: selectedBrand,
      minPrice: name === 'minPrice' ? value : minPrice,
      maxPrice: name === 'maxPrice' ? value : maxPrice,
      inStock: false
    });
  };

  const handlePriceRangeSelect = (value, type) => {
    if (type === 'min') {
      setMinPrice(value);
      setShowMinPriceDropdown(false);
    } else {
      setMaxPrice(value);
      setShowMaxPriceDropdown(false);
    }
    
    onFilterChange({
      category: selectedCategory,
      brand: selectedBrand,
      minPrice: type === 'min' ? value : minPrice,
      maxPrice: type === 'max' ? value : maxPrice,
      inStock: false
    });
  };

  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedBrand('');
    setMinPrice('');
    setMaxPrice('');
    onFilterChange({
      category: '',
      brand: '',
      minPrice: '',
      maxPrice: '',
      inStock: false
    });
  };

  return (
    <div className="product-filter">
      <div className="filter-content">
        <div className="sorting-section">
          <h3>Sort Products</h3>
          <SortDropdown sortBy={sortBy} onSortChange={onSortChange} />
        </div>
        
        <h3>Product Categories</h3>
        <ul className="category-list">
          {[...categories, 'All Products'].map(category => (
            <li 
              key={category} 
              className={selectedCategory === (category === 'All Products' ? '' : category) ? 'active' : ''}
            >
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(category);
                }}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>

        <h3>Brands</h3>
        <ul className="category-list">
          {brands.map(brand => (
            <li 
              key={brand} 
              className={selectedBrand === (brand === 'All Brands' ? '' : brand) ? 'active' : ''}
            >
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  handleBrandClick(brand);
                }}
              >
                {brand}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="price-filter">
          <div className="price-input-container" ref={minPriceRef}>
            <label>
              Min Price:
              <input 
                type="number" 
                name="minPrice" 
                value={minPrice} 
                onChange={handlePriceChange}
                onFocus={() => setShowMinPriceDropdown(true)}
                placeholder="Enter min price"
              />
            </label>
            {showMinPriceDropdown && (
              <ul className="price-dropdown">
                {priceRanges.min.map((price) => (
                  <li 
                    key={price}
                    onClick={() => handlePriceRangeSelect(price, 'min')}
                    className={minPrice === price ? 'active' : ''}
                  >
                    ${price}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="price-input-container" ref={maxPriceRef}>
            <label>
              Max Price:
              <input 
                type="number" 
                name="maxPrice" 
                value={maxPrice} 
                onChange={handlePriceChange}
                onFocus={() => setShowMaxPriceDropdown(true)}
                placeholder="Enter max price"
              />
            </label>
            {showMaxPriceDropdown && (
              <ul className="price-dropdown">
                {priceRanges.max.map((price) => (
                  <li 
                    key={price}
                    onClick={() => handlePriceRangeSelect(price, 'max')}
                    className={maxPrice === price ? 'active' : ''}
                  >
                    ${price}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        <button 
          className="reset-filters" 
          onClick={resetFilters}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default ProductFilter;