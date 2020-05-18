import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { AuthContext } from '../context/AuthContext';
import { Card, FormInput, PrimaryButton } from '../components';
import { BACKGROUND_BLUE, LIGHT_BLUE } from '../constants/styles';
import { ERROR_INVALID_EMAIL, ERROR_INVALID_PASSWORD, ERROR_UNEXPECTED } from '../constants/errors';
import { getFormData, validEmailRegex, validateForm } from '../utils';
import fakeAuth from '../fakeAuth';

const Error = styled.div`
  height: 26px;
  font-size: 12px;
  color: red;
  margin-top: 5px;
`;

const FormSubmit = styled.div`
  text-align: center;
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

const SignUpLink = styled.div`
  text-align: right;
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

const SignIn = () => {
  const { handleSignin, isAuthenticated } = useContext(AuthContext);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    submission: '',
  });

  const handleOnChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const inputErrors = errors;

    switch (name) {
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
      try {
        const user = await fakeAuth(data);
        if (user.valid) {
          handleSignin(user.name);
        } else {
          throw user.error;
        }
      } catch (e) {
        setErrors({ ...errors, submission: e });
      }
    } else {
      setErrors({ ...errors, submission: ERROR_UNEXPECTED });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/intro" />;
  }

  return (
    <Wrapper>
      <Card customStyle={{ width: '100%', maxWidth: '510px' }}>
        <SignInForm>
          <h1>Sign-In</h1>
          <form onSubmit={handleSubmit}>
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
              <PrimaryButton text="Sign-In" />
              <Error>{errors.submission}</Error>
            </FormSubmit>
          </form>
        </SignInForm>
      </Card>
      <SignUpLink>
        Not registered? <Link to="/sign-up">Sign-up</Link>
      </SignUpLink>
    </Wrapper>
  );
};

export default SignIn;
