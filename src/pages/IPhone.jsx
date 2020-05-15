import React, { useState } from 'react';
import styled from 'styled-components';

import { BuyNow, Hero, ImageSlider, Section } from '../components';
import { IPHONE_IMAGES } from '../constants/common';

const Bottom = styled.div`
  display: flex;
  padding: 50px 0;
`;

const Image = styled.img`
  height: 100%;
`;

const ImageContainer = styled.div`
  position: absolute;
  text-align: center;
  height: 100%;
  width: 100%;
`;

const IPhone = () => {
  const [heroImage, setHeroImage] = useState(IPHONE_IMAGES[0].hero);

  const updateHeroImage = (index) => setHeroImage(IPHONE_IMAGES[index].hero);

  return (
    <Section>
      <Hero
        title="iPhone"
        heading={['The ultimate', 'iPhone']}
        message={[
          'The future is here. Join the iPhone',
          'Upgrade Program to get the latest iPhone - NOW!',
        ]}
      >
        <ImageContainer>
          <Image src={heroImage} alt="hero image" />
        </ImageContainer>
      </Hero>
      <Bottom>
        <BuyNow price="$699" />
        <ImageSlider handleUpdate={updateHeroImage} imageArray={IPHONE_IMAGES} />
      </Bottom>
    </Section>
  );
};

export default IPhone;
