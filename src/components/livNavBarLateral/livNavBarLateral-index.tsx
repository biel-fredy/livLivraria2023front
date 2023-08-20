import React from 'react';
import { NavBarContainer, NavItem } from './livNavBarLateral-styles';

interface LivNavBarLateralProps {
  links: { name: string; path: string }[];
  selected: string;
}

const LivNavBarLateral: React.FC<LivNavBarLateralProps> = ({
  links,
  selected,
}) => {
  return (
    <NavBarContainer>
      {links.map((link) => (
        <NavItem href={link.path} selected={link.path === selected}>
          {link.name}
        </NavItem>
      ))}
    </NavBarContainer>
  );
};

export default LivNavBarLateral;
