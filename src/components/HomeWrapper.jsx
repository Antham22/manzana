import React from 'react';
import styled from 'styled-components';

import { BACKGROUND_GREY, PAGE_SIDEBAR_WIDTH } from '../constants/styles';

const Header = styled.header`
  position: relative;
  background: ${({ image }) => `url(${image}) no-repeat 50% 50%`};
  height: calc(100% - 100px);
  text-align: center;
`;

const Message = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Footer = styled.div`
  position: absolute;
  top: 75%;
  width: calc(100% - (${PAGE_SIDEBAR_WIDTH} * 2));
  text-align: center;
`;

const Wrapper = styled.section`
  height: inherit;
  margin: 0 ${PAGE_SIDEBAR_WIDTH};
`;

const HomeWrapper = ({ background = BACKGROUND_GREY, children, handleOnClick }) => {
  return (
    <Wrapper
      onClick={handleOnClick}
      style={{ background: background, ...(handleOnClick && { cursor: 'pointer' }) }}
    >
      {children}
    </Wrapper>
  );
};

HomeWrapper.Header = Header;
HomeWrapper.Message = Message;
HomeWrapper.Footer = Footer;

export default HomeWrapper;
