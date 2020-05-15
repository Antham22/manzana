import React from 'react';
import { array, bool, element, string } from 'prop-types';
import styled from 'styled-components';

import { ALT_GREY, BACKGROUND_GREY, BLACK, LIGHT_BLUE, RED } from '../constants/styles';

const Heading = styled.h1`
  font-size: 100px;
  font-weight: bold;
  line-height: 100px;
  margin 0.5em 0;
  color: ${BLACK};
  `;

const Left = styled.div`
  flex: 1;
  background: ${BACKGROUND_GREY};
  padding: 84px 0 84px 76px;
`;

const Message = styled.div`
  color: ${ALT_GREY};
  font-size: 25px;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  padding-top: 115px;
`;

const Title = styled.div`
  color: ${({ alt }) => (alt ? LIGHT_BLUE : RED)};
  font-size: 32px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  background: url(/images/apple_background.svg) no-repeat 50% 30%;
  background-size: 165.59px 203.12px;
`;

const Hero = ({ children, heading, message, title }) => {
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
      <Left>
        <Title>{title}</Title>
        <Heading>{widowKilla(heading)}</Heading>
        <Message>{widowKilla(message)}</Message>
      </Left>
      <Right>{children}</Right>
    </Wrapper>
  );
};

Hero.propTypes = {
  alt: bool,
  children: element,
  heading: array,
  message: array,
  title: string,
};

Hero.defaultProps = {
  alt: false,
  children: null,
  heading: null,
  message: null,
  title: null,
};

export default Hero;
