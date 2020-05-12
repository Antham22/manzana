import React, { useState } from 'react';
import styled from 'styled-components';

import { AppleLogo, BuyNow, Hero, ImageSlider, Section } from '../components';
import { IPHONE_IMAGES } from '../constants/common';
import { APPLE_LOGO_IPHONE, GREY } from '../constants/styles';

const Bottom = styled.div`
  display: flex;
  padding: 50px 0;
`;

const HeroImage = styled.img`
  position: absolute;
  width: 56%;
  @media (min-width: 1200px) {
    position: absolute;
    width: 56%;
  }
`;

const HeroRight = styled.div`
  position: relative;
  padding-top: 84px;
  @media (min-width: 1200px) {
    flex: 1;
  }
`;

const IPhone = () => {
  const [heroImage, setHeroImage] = useState(IPHONE_IMAGES[0].hero);

  const updateHeroImage = (index) => setHeroImage(IPHONE_IMAGES[index].hero);

  return (
    <Section>
      <Hero>
        <Hero.Heading
          title="iPhone"
          heading={['The ultimate', 'iPhone']}
          message={[
            'The future is here. Join the iPhone',
            'Upgrade Program to get the latest iPhone - NOW!',
          ]}
        >
          <AppleLogo color={GREY} customStyle={APPLE_LOGO_IPHONE} />
        </Hero.Heading>
        <HeroRight>
          <HeroImage src={heroImage} alt="hero image" />
        </HeroRight>
      </Hero>
      <Bottom>
        <BuyNow price="$699" />
        <ImageSlider handleUpdate={updateHeroImage} imageArray={IPHONE_IMAGES} />
      </Bottom>
    </Section>
  );
};

export default IPhone;
