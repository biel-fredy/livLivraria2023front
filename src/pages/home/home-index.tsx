// home-index.tsx
import React from 'react';
import { HomeContainer } from './home-styles';
import Quadro from '../../components/quadro/quadro-index';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Quadro titulo="Bem-vindo à Página Inicial">
        <p>
          Esta é a página inicial do site. Aqui, você pode encontrar informações
          gerais e links para outras partes do site.
        </p>
      </Quadro>
    </HomeContainer>
  );
};

export default Home;
