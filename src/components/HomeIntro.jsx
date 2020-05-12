import React, { useEffect, useState } from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';

import AppleLogo from './AppleLogo';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css';

import {
  BACKGROUND_BLUE,
  CONTAINER_HEIGHT,
  PAGE_LOGO_WIDTH,
  PAGE_SIDEBAR_WIDTH,
  WHITE,
  easeInDefault,
  fadeIn,
  scaleUp,
  slideInHomeIntro,
  slideUpHomeIntroText,
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
    ${slideUpHomeIntroText} ${easeInDefault};
`;

const IntroWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(80% - ${CONTAINER_HEIGHT});
  margin: 107px ${PAGE_SIDEBAR_WIDTH} 0;
  background: ${BACKGROUND_BLUE};
  animation: ${slideInHomeIntro} ${easeInDefault};
`;

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const HomeIntro = ({ handleToggleHome }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(2020);
  }, [setCounter]);

  return (
    <Wrapper onClick={handleToggleHome}>
      <IntroWrapper>
        <IntroLogoWrapper>
          <AppleLogo color={WHITE} customStyle={{ width: PAGE_LOGO_WIDTH }} />
        </IntroLogoWrapper>
        <IntroMessage>New Products Coming This Summer</IntroMessage>
      </IntroWrapper>
      <IntroCounter>
        <Odometer value={counter} format="dddd" duration={1600} />
      </IntroCounter>
    </Wrapper>
  );
};

HomeIntro.propTypes = {
  handleToggleHome: func.isRequired,
};

export default HomeIntro;
