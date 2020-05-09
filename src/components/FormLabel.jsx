import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
`;

const FormLabel = ({ input, text }) => {
  return <Label htmlFor={input}>{text}</Label>;
};

FormLabel.propTypes = {
  input: string.isRequired,
  text: string.isRequired,
};

export default FormLabel;
