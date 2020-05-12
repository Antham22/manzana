import React from 'react';
import { array, bool, element, string } from 'prop-types';
import styled from 'styled-components';

import {
  ALT_GREY,
  BACKGROUND_GREY,
  BLACK,
  GREY,
  LIGHT_BLUE,
  RED,
  WHITE,
} from '../constants/styles';

const AltMessage = styled.div`
  color: ${GREY};
  opacity: 0.44;
  font-size: 20px;
`;

const AltMessageItem = styled.div`
  display: inline-block;
  margin-right: 105px;
  div:first-child {
    font-size: 50px;
    font-weight: bold;
    line-height: 50px;
  }
`;

const Heading = styled.h1`
  font-size: 100px;
  font-weight: bold;
  line-height: 120px;
  margin 0.5em 0;
  color: ${({ alt }) => (alt ? WHITE : BLACK)};
  `;

const Message = styled.div`
  color: ${ALT_GREY};
  font-size: 25px;
  line-height: 30px;
`;

const Title = styled.div`
  color: ${({ alt }) => (alt ? LIGHT_BLUE : RED)};
  font-size: 32px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 84px 0 100px 76px;
  background: ${({ alt }) => (alt ? BLACK : BACKGROUND_GREY)};
  flex: 2;
`;

const HeroHeading = ({ alt, children, heading, message, title }) => {
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
  if (alt) {
    return (
      <Wrapper alt>
        <Title alt>{title}</Title>
        <Heading alt>{widowKilla(heading)}</Heading>
        <AltMessage>
          {message.map((obj) => {
            return (
              <AltMessageItem key={`${obj.top}-${obj.bottom}`}>
                <div>{obj.top}</div>
                <div>{obj.bottom}</div>
              </AltMessageItem>
            );
          })}
        </AltMessage>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Heading>{widowKilla(heading)}</Heading>
      <Message>{widowKilla(message)}</Message>
      {children}
    </Wrapper>
  );
};

HeroHeading.propTypes = {
  alt: bool,
  children: element,
  heading: array,
  message: array,
  title: string,
};

HeroHeading.defaultProps = {
  alt: false,
  children: null,
  heading: null,
  message: null,
  title: null,
};

export default HeroHeading;
