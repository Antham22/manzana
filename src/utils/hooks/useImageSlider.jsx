import { useState, useRef } from 'react';
import { number } from 'prop-types';

const useImageSlider = () => {
  const offsetX = useRef(null);
  const [position, setPosition] = useState(0);

  const moveSwitch = (event) => {
    const { clientX } = event;
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

    el.removeEventListener('mousemove', moveSwitch, true);
    el.removeEventListener('mouseout', removeSwitchListener, true);
    el.removeEventListener('mouseup', removeSwitchListener, true);

    if (left <= 50) {
      setPosition(0);
    } else {
      setPosition(100);
    }
  };

  const handleImageClick = (index) => () => {
    if (index === 0) {
      return setPosition(0);
    }
    return setPosition(100);
  };

  const handleMoveSlider = (event) => {
    const { clientX, target: el } = event;
    offsetX.current = { offset: clientX - position, left: position };

    el.addEventListener('mousemove', moveSwitch, true);
    el.addEventListener('mouseout', removeSwitchListener, true);
    el.addEventListener('mouseup', removeSwitchListener, true);
  };

  const getHeroStyles = (index) => {
    const opacity = index === 0 ? 0.01 * (100 - position) : 0.01 * position;
    const translate = index === 0 ? position * 2 : (100 - position) * 2;
    const visibility = opacity === 1 ? 'inline' : 'none';

    return { opacity, transform: `translateX(${translate}px)`, visibility };
  };

  const getImageOpacity = (index) => {
    const range = 70;
    const buffer = 30;
    const percent = 0.01 * (index === 0 ? 100 - position : position);
    const opacity = 0.01 * (range * percent + buffer);

    return opacity;
  };

  return {
    getHeroStyles,
    getImageOpacity,
    handleImageClick,
    handleMoveSlider,
    position,
  };
};

useImageSlider.propTypes = {
  defaultPosition: number,
};

export default useImageSlider;
