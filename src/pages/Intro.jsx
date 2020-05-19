import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css';

import { IntroNavbar, PageWrapper } from '../components';
import {
  BACKGROUND_BLUE,
  NAV_HEIGHT,
  PAGE_SIDEBAR_WIDTH,
  easeInDefault,
  fadeIn,
  scaleUp,
} from '../constants/styles';

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContentWrapper = styled.div`
  height: calc(100% - ${NAV_HEIGHT});
  cursor: pointer;
`;

const Footer = styled.div`
  text-align: center;
`;
const Header = styled.div`
  position: relative;
  background: ${BACKGROUND_BLUE};
  height: 75%;
  margin: 0 ${PAGE_SIDEBAR_WIDTH};
  animation: slideInContainer ${easeInDefault};

  @keyframes slideInContainer {
    from {
      margin: 0;
      transform: translateY(-100px);
    }

    to {
      margin: 0 ${PAGE_SIDEBAR_WIDTH};
      transform: translateY(0);
    }
  }
`;

const Image = styled.img`
  width: 295px;
  height: 362px;
  animation: ${scaleUp} ${easeInDefault}, ${fadeIn} ${easeInDefault};
`;

const IntroCounter = styled.div`
  position: absolute;
  top: 75%;
  width: 100%;
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 15px;
`;

const Message = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  animation: slideInIntroText ${easeInDefault};

  @keyframes slideInIntroText {
    from {
      transform: scale(1.3) translateY(150px);
      opacity: 0;
    }

    to {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }
`;

const Intro = () => {
  const [redirect, setRedirect] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleToggleHome = () => setRedirect(!redirect);

  useEffect(() => {
    setCounter(2019);
  }, [setCounter]);

  if (redirect) {
    return <Redirect to={{ pathname: '/', state: { fromIntro: true } }} />;
  }

  return (
    <PageWrapper>
      <IntroNavbar />
      <ContentWrapper onClick={handleToggleHome}>
        <Header>
          <Content>
            <Image src="/images/apple_background_white.svg" />
          </Content>
          <Content style={{ top: ' 55%' }}>
            <Message>New Products Coming This Summer</Message>
          </Content>
        </Header>
        <Footer>
          <IntroCounter>
            <Odometer value={counter} format="dddd" duration={1600} />
          </IntroCounter>
        </Footer>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Intro;
