import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #707070;
  height: 54px;
  margin: 0;
  text-indent: 32px;
  font-size: 14px;
`;

const FormInput = ({ ...rest }) => {
  return <Input {...rest} />;
};

export default FormInput;
