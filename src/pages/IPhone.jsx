import React, { useState } from 'react';
import styled from 'styled-components';

import { BuyNow, HeroMain, ImageSlider, Navbar, PageSlider } from '../components';
import { IPHONE_IMAGES } from '../constants/common';
import { PAGE_SIDEBAR_WIDTH } from '../constants/styles';

const Hero = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Bottom = styled.div`
  display: flex;
`;

const HeroImage = styled.img`
  width: 56%;
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

const HeroRight = styled.div`
  position: relative;
  flex: 1;
  div:first-child {
    position: absolute;
    width: 100%;
    top: 115px;
    display: flex;
    justify-content: space-between;
  }
`;

const Wrapper = styled.section`
  height: 100%;
  padding-top: 7px;
  margin-left: ${PAGE_SIDEBAR_WIDTH};
`;

const IPhone = () => {
  const [heroImage, setHeroImage] = useState(IPHONE_IMAGES[0].hero);

  const updateHeroImage = (index) => setHeroImage(IPHONE_IMAGES[index].hero);

  return (
    <>
      <Navbar />
      <Wrapper>
        <Hero>
          <HeroMain
            title="iPhone"
            heading={['The ultimate', 'iPhone']}
            message={[
              'The future is here. Join the iPhone',
              'Upgrade Program to get the latest iPhone - NOW!',
            ]}
          />
          <HeroRight>
            <div>
              <HeroImage src={heroImage} alt="hero image" />
            </div>
          </HeroRight>
        </Hero>
        <PageSliderContainer>
          <PageSlider />
        </PageSliderContainer>
        <Bottom>
          <BuyNow price="$699" />
          <ImageSlider handleUpdate={updateHeroImage} imageArray={IPHONE_IMAGES} />
        </Bottom>
      </Wrapper>
    </>
  );
};

export default IPhone;
