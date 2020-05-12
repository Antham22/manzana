import React, { useState } from 'react';
import styled from 'styled-components';

import { AppleLogo, BuyNow, Hero, RadioImageSlider, Section } from '../components';
import { WATCH_IMAGES } from '../constants/common';
import { APPLE_LOGO_WATCH, GREY } from '../constants/styles';

const Bottom = styled.div`
  display: flex;
  padding: 50px 0;
`;

const HeroImage = styled.img`
  width: 40%;
  @media (min-width: 1200px) {
    width: 77%;
  }
`;

const HeroRight = styled.div`
  padding-top: 84px;

  @media (min-width: 1200px) {
    flex: 2;
  }

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

const Watch = () => {
  const [heroImage, setHeroImage] = useState(WATCH_IMAGES[0].hero);

  const updateHeroImage = (index) => setHeroImage(WATCH_IMAGES[index].hero);

  return (
    <Section>
      <Hero>
        <Hero.Heading
          title="Apple Watch"
          heading={['Change starts', 'within']}
          message={[
            'Apple Watch Series 4. Fundametally redesigned and',
            're-engineered to help you be even more active,',
            'healthy, and connected.',
          ]}
        >
          <AppleLogo color={GREY} customStyle={APPLE_LOGO_WATCH} />
        </Hero.Heading>
        <HeroRight>
          <HeroImage src={heroImage} alt="hero image" />
        </HeroRight>
      </Hero>
      <Bottom>
        <BuyNow price="$699" />
        <RadioImageSlider handleUpdate={updateHeroImage} radiosArray={WATCH_IMAGES} />
      </Bottom>
    </Section>
  );
};

export default Watch;
