import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useIsHome from '../utils/hooks/useIsHome';
import { HomeWrapper, Navbar, PageSlider, PageWrapper } from '../components';
import { LIGHT_BLUE, linkTransitionTime, slideOutUp } from '../constants/styles';

const transitionTime = '0.6s ease-in';

const Welcome = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: slideDownText ${transitionTime};

  @keyframes slideDownText {
    from {
      transform: translate(-50%, -100%);
    }

    to {
      transform: translate(-50%, -50%);
    }
  }
`;

const ProductsLink = styled(Link)`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${LIGHT_BLUE};
  font-weight: 500;
  animation: slideUpText ${transitionTime};
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  transition: opacity ${linkTransitionTime};

  @keyframes slideUpText {
    from {
      transform: translate(-50%, 150%);
    }

    to {
      transform: translate(-50%, -50%);
    }
  }
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
  animation: scaleInText ${transitionTime};

  @keyframes scaleInText {
    from {
      transform: scale(2);
      opacity: 0;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Wrapper = styled(PageWrapper)`
  &.page-exit {
    animation: ${slideOutUp} 0.6s forwards;
  }
`;

const Home = () => {
  const isHome = useIsHome();

  if (isHome) {
    return null;
  }

  return (
    <Wrapper isHome={isHome}>
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
    </Wrapper>
  );
};

export default Home;
