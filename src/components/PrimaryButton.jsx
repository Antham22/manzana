import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import { BLACK, WHITE } from '../constants/styles';
import { getButtonState } from '../utils';

const Button = styled.button`
  width: 174px;
  height: 54px;
  background-color: ${({ buttonStyle }) => buttonStyle.color};
  opacity: ${({ buttonStyle }) => buttonStyle.opacity};
  color: ${WHITE};
  font-size: 14px;
  font-weight: bold;
  cursor: not-allowed;
  cursor: ${({ buttonStyle }) => buttonStyle.cursor};
`;

const PrimaryButton = ({ text, state }) => {
  const [buttonState, setButtonState] = useState({
    text,
    style: { color: BLACK, opacity: 1, cursor: 'pointer' },
    disabled: false,
  });
  useEffect(() => {
    const stateProps = getButtonState(text, state);
    setButtonState(stateProps);
  }, [state, setButtonState, text]);

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
