import React from 'react';

import styled from 'styled-components';

import AppleBrand from './AppleBrand';
import {
  BLACK,
  NAV_BRAND_WIDTH,
  WHITE,
  NAV_HEIGHT,
  easeInDefault,
  slideDown,
} from '../constants/styles';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${NAV_HEIGHT};
  background-color: ${BLACK};
  animation: ${slideDown} ${easeInDefault};

  &.example-exit {
    opacity: 0;
    transition: opacity 1500s ease-in;
  }
`;

const IntroNavbar = () => {
  return (
    <Nav>
      <AppleBrand color={WHITE} customStyle={{ width: NAV_BRAND_WIDTH }} />
    </Nav>
  );
};

export default IntroNavbar;
