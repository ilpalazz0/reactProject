import React, { useState } from 'react';
import ProductFilter from './ProductFilter';
import ProductsGrid from './ProductsGrid';
import SearchBar from './SearchBar';
import './styles/ProductsPage.css';

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('default');

  return (
    <div className="products-page-container">
      <div className="filter-section">
        <ProductFilter 
          onFilterChange={setFilters}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>
      
      <div className="main-content">
        <div className="search-header">
          <SearchBar onSearch={setSearchTerm} />
        </div>
        <ProductsGrid 
          searchTerm={searchTerm} 
          filters={filters}
          sortBy={sortBy}
        />
      </div>
    </div>
  )
}

export default ProductsPage;