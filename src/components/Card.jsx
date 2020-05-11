import React from 'react';
import { element, string } from 'prop-types';
import styled from 'styled-components';

import { WHITE } from '../constants/styles';

const Wrapper = styled.div`
  background-color: ${WHITE};
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #f2f2f2;
  padding: 58px 0;
`;

const Card = ({ children, customStyle }) => {
  return <Wrapper style={customStyle}>{children}</Wrapper>;
};

Card.propTypes = {
  children: element,
  width: string,
};

Card.defaultProps = {
  children: null,
  width: null,
};

export default Card;
