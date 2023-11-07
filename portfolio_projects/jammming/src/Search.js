import React from 'react';

function Search() {

  const searchBoxStyle = {
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const searchFormStyle = {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div style={searchBoxStyle}>
      <form action="" style={searchFormStyle}>
        <input type="text" placeholder="Search..." name="search"/>
        <br />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;