import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NAV_LINKS } from '../constants/common';

const PageSlider = () => {
  const { pathname } = useLocation();

  const activeIcon = (link) => {
    return pathname === link.path
      ? `/images/${link.id}-active-icon.png`
      : `/images/${link.id}-icon.png`;
  };
  return (
    <>
      {NAV_LINKS.map((link) => (
        <Link key={link.id} to={link.path}>
          <img src={activeIcon(link)} alt={`${link.id} icon`} />
        </Link>
      ))}
    </>
  );
};

export default PageSlider;
