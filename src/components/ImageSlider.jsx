import React from 'react';
import { array, func } from 'prop-types';
import styled from 'styled-components';

import { RED } from '../constants/styles';

const Wrapper = styled.div`
  flex: 2;
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

const ImageSlider = ({ handleUpdate, images }) => {
  return (
    <Wrapper>
      <div>
        {images.map((image, index) => {
          return (
            <Image
              key={image.id}
              onClick={handleUpdate(index)}
              src={image.path}
              alt={image.alt}
              style={{ opacity: image.active ? 1 : 0.5 }}
            />
          );
        })}
        <ToggleContainer>
          {images.map((image, index) => {
            return (
              <ToggleSwitch key={image.id} active={image.active} onClick={handleUpdate(index)} />
            );
          })}
        </ToggleContainer>
      </div>
    </Wrapper>
  );
};

ImageSlider.propTypes = {
  handleUpdate: func.isRequired,
  images: array.isRequired,
};

export default ImageSlider;
