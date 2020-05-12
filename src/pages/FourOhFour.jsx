import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AppleLogo } from '../components';

import {
  BACKGROUND_GREY,
  CONTAINER_HEIGHT,
  LIGHT_BLUE,
  GREY,
  PAGE_LOGO_WIDTH,
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

const HomeMessage = styled.h1`
  position: absolute;
  font-size: 65px;
  text-align: center;
  top: 37%;
`;

const RedirectHomeLink = styled(Link)`
  position: absolute;
  bottom: 10%;
  color: ${LIGHT_BLUE};
  font-weight: 500;
`;

const Wrapper = styled.section`
  background: ${BACKGROUND_GREY};
  height: 100%;
  padding-top: 7px;
  text-align: center;
`;

const FourOhFour = () => {
  return (
    <Wrapper>
      <HomeHeader>
        <AppleLogo color={GREY} customStyle={{ width: PAGE_LOGO_WIDTH }} />
        <HomeMessage>404 | Are you lost?</HomeMessage>
        <RedirectHomeLink to="/">Go home</RedirectHomeLink>
      </HomeHeader>
    </Wrapper>
  );
};

export default FourOhFour;
