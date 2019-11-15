import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  // background-color: #12B0C9;
`

const NavStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 2rem;
`

export default function Header() {
  return (
    <HeaderStyle>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavStyle>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
      </NavStyle>
    </HeaderStyle>
  );
}