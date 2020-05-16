import React from 'react';
import { array, func } from 'prop-types';

import styled from 'styled-components';
import { LIGHT, linkTransitionTime } from '../constants/styles';

const Fill = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  border: 1px solid ${LIGHT};
`;

const Label = styled.div`
  color: ${LIGHT};
  margin-top: 10px;
`;

const Radio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid rgba(112, 112, 112, 0.16);
  border-color: ${({ active }) => (active ? '#FF2D55' : 'rgba(112, 112, 112, 0.16)')};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin: 0 36px;
  cursor: pointer;
  animation: borderColor ${linkTransitionTime};

  @keyframes borderColor {
    0% {
      border-color: ${({ active }) => (active ? '#FF2D55' : 'rgba(112, 112, 112, 0.16)')};
    }
  }
`;

const Wrapper = styled.div`
  flex: 2;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RadioImageSlider = ({ handleUpdate, images }) => {
  return (
    <Wrapper>
      {images.map((image, index) => (
        <div key={`${image.id}-${Math.random()}`}>
          <Radio active={image.active} key={image.id} onClick={handleUpdate(index)}>
            <Fill style={{ backgroundColor: image.color }} />
          </Radio>
          <Label>{image.label}</Label>
        </div>
      ))}
    </Wrapper>
  );
};

RadioImageSlider.propTypes = {
  handleUpdate: func.isRequired,
  images: array.isRequired,
};

export default RadioImageSlider;
