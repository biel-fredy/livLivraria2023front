// home-index.tsx
import React, { useState } from 'react';
import { HomeContainer } from './home-styles';
import Quadro from '../../components/quadro/quadro-index';
import LivInputText from '../../components/livInputText/livInputText-index';
import { maskCurrency } from '../../utils/masks';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({ nome: '', preco: '' });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  return (
    <HomeContainer>
      <Quadro titulo="Bem-vindo à Página Inicial">
        <p>
          Esta é a página inicial do site. Aqui, você pode encontrar informações
          gerais e links para outras partes do site.
        </p>

        <form>
          <LivInputText
            name="nome"
            label="Nome"
            placeholder="Digite seu nome"
            tooltip="Nome completo"
            value={formData.nome}
            onChange={handleChange}
          />
          <LivInputText
            name="preco"
            label="Preço"
            placeholder="Digite o preço"
            tooltip="Preço em dólares"
            mask={maskCurrency}
            value={formData.preco}
            onChange={handleChange}
          />
        </form>
      </Quadro>
    </HomeContainer>
  );
};

export default Home;
