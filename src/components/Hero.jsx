import React from 'react';
import { array, element, node, string } from 'prop-types';
import styled from 'styled-components';

import { ALT_GREY, BACKGROUND_GREY, BLACK, RED } from '../constants/styles';

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
  padding: 3% 0 3% 4%;
`;

const Message = styled.div`
  color: ${ALT_GREY};
  font-size: 25px;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  padding-top: 3%;
`;

const Title = styled.div`
  color: ${RED};
  font-size: 32px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  background: url(/images/apple_background.svg) no-repeat 50% 30%;
  background-size: 165.59px 203.12px;
  ${({ animation }) => animation}
`;

const Hero = ({ animation, children, heading, message, title }) => {
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
    <Wrapper animation={animation}>
      <Left>
        <Title>{title}</Title>
        <Heading>{widowKilla(heading)}</Heading>
        <Message>{message}</Message>
      </Left>
      <Right>{children}</Right>
    </Wrapper>
  );
};

Hero.propTypes = {
  animation: node,
  children: element,
  heading: array,
  message: string,
  title: string,
};

Hero.defaultProps = {
  animation: null,
  children: null,
  heading: null,
  message: null,
  title: null,
};

export default Hero;
