import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { AuthContext } from '../context/AuthContext';
import { Card, FormInput, PrimaryButton } from '../components';
import { BACKGROUND_BLUE, LIGHT_BLUE } from '../constants/styles';
import {
  ERROR_INVALID_EMAIL,
  ERROR_INVALID_NAME,
  ERROR_INVALID_PASSWORD,
} from '../constants/errors';
import { getFormData, validEmailRegex, validateForm } from '../utils';

const FormSubmit = styled.div`
  text-align: center;
`;

const SignUpForm = styled.div`
  padding: 0 50px;

  h1 {
    text-align: center;
  }
`;

const SignInLink = styled.div`
  margin-top: 13px;
  width: 100%;
  max-width: 510px;
  a {
    color: ${LIGHT_BLUE};
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${BACKGROUND_BLUE};
  height: 100%;
`;

const SignUp = () => {
  const { handleSignin, isAuthenticated } = useContext(AuthContext);
  const [errors, setErrors] = useState({
    full_name: '',
    email: '',
    password: '',
  });

  const handleOnChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const inputErrors = errors;

    switch (name) {
      case 'full_name':
        inputErrors.full_name = value.length < 5 ? ERROR_INVALID_NAME : '';
        break;
      case 'email':
        inputErrors.email = validEmailRegex.test(value) ? '' : ERROR_INVALID_EMAIL;
        break;
      case 'password':
        inputErrors.password = value.length < 8 ? ERROR_INVALID_PASSWORD : '';
        break;
      default:
        break;
    }

    inputErrors.submission = '';
    setErrors({ ...errors });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = getFormData(event.target.elements);
    const valid = validateForm(errors);

    if (valid) {
      handleSignin(data.full_name);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/intro" />;
  }

  return (
    <Wrapper>
      <Card customStyle={{ width: '100%', maxWidth: '510px' }}>
        <SignUpForm>
          <h1>Sign-Up</h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              error={errors.full_name}
              label="Full Name"
              name="full_name"
              onChange={handleOnChange}
              placeholder="Steve Jobs"
              required
              type="text"
            />
            <FormInput
              error={errors.email}
              label="Email"
              name="email"
              onChange={handleOnChange}
              placeholder="steve.jobs@apple.com"
              required
              type="email"
            />
            <FormInput
              error={errors.password}
              label="Password"
              name="password"
              onChange={handleOnChange}
              placeholder="**********"
              required
              type="password"
            />
            <FormSubmit>
              <PrimaryButton text="Sign-Up" />
            </FormSubmit>
          </form>
        </SignUpForm>
      </Card>
      <SignInLink>
        Already registered? <Link to="/sign-in">Sign-in</Link>
      </SignInLink>
    </Wrapper>
  );
};

export default SignUp;
