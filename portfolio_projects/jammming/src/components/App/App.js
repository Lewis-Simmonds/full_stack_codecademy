import React from 'react';
import "./App.css";

import Search from '../Search/Search';
import Spotify from "../../util/Spotify";

function App() {
  
  return (
    <>
      <h1>Ja<span>mmm</span>ing</h1>
      <Search onSearch={Spotify.search} />
    </>  
  );
};

export default App;
