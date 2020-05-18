import React from 'react';
import styled from 'styled-components';

import useImageSlider from '../utils/hooks/useImageSlider';
import { BuyNow, Hero, ImageSlider, Section } from '../components';
import { IPHONE_IMAGES } from '../constants/common';

const Bottom = styled.div`
  display: flex;
  padding: 50px 0;
`;

const Image = styled.img`
  position: absolute;
  height: 95%;
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
  const {
    getHeroStyles,
    getImageOpacity,
    handleImageClick,
    handleMoveSlider,
    position,
  } = useImageSlider();

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
          <OffestContainer>
            {IPHONE_IMAGES.map((image, index) => {
              const styles = getHeroStyles(index);
              return (
                <Image alt="hero image" key={image.id} src={image.hero} style={{ ...styles }} />
              );
            })}
          </OffestContainer>
        </ImageContainer>
      </Hero>
      <Bottom>
        <BuyNow price="$699" />
        <ImageSlider
          getImageOpacity={getImageOpacity}
          handleImageClick={handleImageClick}
          handleMoveSlider={handleMoveSlider}
          images={IPHONE_IMAGES}
          position={position}
        />
      </Bottom>
    </Section>
  );
};

export default IPhone;
