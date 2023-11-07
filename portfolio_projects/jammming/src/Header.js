import React from 'react';

function Header() {

    const headerStyle = {
        height: '100px',
        backgroundColor: 'darkblue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
      <div style={headerStyle}>
        <h1>Ja<span style={{color: 'purple'}}>mmm</span>ing</h1>
      </div>
    );
};

export default Header;