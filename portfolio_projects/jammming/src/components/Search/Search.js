import React from 'react';
import "./Search.css";

function Search() {
  return (
    <>
      <form action="" className="search-form">
        <input type="text" placeholder="Search..." name="search"/>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Search;