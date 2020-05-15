import React, { useState } from 'react';
import styled from 'styled-components';

import { BuyNow, Hero, RadioImageSlider, Section } from '../components';
import { WATCH_IMAGES } from '../constants/common';

const Bottom = styled.div`
  display: flex;
  padding: 50px 0;
`;

const Image = styled.img`
  width: 75%;
`;

const Watch = () => {
  const [heroImage, setHeroImage] = useState(WATCH_IMAGES[0].hero);

  const updateHeroImage = (index) => setHeroImage(WATCH_IMAGES[index].hero);

  return (
    <Section>
      <Hero
        title="Apple Watch"
        heading={['Change starts', 'within']}
        message={[
          'Apple Watch Series 4. Fundametally redesigned and',
          're-engineered to help you be even more active,',
          'healthy, and connected.',
        ]}
      >
        <Image src={heroImage} alt="hero image" />
      </Hero>
      <Bottom>
        <BuyNow price="$699" />
        <RadioImageSlider handleUpdate={updateHeroImage} radiosArray={WATCH_IMAGES} />
      </Bottom>
    </Section>
  );
};

export default Watch;
