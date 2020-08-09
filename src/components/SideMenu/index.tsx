import React from 'react';

import { Container } from './styles';

const SideMenu: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SideMenu;
