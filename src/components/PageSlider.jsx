import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { NAV_LINKS } from '../constants/common';
import { linkTransitionTime } from '../constants/styles';

const SliderLink = styled(NavLink)`
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
  transition: opacity ${linkTransitionTime};
`;

const PageSlider = () => {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <SliderLink
          activeStyle={{
            opacity: 1,
          }}
          key={link.id}
          to={link.path}
        >
          <img src={`/images/${link.id}-active-icon.png`} alt={`${link.id} icon`} />
        </SliderLink>
      ))}
    </>
  );
};

export default PageSlider;
