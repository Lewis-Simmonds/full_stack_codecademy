import React, { useState, useCallback } from 'react';
import "./Search.css";

function Search(props) {

  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

  return (
    <div className="search-form">
      <input type="text" placeholder="Search For A Track" onChange={handleTermChange} />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;