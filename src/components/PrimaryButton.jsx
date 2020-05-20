import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import useButtonState from '../utils/hooks/useButtonState';
import { WHITE } from '../constants/styles';

const Button = styled.button`
  width: 174px;
  height: 54px;
  background-color: ${({ buttonStyle }) => buttonStyle.color};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  color: ${WHITE};
  font-size: 14px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const PrimaryButton = ({ text, state }) => {
  const buttonState = useButtonState({ text, state });
  return (
    <Button disabled={buttonState.disabled} buttonStyle={buttonState.style}>
      {buttonState.text}
    </Button>
  );
};

PrimaryButton.propTypes = {
  text: string,
  state: string,
};

PrimaryButton.defaultProps = {
  text: null,
  state: null,
};

export default PrimaryButton;
