import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

import { AuthContext } from '../context/AuthContext';
import AppleBrand from './AppleBrand';
import { BLACK, LIGHT, LIGHT_BLUE, NAV_BRAND_WIDTH, WHITE, NAV_HEIGHT } from '../constants/styles';
import { NAV_LINKS } from '../constants/common';

const DefaultNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const IntroNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${BLACK};
`;

const Nav = styled.nav`
  width: 100%;
  height: ${NAV_HEIGHT};
  background-color: ${WHITE};
  z-index: 1;
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
  const { handleSignout } = useContext(AuthContext);
  return (
    <Nav>
      {isIntro ? (
        <IntroNav isIntro={isIntro}>
          <AppleBrand color={WHITE} customStyle={{ width: NAV_BRAND_WIDTH }} />
        </IntroNav>
      ) : (
        <DefaultNav isIntro={isIntro}>
          <NavBrand to="/" onClick={handleToggleHome}>
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
        </DefaultNav>
      )}
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
