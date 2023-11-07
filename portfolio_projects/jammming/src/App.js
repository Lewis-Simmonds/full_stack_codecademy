import React from 'react';
import Header from './Header';
import Search from './Search';

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Search />
      </div>
    </div>  
  );
};

export default App;
