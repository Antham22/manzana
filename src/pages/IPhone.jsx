import React from 'react';
import styled from 'styled-components';

import { Navbar } from '../components';

import { BACKGROUND_GREY, PAGE_SIDEBAR_WIDTH } from '../constants/styles';

const Wrapper = styled.section`
  background: ${BACKGROUND_GREY};
  height: 100%;
  padding-top: 7px;
  padding-right: calc(100px);
  margin-left: ${PAGE_SIDEBAR_WIDTH};
  text-align: center;
`;

const IPhone = () => {
  return (
    <>
      <Navbar />
      <Wrapper>IPHONE PAGE!!!!!!!!!!!</Wrapper>
    </>
  );
};

export default IPhone;
