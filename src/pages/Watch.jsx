import React, { useState } from 'react';
import styled from 'styled-components';

import { AppleLogo, BuyNow, HeroMain, Navbar, PageSlider, RadioImageSlider } from '../components';
import { WATCH_IMAGES } from '../constants/common';
import { APPLE_LOGO_WATCH, GREY, PAGE_SIDEBAR_WIDTH } from '../constants/styles';

const Hero = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Bottom = styled.div`
  display: flex;
  padding-top: 50px;
`;

const HeroImage = styled.img`
  width: 77%;
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
  padding-top: 84px;
  flex: 2;
`;

const Wrapper = styled.section`
  height: 100%;
  padding-top: 7px;
  margin-left: ${PAGE_SIDEBAR_WIDTH};
`;

const Watch = () => {
  const [heroImage, setHeroImage] = useState(WATCH_IMAGES[0].hero);

  const updateHeroImage = (index) => setHeroImage(WATCH_IMAGES[index].hero);

  return (
    <>
      <Navbar />
      <Wrapper>
        <Hero>
          <HeroMain
            title="Apple Watch"
            heading={['Change starts', 'within', '', '']}
            message={[
              'Apple Watch Series 4. Fundametally redesigned and',
              're-engineered to help you be even more active,',
              'healthy, and connected.',
            ]}
          >
            <AppleLogo color={GREY} customStyle={APPLE_LOGO_WATCH} />
          </HeroMain>
          <HeroRight>
            <HeroImage src={heroImage} alt="hero image" />
          </HeroRight>
        </Hero>
        <PageSliderContainer>
          <PageSlider />
        </PageSliderContainer>
        <Bottom>
          <BuyNow price="$699" />
          <RadioImageSlider handleUpdate={updateHeroImage} radiosArray={WATCH_IMAGES} />
        </Bottom>
      </Wrapper>
    </>
  );
};

export default Watch;
