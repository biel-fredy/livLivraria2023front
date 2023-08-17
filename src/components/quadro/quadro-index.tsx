// quadro-index.tsx
import React from 'react';
import { StyledPaper, Title } from './quadro-styles';

interface QuadroProps {
  titulo: string;
  children?: React.ReactNode;
}

const Quadro: React.FC<QuadroProps> = ({ titulo, children }) => {
  return (
    <StyledPaper>
      <Title>{titulo}</Title>
      {children}
    </StyledPaper>
  );
};

export default Quadro;
