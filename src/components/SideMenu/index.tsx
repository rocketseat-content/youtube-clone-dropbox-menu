import React, { useState, useEffect } from 'react';

import { Container } from './styles';

const scrollThreshold = 300;

const SideMenu: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      setIsActive(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollY]);

  const classes = [
    isActive ? 'open' : '',
    scrollY <= scrollThreshold ? 'scrollOpen' : '',
  ];
  const className = classes.join(' ').trim();

  return <Container className={className}>{children}</Container>;
};

export default SideMenu;
