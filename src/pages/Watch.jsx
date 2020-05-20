import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import useIsHome from '../utils/hooks/useIsHome';
import { BuyNow, Hero, PageWrapper, RadioImageSlider, Section } from '../components';
import { WATCH_IMAGES } from '../constants/common';
import { linkTransitionTime, fadeIn, slideOutUp } from '../constants/styles';

const heroAnimation = css`
animation: slideInLeft 1s ease-in;

@keyframes slideInLeft {
  from {
    transform: translateX(-100px);
  }

  to {
    transform: translateX(0);
  }
`;

const Bottom = styled.div`
  display: flex;
  padding: 2% 0;
  animation: slideUpIn 1s ease-in;

  @keyframes slideUpIn {
    from {
      transform: translateY(100px);
    }

    to {
      transform: translateY(0);
    }
  }
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

const Wrapper = styled(PageWrapper)`
  &.page-enter {
    animation: ${fadeIn} 0.6s ease-in;
  }

  &.page-exit {
    animation: ${slideOutUp} 0.6s forwards;
  }
`;

const Watch = () => {
  const [images, setImages] = useState(WATCH_IMAGES);
  const isHome = useIsHome();

  const handleOnToggle = (index) => () => {
    const imagesState = images.map((image, i) => {
      return index === i ? { ...image, active: true } : { ...image, active: false };
    });
    setImages(imagesState);
  };

  if (isHome) {
    return null;
  }

  return (
    <Wrapper isHome={isHome}>
      <Section>
        <Hero
          animation={heroAnimation}
          title="Apple Watch"
          heading={['Change starts', 'within']}
          message={
            'Apple Watch Series 4. Fundametally redesigned and re-engineered to help you be even more active, healthy, and connected.'
          }
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
    </Wrapper>
  );
};

export default Watch;
