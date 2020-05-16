import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HomeWrapper, Navbar, PageSlider } from '../components';

import {
  LIGHT_BLUE,
  scaleDownHomePageSlider,
  slideDownHomeWelcome,
  slideUpHomeProductsLink,
  linkTransitionTime,
} from '../constants/styles';

const transitionTime = '1s ease-in 0s 1';

const Welcome = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${slideDownHomeWelcome} ${transitionTime};
`;

const ProductsLink = styled(Link)`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${LIGHT_BLUE};
  font-weight: 500;
  animation: ${slideUpHomeProductsLink} ${transitionTime};
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  transition: opacity ${linkTransitionTime};
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
  animation: ${scaleDownHomePageSlider} ${transitionTime};
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeWrapper>
        <HomeWrapper.Header image="/images/apple_background.svg">
          <Welcome>
            <h1 style={{ fontSize: '65px' }}>Welcome to Apple</h1>
          </Welcome>
          <ProductsLink to="/iphone">See our Products</ProductsLink>
        </HomeWrapper.Header>
        <HomeWrapper.Footer>
          <PageSliderContainer>
            <PageSlider />
          </PageSliderContainer>
        </HomeWrapper.Footer>
      </HomeWrapper>
    </>
  );
};

export default Home;
