import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

const Preline = () => {
  const location = useLocation();

  useEffect(() => {
    import('preline/preline');
  }, []);

  useEffect(() => {
    // @ts-ignore
  }, [location.pathname]);

  return <></>;
};

export default Preline;
