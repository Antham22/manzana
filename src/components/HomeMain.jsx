import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import HomeWrapper from './HomeWrapper';
import PageSlider from './PageSlider';

import { LIGHT_BLUE } from '../constants/styles';

const Welcome = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProductsLink = styled(Link)`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${LIGHT_BLUE};
  font-weight: 500;
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

const HomeMain = () => {
  return (
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
  );
};

export default HomeMain;
