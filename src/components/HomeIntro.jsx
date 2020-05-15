import React, { useEffect, useState } from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';

import HomeWrapper from './HomeWrapper';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css';

import { BACKGROUND_BLUE } from '../constants/styles';

const IntroCounter = styled.div`
  position: absolute;
  top: 75%;
  width: 100%;
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 15px;
`;

const HomeIntro = ({ handleToggleHome }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(2019);
  }, [setCounter]);

  return (
    <HomeWrapper background={BACKGROUND_BLUE} handleOnClick={handleToggleHome}>
      <HomeWrapper.Header image="/images/apple_background_white.svg">
        <HomeWrapper.Message>
          <h1 style={{ fontSize: '20px', fontWeight: 500 }}>New Products Coming This Summer</h1>
        </HomeWrapper.Message>
      </HomeWrapper.Header>
      <HomeWrapper.Footer>
        <IntroCounter>
          <Odometer value={counter} format="dddd" duration={1600} />
        </IntroCounter>
      </HomeWrapper.Footer>
    </HomeWrapper>
  );
};

HomeIntro.propTypes = {
  handleToggleHome: func.isRequired,
};

export default HomeIntro;
