import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { AppleLogo } from './shared';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css';

import {
  BLACK,
  CONTAINER_HEIGHT,
  NAV_HEIGHT,
  NAV_BRAND_WIDTH,
  PAGE_LOGO_WIDTH,
  PAGE_SIDEBAR_WIDTH,
  WHITE,
  easeInDefault,
  fadeIn,
  fadeOut,
  homeIntroTextPosition,
  homeIntroSlideInContainer,
  scaleUp,
  slideDown,
} from '../constants/styles';

const IntroCounter = styled.div`
  position: absolute;
  top: 75%;
  width: 100%;
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  letter-spacing: 15px;
`;

const IntroLogoWrapper = styled.div`
  animation: ${fadeIn} ${easeInDefault}, ${scaleUp} ${easeInDefault};
`;

const IntroMessage = styled.h1`
  position: absolute;
  text-align: center;
  top: 51%;
  font-weight: 500;
  font-size: 20px;
  animation: ${scaleUp} ${easeInDefault}, ${fadeIn} ${easeInDefault},
    ${homeIntroTextPosition} ${easeInDefault};
`;

const IntroWrapper = styled.div`
  position: relative;
  height: calc(80% - ${CONTAINER_HEIGHT});
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 107px ${PAGE_SIDEBAR_WIDTH} 0;
  animation: ${homeIntroSlideInContainer} ${easeInDefault};
  background: transparent linear-gradient(180deg, #5ac8fa -25%, #ffffff00 76%) 0% 0% no-repeat
    padding-box;
`;

const Wrapper = styled.section`
  height: 100%;
  overflow: hidden;
  cursor: pointer;
`;

const HomeIntro = ({ handleToggleHome }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(2020);
  });

  return (
    <Wrapper onClick={handleToggleHome}>
      <IntroWrapper>
        <IntroLogoWrapper>
          <AppleLogo color={WHITE} width={PAGE_LOGO_WIDTH} />
        </IntroLogoWrapper>
        <IntroMessage>New Products Coming This Summer</IntroMessage>
      </IntroWrapper>
      <IntroCounter>
        <Odometer value={counter} format="dddd" duration={1600} />
      </IntroCounter>
    </Wrapper>
  );
};

export default HomeIntro;
