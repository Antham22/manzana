import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AppleLogo from './AppleLogo';
import PageSlider from './PageSlider';

import {
  BACKGROUND_GREY,
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

const PageSliderContainer = styled.ul`
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
  background: ${BACKGROUND_GREY};
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
        <AppleLogo color={GREY} customStyle={{ width: PAGE_LOGO_WIDTH }} />
        <HomeMessage>Welcome to Apple</HomeMessage>
        <ProductsLink to="/iphone">See our Products</ProductsLink>
      </HomeHeader>
      <HomeFooter>
        <PageSliderContainer>
          <PageSlider />
        </PageSliderContainer>
      </HomeFooter>
    </Wrapper>
  );
};

export default HomeMain;
