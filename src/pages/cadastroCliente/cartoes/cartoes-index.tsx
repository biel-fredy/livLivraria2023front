import { useState } from 'react';
import LivForm from '../../../components/livForm/livForm-index';
import {
  Livro,
  valoresIniciaisPadrao,
} from '../../../components/livForm/model/model';
import Quadro from '../../../components/quadro/quadro-index';
import { CartoesContainer } from './cartoes-styles';
import ListaLivros from '../../../components/livListaLivro/livListaLivro-index';

const Cartoes: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);

  const handleAdicionarLivro = (livro: Livro) => {
    setLivros([...livros, livro]); // Adiciona o novo livro à lista
  };
  return (
    <CartoesContainer>
      <Quadro titulo="Bem-vindo à Página Cadastro de Cartões">
        <p>
          Esta é a página inicial do site. Aqui, você pode encontrar informações
          gerais e links para outras partes do site.
        </p>
      </Quadro>
      <Quadro titulo={'Formulário'}>
        <LivForm
          colunas={3}
          valoresIniciais={valoresIniciaisPadrao}
          onAdicionarLivro={handleAdicionarLivro}
        />
      </Quadro>
      <Quadro titulo={'Lista Livros'}>
        <ListaLivros livros={livros} />{' '}
      </Quadro>
    </CartoesContainer>
  );
};

export default Cartoes;
