import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HomeWrapper, Navbar } from '../components';

import { BACKGROUND_GREY, CONTAINER_HEIGHT, LIGHT_BLUE } from '../constants/styles';

const Message = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RedirectHomeLink = styled(Link)`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${LIGHT_BLUE};
  font-weight: 500;
`;

const FourOhFour = () => {
  return (
    <HomeWrapper customStyle={{ margin: 0, height: '100%' }}>
      <HomeWrapper.Header image="/images/apple_background.svg">
        <Message>
          <h1 style={{ fontSize: '65px' }}>404 | Are you lost?</h1>
        </Message>
      </HomeWrapper.Header>
      <RedirectHomeLink to="/">Go home</RedirectHomeLink>
    </HomeWrapper>
  );
};

export default FourOhFour;
