import React, { useState } from 'react';
import styled from 'styled-components';

import { BuyNow, Hero, ImageSlider, Section } from '../components';
import { IPHONE_IMAGES } from '../constants/common';

const Bottom = styled.div`
  display: flex;
  padding: 50px 0;
`;

const Image = styled.img`
  position: absolute;
  height: 100%;
`;

const ImageContainer = styled.div`
  position: absolute;
  height: 115%;
  width: 100%;
`;

const OffestContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const IPhone = () => {
  const [images, setImages] = useState(IPHONE_IMAGES);

  const handleOnToggle = (index) => () => {
    const imagesState = images.map((image, i) => {
      return index === i ? { ...image, active: true } : { ...image, active: false };
    });
    setImages(imagesState);
  };

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
          {/* <OffestContainer>
            {images.map((image) => (
              <Image
                alt="hero image"
                key={image.id}
                src={image.hero}
                style={{ opacity: image.active ? 1 : 0 }}
              />
            ))}
          </OffestContainer> */}
        </ImageContainer>
      </Hero>
      <Bottom>
        <BuyNow price="$699" />
        <ImageSlider handleUpdate={handleOnToggle} images={images} />
      </Bottom>
    </Section>
  );
};

export default IPhone;
