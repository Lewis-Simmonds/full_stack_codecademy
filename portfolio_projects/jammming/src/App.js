import React from 'react';
import Header from './Header';
import Search from './Search';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Search />
      </div>
    </>  
  );
};

export default App;
