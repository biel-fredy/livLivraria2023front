import LivForm from '../../../components/livForm/livForm-index';
import Quadro from '../../../components/quadro/quadro-index';
import { CartoesContainer } from './cartoes-styles';

const Cartoes: React.FC = () => {
  return (
    <CartoesContainer>
      <Quadro titulo="Bem-vindo à Página Cadastro de Cartões">
        <p>
          Esta é a página inicial do site. Aqui, você pode encontrar informações
          gerais e links para outras partes do site.
        </p>
      </Quadro>
      <Quadro titulo={'Formulário'}>
        <LivForm colunas={3} />
      </Quadro>
    </CartoesContainer>
  );
};

export default Cartoes;
