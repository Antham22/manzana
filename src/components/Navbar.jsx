import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { AuthContext } from '../context/AuthContext';
import AppleBrand from './AppleBrand';
import {
  BLACK,
  LIGHT_BLUE,
  NAV_BRAND_WIDTH,
  WHITE,
  NAV_HEIGHT,
  fadeOut,
  linkTransitionTime,
} from '../constants/styles';
import { NAV_LINKS } from '../constants/common';

export const fadeOutTime = '1s ease-out';

const Nav = styled.div`
  position: relative;
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
  font-size: 20px;
  margin-right: 54px;
`;

const StyledNavLink = styled(NavLink)`
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
  transition: opacity ${linkTransitionTime};
`;

const NotifyButton = styled.button`
  color: ${WHITE};
  background-color: ${LIGHT_BLUE};
  height: 46px;
  width: 156px;
  border-radius: 25px;
  font-size: inherit;

  &:hover {
    background-color: ${WHITE};
    border: 1px solid ${LIGHT_BLUE};
    color: ${LIGHT_BLUE};
  }
  transition: ${linkTransitionTime};
`;

const IntroNavTransition = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${BLACK};
  visibility: hidden;
  animation: ${fadeOut} ${fadeOutTime};
`;

const Navbar = () => {
  const { state } = useLocation();
  const { handleSignout } = useContext(AuthContext);

  return (
    <Nav>
      {state && state.fromIntro && (
        <IntroNavTransition>
          <AppleBrand color={WHITE} customStyle={{ width: NAV_BRAND_WIDTH }} />
        </IntroNavTransition>
      )}

      <NavBrand to="/intro">
        <AppleBrand color={WHITE} customStyle={{ width: NAV_BRAND_WIDTH }} />
      </NavBrand>
      <NavList>
        {NAV_LINKS.map((link) => (
          <NavListItem key={link.id}>
            <StyledNavLink
              activeStyle={{
                fontWeight: 500,
                opacity: 1,
              }}
              to={link.path}
            >
              {link.name}
            </StyledNavLink>
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
