import { useState } from 'react';
import Quadro from '../../../components/quadro/quadro-index';
import { CartoesContainer } from '../cartoes/cartoes-styles';
import LivFormEnderecos from './livFormEnderecos/livFormEnderecos-index';
import {
  Endereco,
  valoresIniciaisPadraoEndereco,
} from './livFormEnderecos/model';
import ListaEnderecos from './livListaEndereco/livListaEndereco-index';

const Enderecos: React.FC = () => {
  const [enderecos, setEnderecos] = useState<Endereco[]>([]);

  const handleAdicionarEndereco = (endereco: Endereco) => {
    setEnderecos([...enderecos, endereco]);
  };
  return (
    <CartoesContainer>
      <Quadro titulo="Cadastro de Cliente - Endereços"></Quadro>
      <Quadro titulo={'Dados do endereço'}>
        <LivFormEnderecos
          colunas={3}
          valoresIniciaisPadraoEndereco={valoresIniciaisPadraoEndereco}
          onAdicionarEndereco={handleAdicionarEndereco}
        />
      </Quadro>
      <Quadro titulo={'Lista Endereços'}>
        <ListaEnderecos enderecos={enderecos} />{' '}
      </Quadro>
    </CartoesContainer>
  );
};

export default Enderecos;
