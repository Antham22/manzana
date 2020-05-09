import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { AppleLogo } from './shared';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css';

import {
  BLACK,
  NAV_HEIGHT,
  NAV_LOGO_WIDTH,
  PAGE_LOGO_WIDTH,
  PAGE_SIDEBAR_WIDTH,
  WHITE,
  homeIntroAnimationTransition,
  homeIntroExpandFromTop,
  homeIntroScaleFadeInLogo,
  homeIntroSlideInIntroText,
  homeIntroSlideInFromTop,
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
  animation: ${homeIntroAnimationTransition} ${homeIntroScaleFadeInLogo};
`;

const IntroMessage = styled.div`
  position: absolute;
  text-align: center;
  top: 53%;
  font-size: 20px;
  font-weight: 500;
  animation: ${homeIntroAnimationTransition} ${homeIntroSlideInIntroText};
`;

const IntroNav = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: ${NAV_HEIGHT};
  background-color: ${BLACK};
  animation: ${homeIntroAnimationTransition} ${homeIntroSlideInFromTop};
`;

const IntroWrapper = styled.div`
  position: relative;
  height: calc(80% - (${NAV_HEIGHT} - 7px));
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 107px ${PAGE_SIDEBAR_WIDTH} 0;
  animation: ${homeIntroAnimationTransition} ${homeIntroExpandFromTop};
  background: transparent linear-gradient(180deg, #5ac8fa -25%, #ffffff00 76%) 0% 0% no-repeat
    padding-box;
`;

const Wrapper = styled.section`
  height: 100%;
  overflow: hidden;
`;

const HomeIntro = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(2020);
  });

  return (
    <Wrapper>
      <IntroNav>
        <AppleLogo color={WHITE} width={NAV_LOGO_WIDTH} />
      </IntroNav>
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
