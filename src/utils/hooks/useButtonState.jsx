import { useState, useEffect } from 'react';

import { getButtonState } from '../';
import { BLACK } from '../../constants/styles';

const useButtonState = ({ text, state }) => {
  const [buttonState, setButtonState] = useState({
    text,
    style: { color: BLACK },
    disabled: false,
  });
  useEffect(() => {
    const stateProps = getButtonState(text, state);
    setButtonState(stateProps);
  }, [state, setButtonState, text]);

  return buttonState;
};

export default useButtonState;
