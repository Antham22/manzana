import React, { useEffect, useState } from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';

import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css';

import {
  BACKGROUND_BLUE,
  NAV_HEIGHT,
  PAGE_SIDEBAR_WIDTH,
  easeInDefault,
  fadeIn,
  homeIntroText,
  slideInHomeIntro,
  scaleUp,
} from '../constants/styles';

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Footer = styled.div`
  text-align: center;
`;
const Header = styled.div`
  position: relative;
  background: ${BACKGROUND_BLUE};
  height: 75%;
  margin: 0 ${PAGE_SIDEBAR_WIDTH};
  animation: ${easeInDefault} ${slideInHomeIntro};
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
  animation: ${homeIntroText} ${easeInDefault};
`;

const Wrapper = styled.div`
  height: calc(100% - ${NAV_HEIGHT});
  cursor: pointer;
`;

const HomeIntro = ({ handleToggleHome }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(2019);
  }, [setCounter]);

  return (
    <Wrapper onClick={handleToggleHome}>
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
    </Wrapper>
  );
};

HomeIntro.propTypes = {
  handleToggleHome: func.isRequired,
};

export default HomeIntro;
