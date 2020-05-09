import React, { useState } from 'react';

import { HomeIntro, HomeMain, Navbar } from '../components';

const Home = () => {
  const [isIntro, setIsIntro] = useState(true);

  const handleToggleHome = () => setIsIntro(!isIntro);

  return (
    <>
      <Navbar isIntro={isIntro} handleToggleHome={handleToggleHome} />
      {isIntro ? <HomeIntro isIntro={isIntro} handleToggleHome={handleToggleHome} /> : <HomeMain />}
    </>
  );
};

export default Home;
