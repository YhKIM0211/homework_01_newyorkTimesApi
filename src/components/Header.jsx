import React from 'react';
import HeaderDiv from '../styles/HeaderStyle'

function Header () {

  return (
    <>
      <HeaderDiv>
        <h1>NewYork Times Search</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/clip">Clip</a>
        </nav>
      </HeaderDiv>
    </>
  );
};

export default Header;