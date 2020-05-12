import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

import HeroHeading from './HeroHeading';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Hero = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Hero.Heading = HeroHeading;

Hero.propTypes = {
  children: node.isRequired,
};

export default Hero;
