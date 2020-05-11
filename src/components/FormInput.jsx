import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Error = styled.div`
  height: 26px;
  font-size: 12px;
  color: red;
  margin-top: 5px;
`;

const Wrapper = styled.div`
  input {
    width: 100%;
    border: 1px solid #707070;
    height: 54px;
    margin: 0;
    text-indent: 32px;
    font-size: 14px;
  }
`;

const Label = styled.label`
  display: block;
`;

const FormInput = ({ error, label, name, onChange, ...rest }) => {
  return (
    <Wrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <input id={name} name={name} onChange={onChange} {...rest} />
      <Error>{error}</Error>
    </Wrapper>
  );
};

FormInput.propTypes = {
  error: string,
  label: string,
  name: string,
};

FormInput.defaultProps = {
  error: '',
  label: null,
  name: null,
};

export default FormInput;
