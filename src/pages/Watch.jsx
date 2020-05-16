import React, { useState } from 'react';
import styled from 'styled-components';

import { BuyNow, Hero, RadioImageSlider, Section } from '../components';
import { WATCH_IMAGES } from '../constants/common';
import { linkTransitionTime } from '../constants/styles';

const Bottom = styled.div`
  display: flex;
  padding: 50px 0;
`;

const Image = styled.img`
  position: absolute;

  transition: opacity ${linkTransitionTime};
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Watch = () => {
  const [images, setImages] = useState(WATCH_IMAGES);

  const handleOnToggle = (index) => () => {
    const imagesState = images.map((image, i) => {
      return index === i ? { ...image, active: true } : { ...image, active: false };
    });
    setImages(imagesState);
  };

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
        <ImageContainer>
          {images.map((image) => (
            <Image
              alt="hero image"
              key={image.id}
              src={image.hero}
              style={{ opacity: image.active ? 1 : 0 }}
            />
          ))}
        </ImageContainer>
      </Hero>
      <Bottom>
        <BuyNow price="$699" />
        <RadioImageSlider handleUpdate={handleOnToggle} images={images} />
      </Bottom>
    </Section>
  );
};

export default Watch;
