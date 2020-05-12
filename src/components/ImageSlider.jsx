import React, { useState } from 'react';
import { array, func, object } from 'prop-types';
import styled from 'styled-components';

import { RED } from '../constants/styles';

const Wrapper = styled.div`
  flex: 2;
  padding-top: 50px;
  div:first-child {
    display: inline-block;
  }
`;

const Image = styled.img`
  width: 100px;
  margin: 0 20px;
  cursor: pointer;
`;

const ToggleContainer = styled.div`
  margin-top: 25px;
  text-align: center;
`;

const ToggleSwitch = styled.span`
  display: inline-block;
  height: 10px;
  width: 100px;
  background-color: ${({ active }) => (active ? RED : '#f2f2f2')};
  cursor: pointer;
`;

const ImageSlider = ({ customStyle, handleUpdate, imageArray }) => {
  const [images, setImages] = useState(imageArray);

  const handleOnToggle = (index) => () => {
    const newImageStates = images.map((image, i) => {
      return index === i ? { ...image, active: true } : { ...image, active: false };
    });
    setImages(newImageStates);
    handleUpdate(index);
  };

  return (
    <Wrapper style={customStyle}>
      <div>
        {images.map((image, index) => {
          return (
            <Image
              key={image.id}
              onClick={handleOnToggle(index)}
              src={image.active ? image.activePath : image.inActivePath}
              alt={image.alt}
            />
          );
        })}
        <ToggleContainer>
          <div>
            {images.map((image, index) => {
              return (
                <ToggleSwitch
                  key={image.id}
                  active={image.active}
                  onClick={handleOnToggle(index)}
                />
              );
            })}
          </div>
        </ToggleContainer>
      </div>
    </Wrapper>
  );
};

ImageSlider.propTypes = {
  customStyle: object,
  handleUpdate: func.isRequired,
  imageArray: array.isRequired,
};

ImageSlider.defaultProps = {
  customStyle: null,
};

export default ImageSlider;
