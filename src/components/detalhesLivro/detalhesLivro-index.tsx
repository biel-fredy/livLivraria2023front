import React from 'react';
import {
  DetalhesContainer,
  Capa,
  Sinopse,
  TituloPreco,
  Titulo,
  Preco,
  Informacoes,
} from './delathesLivro-styles';
import Quadro from '../quadro/quadro-index';
import ImagemLivro from '../../assets/guiaCapa.jpg';

const DetalhesLivro: React.FC = () => {
  const livro = {
    id: '1',
    imagemUrl: 'caminho/para/imagem.jpg', // Substitua pelo caminho correto
    titulo: 'O Nome do Livro',
    sinopse:
      'Esta é a sinopse do livro, onde você pode descrever o conteúdo e o enredo do livro em detalhes.',
    preco: 19.99,
    paginas: 350,
    idioma: 'Português',
    editora: 'Editora Exemplo',
    dataPublicacao: '2021-01-01',
    dimensoes: {
      comprimento: '20cm',
      altura: '25cm',
      profundidade: '2cm',
    },
  };

  return (
    <DetalhesContainer>
      <Quadro titulo={''}>
        <Capa src={ImagemLivro} alt={livro.titulo} />
      </Quadro>
      <Quadro titulo={''}>
        <Sinopse>{livro.sinopse}</Sinopse>
      </Quadro>

      <Quadro titulo={''}>
        <TituloPreco>
          <Titulo>{livro.titulo}</Titulo>
          <Preco>R$ {livro.preco.toFixed(2)}</Preco>
        </TituloPreco>
      </Quadro>

      <Quadro titulo={''}>
        <Informacoes>
          <div>Número de páginas: {livro.paginas}</div>
          <div>Idioma: {livro.idioma}</div>
          <div>Editora: {livro.editora}</div>
          <div>Data de publicação: {livro.dataPublicacao}</div>
          <div>
            Dimensões: {livro.dimensoes.comprimento} x {livro.dimensoes.altura}{' '}
            x {livro.dimensoes.profundidade}
          </div>
        </Informacoes>
      </Quadro>
    </DetalhesContainer>
  );
};

export default DetalhesLivro;
