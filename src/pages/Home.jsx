import React, { useState } from 'react';

import { HomeIntro, HomeMain, Navbar } from '../components';

const Home = () => {
  const [isIntro, setIsIntro] = useState(false);

  return isIntro ? (
    <HomeIntro />
  ) : (
    <>
      <Navbar />
      <HomeMain />
    </>
  );
};

export default Home;
