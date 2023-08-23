// home-index.tsx
import React, { useState } from 'react';
import { HomeContainer } from './home-styles';
import Quadro from '../../components/quadro/quadro-index';
import LivInputText from '../../components/livInputText/livInputText-index';
import LivGrid from '../../components/livGrid/livGrid-index';
import RelogioCarregando from '../../components/relogioCarregando/relogioCarregando-index';
import BotaoEnviar from '../../components/botaoEnviar/botaoEnviar-index';
import LivroCard from '../../components/livroCard/livroCard-index';
import imagemLivro from '../../assets/guiaCapa.jpg';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({ nome: '', preco: '', email: '' });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const data = [
    { id: 1, nome: 'Alice', idade: 25 },
    { id: 2, nome: 'Bob', idade: 30 },
    { id: 3, nome: 'Carol', idade: 28 },
    { id: 4, nome: 'Barney', idade: 28 },
    { id: 3, nome: 'Biruleibe', idade: 28 },
  ];

  const dadosFormulario = {
    nome: 'nome',
    email: 'email',
  };

  const onSuccess = () => {
    alert('Formulário enviado com sucesso!');
  };

  const onFailure = () => {
    alert('Falha ao enviar o formulário. Tente novamente.');
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

      <Quadro titulo="Relogio de loading">
        <RelogioCarregando carregando={true} />
      </Quadro>

      <Quadro titulo="Botao Enviar">
        <BotaoEnviar
          texto="Enviar"
          url="https://api.example.com/enviar"
          dadosFormulario={dadosFormulario}
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      </Quadro>
    </HomeContainer>
  );
};

export default Home;
