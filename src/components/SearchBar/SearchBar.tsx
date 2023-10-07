import React, { useState } from 'react';
import './SearchBar.css'; 
/**
 * SearchBar component to allow users to search.
 */
const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  /**
   * Handle search input change.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  /**
   * Clear the search input.
   */
  const clearSearch = () => {
    setSearchText('');
  };

  return (
    <div className="search-bar" data-component="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button onClick={clearSearch}>
        {searchText ? (
          <span className="icon">X</span> 
        ) : (
          <span className="icon">🔍</span> 
        )}
      </button>
    </div>
  );
};

export default SearchBar;
