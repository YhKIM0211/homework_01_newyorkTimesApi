import React from 'react';
import { Link } from 'react-router-dom';
import HeaderDiv from '../styles/HeaderStyle'

function Header() {

  return (
    <>
      <HeaderDiv>
        <h1>NewYork Times Search</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/clip">Clip</Link>
        </nav>
      </HeaderDiv>
    </>
  );
};

export default Header;