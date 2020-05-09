import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Card, FormInput, FormLabel, PrimaryButton } from '../components';

import { BACKGROUND_BLUE, BLACK, LIGHT_BLUE, WHITE } from '../constants/styles';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${BACKGROUND_BLUE};
  height: 100%;
`;

const SignUpContainer = styled.div`
  width: 510px;
`;

const SignUpForm = styled.div`
  padding: 0 50px;
  h1 {
    text-align: center;
  }
`;

const SignUpLink = styled.div`
  text-align: right;
  margin-top: 13px;
  a {
    color: ${LIGHT_BLUE};
  }
`;

const Form = styled.form`
  input {
    width: 100%;
    margin-bottom: 26px;
  }
`;

const FormSubmit = styled.div`
  text-align: center;
`;

const SignIn = () => {
  return (
    <Wrapper>
      <SignUpContainer>
        <Card>
          <SignUpForm>
            <h1>Sign-In</h1>
            <Form>
              <FormLabel input="email" text="Email" />
              <FormInput type="email" id="email" name="email" placeholder="steve.jobs@apple.com" />
              <FormLabel input="password" text="Password" />
              <FormInput type="password" id="password" name="password" placeholder="********" />
              <FormSubmit>
                <PrimaryButton text="Sign-In" />
              </FormSubmit>
            </Form>
          </SignUpForm>
        </Card>
        <SignUpLink>
          Not registered? <Link to="/sign-up">Sign-up</Link>
        </SignUpLink>
      </SignUpContainer>
    </Wrapper>
  );
};

export default SignIn;
