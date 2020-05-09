import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AppleLogo } from './shared';

import {
  CONTAINER_HEIGHT,
  LIGHT_BLUE,
  GREY,
  PAGE_LOGO_WIDTH,
  PAGE_SIDEBAR_WIDTH,
  easeInSec,
  fadeIn,
  scaleDown,
  slideDown,
  slideUp,
} from '../constants/styles';
import { NAV_LINKS } from '../constants/common';

const HomeHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(80% - ${CONTAINER_HEIGHT});
  text-align: center;
  div:first-child {
    opacity: 0.3;
  }
`;

const HomeFooter = styled.div`
  position: absolute;
  top: 75%;
  width: calc(100% - (${PAGE_SIDEBAR_WIDTH} * 2));
  text-align: center;
  animation: ${fadeIn} ${easeInSec}, ${scaleDown} ${easeInSec};
`;

const HomeMessage = styled.h1`
  position: absolute;
  font-size: 65px;
  text-align: center;
  top: 37%;
  animation: ${slideDown} ${easeInSec}, ${fadeIn} ${easeInSec};
`;

const ProductsLink = styled(Link)`
  position: absolute;
  bottom: 10%;
  color: ${LIGHT_BLUE};
  font-weight: 500;
  animation: ${slideUp} ${easeInSec}, ${fadeIn} ${easeInSec};
`;

const ProductsLinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin: 0 25px;
  }
  padding: 0;
  text-align: center;
  margin-top: 10%;
`;

const Wrapper = styled.section`
  background: transparent linear-gradient(90deg, #f2f2f2 0%, #ffffff00 100%) 0% 0% no-repeat
    padding-box;
  height: 100%;
  padding-top: 7px;
  padding-right: calc(100px);
  margin-left: ${PAGE_SIDEBAR_WIDTH};
  text-align: center;
`;

const HomeMain = () => {
  return (
    <Wrapper>
      <HomeHeader>
        <AppleLogo color={GREY} width={PAGE_LOGO_WIDTH} />
        <HomeMessage>Welcome to Apple</HomeMessage>
        <ProductsLink to="/iphone">See our Products</ProductsLink>
      </HomeHeader>
      <HomeFooter>
        <ProductsLinkList>
          {NAV_LINKS.map((link) => (
            <Link key={link.id} to={link.path}>
              <img src={`/images/${link.id}-icon.png`} />
            </Link>
          ))}
        </ProductsLinkList>
      </HomeFooter>
    </Wrapper>
  );
};

export default HomeMain;
