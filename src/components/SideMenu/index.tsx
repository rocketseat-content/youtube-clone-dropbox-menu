import React, { useEffect } from 'react';

import { Container } from './styles';

const SideMenu: React.FC = ({ children }) => {
  useEffect(() => {
    function onScroll() {
      console.log(window.scrollY);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <Container>{children}</Container>;
};

export default SideMenu;
