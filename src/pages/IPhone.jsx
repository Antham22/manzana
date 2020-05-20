import React from 'react';
import styled from 'styled-components';

import useIsHome from '../utils/hooks/useIsHome';
import useImageSlider from '../utils/hooks/useImageSlider';
import { BuyNow, Hero, ImageSlider, PageWrapper, Section } from '../components';
import { IPHONE_IMAGES } from '../constants/common';
import { fadeOut, slideInUp } from '../constants/styles';

const Bottom = styled.div`
  display: flex;
  padding: 2% 0;
`;

const Image = styled.img`
  position: absolute;
  height: 100%;
`;

const ImageContainer = styled.div`
  position: absolute;
  height: 115%;
  width: calc(100% - 50px);
`;

const OffestContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const Wrapper = styled(PageWrapper)`
  &.page-enter {
    animation: ${slideInUp} 0.6s forwards;
  }

  &.page-exit {
    animation: ${fadeOut} 1s ease-out;
  }

  &.page-exit-done {
    visbility: hidden;
  }
`;

const IPhone = () => {
  const {
    getHeroStyles,
    getImageOpacity,
    handleImageClick,
    handleMoveSlider,
    position,
  } = useImageSlider();
  const isHome = useIsHome();

  if (isHome) {
    return null;
  }

  return (
    <Wrapper>
      <Section>
        <Hero
          title="iPhone"
          heading={['The ultimate', 'iPhone']}
          message={
            'The future is here. Join the iPhone Upgrade Program to get the latest iPhone - NOW!'
          }
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
    </Wrapper>
  );
};

export default IPhone;
