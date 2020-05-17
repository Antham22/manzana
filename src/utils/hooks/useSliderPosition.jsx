import React, { useState, useRef } from 'react';

const useSliderPosition = () => {
  const offsetX = useRef(null);
  const [position, setPosition] = useState(0);

  const moveSwitch = (event) => {
    const { clientX, target: el } = event;
    const { offset } = offsetX.current;
    const positionX = clientX - offset;

    if (positionX >= 0 && positionX <= 100) {
      setPosition(positionX);
      offsetX.current = { ...offsetX.current, left: positionX };
    }
  };

  const removeSwitchListener = (event) => {
    const { target: el } = event;
    const { left } = offsetX.current;

    if (left <= 50) {
      setPosition(0);
    } else {
      setPosition(100);
    }
    el.removeEventListener('mousemove', moveSwitch);
    el.removeEventListener('mouseout', removeSwitchListener);
    el.removeEventListener('mouseup', removeSwitchListener);
  };

  const handleMoveSlider = (event) => {
    const { clientX, target: el } = event;
    offsetX.current = { offset: clientX - position, left: position };

    el.addEventListener('mousemove', moveSwitch);
    el.addEventListener('mouseout', removeSwitchListener);
    document.addEventListener('mouseup', removeSwitchListener);
  };

  return {
    position,
    handleMoveSlider,
  };
};

export default useSliderPosition;
