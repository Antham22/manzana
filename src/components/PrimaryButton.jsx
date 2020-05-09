import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import { BLACK, WHITE } from '../constants/styles';

const Button = styled.button`
  width: 174px;
  height: 54px;
  background-color: ${BLACK};
  color: ${WHITE};
  font-size: 14px;
  font-weight: bold;
`;

const PrimaryButton = ({ text }) => {
  return <Button>{text}</Button>;
};

PrimaryButton.propTypes = {
  text: string,
};

PrimaryButton.defaultProps = {
  text: null,
};

export default PrimaryButton;
