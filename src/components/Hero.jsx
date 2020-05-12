import React from 'react';
import { element } from 'prop-types';
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
  children: element.isRequired,
};

export default Hero;
