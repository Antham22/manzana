import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { HomeIntro, IntroNavbar } from '../components';

const Intro = () => {
  const [redirect, setRedirect] = useState(false);

  const handleToggleHome = () => setRedirect(!redirect);

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <IntroNavbar />
      <HomeIntro redirect={redirect} handleToggleHome={handleToggleHome} />
    </>
  );
};

export default Intro;
