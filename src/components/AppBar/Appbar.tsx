import React, { useState } from 'react';
import './Appbar.css'; 
import SearchBar from '../SearchBar/SearchBar';

/**
 * AppBar component to display the top navigation bar.
 */
const AppBar: React.FC = () => {
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

    const handleDropdownClick = () => {
        setDropdownVisible(!dropdownVisible)
    }
  /**
   * Navigate to the Explore Articles page.
   */
  const goToExploreArticles = () => {
    // Your navigation logic here
    console.log('Navigating to Explore Articles');
  };

  /**
   * Navigate to the Submit Article page.
   */
  const goToSubmitArticle = () => {
    // Your navigation logic here
    console.log('Navigating to Submit Article');
  };

  /**
   * Navigate to the About page.
   */
  const goToAbout = () => {
    // Your navigation logic here
    console.log('Navigating to About');
  };

  const donationsPlease = () => {
    console.log('gimme money'); 
  }

  return (
    <div className="appbar">
      <div className="button-container">
        <button onClick={handleDropdownClick}>Search</button>
        <button onClick={goToExploreArticles}>Explore Articles</button>
        <button onClick={goToSubmitArticle}>Submit Article</button>
        <button onClick={goToAbout}>About</button>
        <button onClick={donationsPlease}>Donations</button>
      </div>
      {dropdownVisible ? <SearchBar /> : null}
    </div>
  );
};

export default AppBar;
