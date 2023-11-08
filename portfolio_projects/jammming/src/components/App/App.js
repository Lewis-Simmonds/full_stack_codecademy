import React from 'react';
import "./App.css";

import Search from '../Search/Search';

function App() {
  return (
    <>
      <h1>Ja<span>mmm</span>ing</h1>
      <div className="content">
        <div className="search-box">
          <Search />
        </div>
        <div className="lists">
        </div>
      </div>
    </>  
  );
};

export default App;
