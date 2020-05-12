import React from 'react';
import { array, string } from 'prop-types';
import styled from 'styled-components';

import AppleLogo from './AppleLogo';
import { ALT_GREY, APPLE_LOGO_CUSTOM, BACKGROUND_GREY, GREY, RED } from '../constants/styles';

const Heading = styled.h1`
  font-size: 100px;
  font-weight: bold;
  line-height: 100px;
  margin 0.5em 0;
  `;

const Message = styled.div`
  color: ${ALT_GREY};
  font-size: 25px;
  line-height: 30px;
`;

const Title = styled.div`
  color: ${RED};
  font-size: 32px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 84px 0 100px 76px;
  background: ${BACKGROUND_GREY};
  flex: 2;
`;

const HeroMain = ({ heading, message, title }) => {
  const widowKilla = (texts) => {
    return texts.map((phrase, index) => {
      const key = `key-key-${Math.random()}`;
      if (index !== texts.length - 1) {
        return (
          <span key={key}>
            {phrase} <br />
          </span>
        );
      }
      return <span key={key}>{phrase}</span>;
    });
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Heading>{widowKilla(heading)}</Heading>
      <Message>{widowKilla(message)}</Message>
      <AppleLogo color={GREY} customStyle={APPLE_LOGO_CUSTOM} />
    </Wrapper>
  );
};

HeroMain.propTypes = {
  heading: array.isRequired,
  message: array.isRequired,
  title: string.isRequired,
};

export default HeroMain;
