import React from 'react';

import { HeaderContainer, Logo } from './styles';

const HeaderComponent: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <span>CHINA</span>
        <span className="food">FOOD</span>
      </Logo>
    </HeaderContainer>
  );
};

export default HeaderComponent;
