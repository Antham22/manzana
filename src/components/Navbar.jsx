import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { AuthContext } from '../context/AuthContext';
import AppleBrand from './AppleBrand';
import { BLACK, LIGHT, LIGHT_BLUE, NAV_BRAND_WIDTH, WHITE, NAV_HEIGHT } from '../constants/styles';
import { NAV_LINKS } from '../constants/common';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${NAV_HEIGHT};
`;

const NavBrand = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  background-color: ${BLACK};
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const NavListItem = styled.li`
  display: inline;
  color: ${LIGHT};
  font-size: 20px;
  margin-right: 54px;
`;

const NotifyButton = styled.button`
  color: ${WHITE};
  background-color: ${LIGHT_BLUE};
  height: 46px;
  width: 156px;
  border-radius: 25px;
  font-size: inherit;
`;

const Navbar = () => {
  const { handleSignout } = useContext(AuthContext);
  return (
    <Nav>
      <NavBrand to="/intro">
        <AppleBrand color={WHITE} customStyle={{ width: NAV_BRAND_WIDTH }} />
      </NavBrand>
      <NavList>
        {NAV_LINKS.map((link) => (
          <NavListItem key={link.id}>
            <NavLink
              activeStyle={{
                fontWeight: 500,
                color: BLACK,
              }}
              to={link.path}
            >
              {link.name}
            </NavLink>
          </NavListItem>
        ))}
        <NavListItem>
          <NotifyButton onClick={handleSignout}>Sign out</NotifyButton>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
