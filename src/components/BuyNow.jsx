import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import { GREY, RED } from '../constants/styles';

const BuyLink = styled.a`
  color: ${RED};
  font-size: 20px;
  font-weight: 500;
`;

const Price = styled.h2`
  color: ${GREY};
  font-size: 50px;
  margin: 0;
`;

const Wrapper = styled.div`
  padding: 84px 76px 0px;
  flex: 1;
`;

const BuyNow = ({ price }) => {
  return (
    <Wrapper>
      <Price>From {price}</Price>
      <BuyLink>Buy Now ></BuyLink>
    </Wrapper>
  );
};

BuyNow.propTypes = {
  price: string.isRequired,
};

export default BuyNow;
