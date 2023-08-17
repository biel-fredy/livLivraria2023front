// home-index.tsx
import React, { useState } from 'react';
import { HomeContainer } from './home-styles';
import Quadro from '../../components/quadro/quadro-index';
import LivInputText from '../../components/livInputText/livInputText-index';
import LivGrid from '../../components/livGrid/livGrid-index';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({ nome: '', preco: '', email: '' });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const data = [
    { id: 1, nome: 'Alice', idade: 25 },
    { id: 2, nome: 'Bob', idade: 30 },
    { id: 3, nome: 'Carol', idade: 28 },
  ];
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
            size={'pequeno'}
          />
          <LivInputText
            name="preco"
            label="Preço"
            placeholder="Digite o preço"
            tooltip="Preço em dólares"
            value={formData.preco}
            onChange={handleChange}
            size={'medio'}
          />
          <LivInputText
            name="email"
            label="Email"
            placeholder="Digite o e-mail"
            tooltip="E-mail válido"
            value={formData.email}
            onChange={handleChange}
            size={'grande'}
          />
        </form>
      </Quadro>

      <LivGrid data={data} />
    </HomeContainer>
  );
};

export default Home;
