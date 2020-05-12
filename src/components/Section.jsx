import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';
import PageSlider from './PageSlider';
import { PAGE_SIDEBAR_WIDTH } from '../constants/styles';

const Wrapper = styled.section`
  height: 100%;
  padding-top: 7px;
  margin-left: ${PAGE_SIDEBAR_WIDTH};
`;

const PageSliderContainer = styled.div`
  position: absolute;
  top: 45%;
  right: calc(115px - 54px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  a {
    margin-bottom: 35px;
  }
`;

const Section = ({ children }) => {
  return (
    <>
      <Navbar />
      <Wrapper>
        {children}
        <PageSliderContainer>
          <PageSlider />
        </PageSliderContainer>
      </Wrapper>
    </>
  );
};

export default Section;
