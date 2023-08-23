import { useState } from 'react';
import Quadro from '../../../components/quadro/quadro-index';
import { CartoesContainer } from '../cartoes/cartoes-styles';
import LivFormTelefones from './livFormTelefones/livFormTelefones-index';
import {
  Telefone,
  valoresIniciaisPadraoTelefone,
} from './livFormTelefones/model';
import ListaTelefones from './livListaTelefones/livListaTelefones-index';

const Telefones: React.FC = () => {
  const [telefones, setTelefones] = useState<Telefone[]>([]);

  const handleAdicionarTelefone = (telefone: Telefone) => {
    setTelefones([...telefones, telefone]);
  };
  return (
    <CartoesContainer>
      <Quadro titulo="Cadastro de Cliente - Telefones"></Quadro>
      <Quadro titulo={'Dados do Telefone'}>
        <LivFormTelefones
          colunas={3}
          valoresIniciaisPadraoTelefone={valoresIniciaisPadraoTelefone}
          onAdicionarTelefone={handleAdicionarTelefone}
        />
      </Quadro>
      <Quadro titulo={'Lista Telefones'}>
        <ListaTelefones telefones={telefones} />{' '}
      </Quadro>
    </CartoesContainer>
  );
};

export default Telefones;
