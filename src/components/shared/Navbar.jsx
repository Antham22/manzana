import React from 'react';
import styled from 'styled-components';

import AppleLogo from './AppleLogo';

const Nav = styled.nav`
  height: 100px;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const NavListItem = styled.li`
  display: inline;
`;

const Navbar = () => {
  return (
    <Nav>
      <AppleLogo color="#fff" width="30px" />
      <NavList>
        <NavListItem>iPhone</NavListItem>
        <NavListItem>MacBook Pro</NavListItem>
        <NavListItem>Watch</NavListItem>
        <NavListItem>Notify me</NavListItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
