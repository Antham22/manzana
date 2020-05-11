import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Card, FormInput, PrimaryButton } from '../components';
import { BACKGROUND_BLUE, LIGHT_BLUE } from '../constants/styles';
import { getFormData, validEmailRegex, validateForm } from '../utils';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${BACKGROUND_BLUE};
  height: 100%;
`;

const SignInForm = styled.div`
  padding: 0 50px;
  h1 {
    text-align: center;
  }
  input {
    width: 100%;
  }
`;

const SignInLink = styled.div`
  text-align: right;
  margin-top: 13px;
  a {
    color: ${LIGHT_BLUE};
  }
`;

const FormSubmit = styled.div`
  text-align: center;
`;

const SignIn = () => {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const inputErrors = errors;

    switch (name) {
      case 'email':
        inputErrors.email = validEmailRegex.test(value) ? '' : 'Email is not valid.';
        break;
      case 'password':
        inputErrors.password = value.length < 8 ? 'Password must be 8 characters long.' : '';
        break;
      default:
        break;
    }

    setErrors({ ...errors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = getFormData(event.target.elements);
    const valid = validateForm(errors);
  };

  return (
    <Wrapper>
      <Card width="510px">
        <SignInForm>
          <h1>Sign-In</h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              error={errors.email}
              label="Email"
              name="email"
              onChange={handleOnChange}
              placeholder="steve.jobs@apple.com"
              type="email"
            />
            <FormInput
              error={errors.password}
              label="Password"
              name="password"
              onChange={handleOnChange}
              placeholder="**********"
              type="password"
            />
            <FormSubmit>
              <PrimaryButton text="Sign-In" />
            </FormSubmit>
          </form>
        </SignInForm>
      </Card>
      <SignInLink>
        Not registered? <Link to="/sign-up">Sign-up</Link>
      </SignInLink>
    </Wrapper>
  );
};

export default SignIn;
