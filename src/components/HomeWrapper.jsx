import React from 'react';
import styled from 'styled-components';

import { BACKGROUND_GREY, PAGE_SIDEBAR_WIDTH } from '../constants/styles';

const Header = styled.header`
  position: relative;
  background: ${({ image }) => `url(${image}) no-repeat 50% 50%`};
  background-size: 295px 362px;
  text-align: center;
  height: 75%;
  // ${({ isIntro }) => (isIntro ? '100%' : '75%')};
`;

const Message = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Footer = styled.div`
  position: absolute;
  top: 75%;
  width: 100%;
  left: 0;
  text-align: center;
`;

const Wrapper = styled.section`
  height: calc(100% - 100px);
  margin: 0 ${PAGE_SIDEBAR_WIDTH};
`;

const HomeWrapper = ({ background = BACKGROUND_GREY, children, customStyle, handleOnClick }) => {
  return (
    <Wrapper
      onClick={handleOnClick}
      style={{
        background: background,
        ...(handleOnClick && { cursor: 'pointer' }),
        ...customStyle,
      }}
    >
      {children}
    </Wrapper>
  );
};

HomeWrapper.Header = Header;
HomeWrapper.Message = Message;
HomeWrapper.Footer = Footer;

export default HomeWrapper;
