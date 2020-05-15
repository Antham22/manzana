import React, { useState } from 'react';
import { array, func } from 'prop-types';

import styled from 'styled-components';
import { LIGHT } from '../constants/styles';

const Fill = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  border: 1px solid #000;
`;

const Label = styled.div`
  color: ${LIGHT};
`;

const Radio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid ${({ active }) => (active ? '#FF2D55' : 'rgba(112, 112, 112, 0.16)')};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin: 0 36px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  flex: 2;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RadioImageSlider = ({ handleUpdate, radiosArray }) => {
  const [radios, setRadios] = useState(radiosArray);

  const handleOnToggle = (index) => () => {
    const radiosState = radios.map((radio, i) => {
      return index === i ? { ...radio, active: true } : { ...radio, active: false };
    });
    setRadios(radiosState);
    handleUpdate(index);
  };

  return (
    <Wrapper>
      {radios.map((radio, index) => (
        <div key={`${radio.id}-${Math.random()}`}>
          <Radio active={radio.active} key={radio.id} onClick={handleOnToggle(index)}>
            <Fill style={{ backgroundColor: radio.color }} />
          </Radio>
          <Label>{radio.label}</Label>
        </div>
      ))}
    </Wrapper>
  );
};

RadioImageSlider.propTypes = {
  handleUpdate: func.isRequired,
  radiosArray: array.isRequired,
};

export default RadioImageSlider;
