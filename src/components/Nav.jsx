import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <nav>
        <SearchBar onSearch={onSearch}/>
      </nav>
      </div>
  );
};

export default Nav;
