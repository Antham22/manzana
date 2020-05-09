import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

import AppleLogo from './AppleLogo';
import {
  BLACK,
  LIGHT,
  LIGHT_BLUE,
  NAV_BRAND_WIDTH,
  WHITE,
  NAV_HEIGHT,
  slideDown,
  easeInDefault,
} from '../constants/styles';
import { NAV_LINKS } from '../constants/common';

const Nav = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: calc(115px - 54px);
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

const IntroNav = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: ${NAV_HEIGHT};
  background-color: ${BLACK};
  animation: ${slideDown} ${easeInDefault};
`;

const Navbar = ({ isIntro, handleToggleHome }) => {
  if (isIntro) {
    return (
      <IntroNav isIntro={isIntro}>
        <AppleLogo color={WHITE} width={NAV_BRAND_WIDTH} />
      </IntroNav>
    );
  }
  return (
    <>
      <Nav>
        <NavBrand to="/" onClick={handleToggleHome}>
          <AppleLogo color="#fff" width={NAV_BRAND_WIDTH} />
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
            <NotifyButton>Notify me</NotifyButton>
          </NavListItem>
        </NavList>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  isIntro: bool.isRequired,
  handleToggleHome: func.isRequired,
};

export default Navbar;
