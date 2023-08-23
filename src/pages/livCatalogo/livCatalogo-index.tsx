import React, { useState } from 'react';

import { Livro } from '../../components/livForm/model/model';
import { CatalogoContainer, LivroCardLink } from './livCatalogo-styles';
import LivroCard from '../../components/livroCard/livroCard-index';

interface LivCatalogoProps {
  livros: Livro[]; // Definindo o tipo de Livro conforme sua estrutura
}

const LivCatalogo: React.FC<LivCatalogoProps> = ({ livros }) => {
  const [carrinho, setCarrinho] = useState<Livro[]>([]); // Estado para o carrinho

  // Função para adicionar livro ao carrinho
  const adicionarAoCarrinho = (livro: Livro) => {
    setCarrinho([...carrinho, livro]);
  };

  return (
    <CatalogoContainer>
      {livros.map((livro) => (
        <LivroCardLink to={`/detalhes/${livro.id}`} key={livro.id}>
          <LivroCard
            imagemUrl={livro.imagemUrl}
            titulo={livro.titulo}
            preco={livro.preco}
            onAdicionarAoCarrinho={adicionarAoCarrinho}
            livro={livro}
          />
        </LivroCardLink>
      ))}
    </CatalogoContainer>
  );
};

export default LivCatalogo;
