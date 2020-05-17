import React from 'react';
import { array, func } from 'prop-types';
import styled from 'styled-components';

import useSliderPosition from '../utils/hooks/useSliderPosition';
import { RED } from '../constants/styles';

const Wrapper = styled.div`
  flex: 2;
`;

const Image = styled.img`
  width: 100px;
  margin: 0 20px;
  cursor: pointer;
`;

const SliderContainer = styled.div`
  position: relative;
  margin: 25px 40px 0;
  height: 10px;
  width: 200px;
  background-color: #f2f2f2;
`;

const Slider = styled.div`
  position: absolute;
  height: 10px;
  width: 100px;
  background-color: ${RED};
  cursor: pointer;
`;

const ImageSlider = ({ handleUpdate, images }) => {
  const { handleMoveSlider, position: positionLeft } = useSliderPosition();

  const getImageOpacity = (index, num) => {
    const range = 70;
    const buffer = 30;
    const percent = 0.01 * (index === 0 ? 100 - num : num);
    const opacity = 0.01 * (range * percent + buffer);

    return opacity;
  };

  return (
    <Wrapper>
      <div style={{ display: 'inline-block', textAlign: 'center' }}>
        {images.map((image, index) => {
          return (
            <Image
              key={image.id}
              onClick={handleUpdate(index)}
              src={image.path}
              alt={image.alt}
              style={{ opacity: getImageOpacity(index, positionLeft) }}
            />
          );
        })}
        <SliderContainer>
          <Slider onMouseDown={handleMoveSlider} style={{ left: `${positionLeft}px` }} />
        </SliderContainer>
      </div>
    </Wrapper>
  );
};

ImageSlider.propTypes = {
  handleUpdate: func.isRequired,
  images: array.isRequired,
};

export default ImageSlider;
