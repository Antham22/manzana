import React from 'react';
import { array, func } from 'prop-types';
import styled from 'styled-components';

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

const ImageSlider = ({ getImageOpacity, handleImageClick, handleMoveSlider, images, position }) => {
  return (
    <Wrapper>
      <div style={{ display: 'inline-block', textAlign: 'center' }}>
        {images.map((image, index) => {
          return (
            <Image
              key={image.id}
              onClick={handleImageClick(index)}
              src={image.path}
              alt={image.alt}
              style={{ opacity: getImageOpacity(index) }}
            />
          );
        })}
        <SliderContainer>
          <Slider onMouseDown={handleMoveSlider} style={{ left: `${position}px` }} />
        </SliderContainer>
      </div>
    </Wrapper>
  );
};

ImageSlider.propTypes = {
  getImageOpacity: func.isRequired,
  handleImageClick: func.isRequired,
  handleMoveSlider: func.isRequired,
  images: array.isRequired,
};

export default ImageSlider;
