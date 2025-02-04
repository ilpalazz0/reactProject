import React from 'react';
import './styles/SortDropdown.css';

const SortDropdown = ({ sortBy, onSortChange }) => {
  return (
    <select 
      className="sort-dropdown"
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
    >
      <option value="default">Sort By</option>
      <option value="price_asc">Price: Low to High</option>
      <option value="price_desc">Price: High to Low</option>
    </select>
  );
};

export default SortDropdown;