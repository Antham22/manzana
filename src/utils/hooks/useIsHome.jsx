import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useIsHome = () => {
  const { location } = useHistory();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (location.pathname === '/intro') {
      setIsHome(true);
    }
  }, [location]);

  return isHome;
};

export default useIsHome;
