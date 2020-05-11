import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { bool, func } from 'prop-types';
import styled, { css } from 'styled-components';

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
import { NAV_LINKS } from '../constants/routes';

// Nav animations
const slideInNav = css`
  animation: ${slideDown} ${easeInDefault};
`;

const fadeOutNav = css`
  transition: visibility 0s 1s, opacity 1s ease-out;
`;

const DefaultNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  visibility: ${({ isIntro }) => (isIntro ? 'hidden' : 'visable')};
`;

const IntroNav = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${BLACK};
  visibility: ${({ isIntro }) => (isIntro ? 'visable' : 'hidden')};
  opacity: ${({ isIntro }) => (isIntro ? '1' : '0')};
  ${({ isIntro }) => (isIntro ? slideInNav : fadeOutNav)}
`;

const Nav = styled.nav`
  position: relative;
  height: ${NAV_HEIGHT};
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

const Navbar = ({ isIntro, handleToggleHome }) => {
  return (
    <Nav>
      <IntroNav isIntro={isIntro}>
        <AppleLogo color={WHITE} width={NAV_BRAND_WIDTH} />
      </IntroNav>
      <DefaultNav isIntro={isIntro}>
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
      </DefaultNav>
    </Nav>
  );
};

Navbar.propTypes = {
  isIntro: bool,
  handleToggleHome: func,
};

Navbar.defaultProps = {
  isIntro: false,
  handleToggleHome: null,
};

export default Navbar;
