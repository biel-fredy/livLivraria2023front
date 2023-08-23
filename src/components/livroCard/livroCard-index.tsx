import { Button } from '@mui/material';
import { Livro } from '../livForm/model/model';
import {
  StyledCard,
  ImagemLivro,
  TituloLivro,
  PrecoContainer,
  RS,
  Valor,
} from './livroCard-styles';

interface LivroCardProps {
  imagemUrl: string; // URL da imagem do livro
  titulo: string; // Título do livro
  preco: string; // Preço do livro
  livro: Livro;
  onAdicionarAoCarrinho: (livro: Livro) => void; // Nova propriedade para receber a função
}

const LivroCard: React.FC<LivroCardProps> = ({
  imagemUrl,
  titulo,
  preco,
  livro,
  onAdicionarAoCarrinho,
}) => {
  return (
    <StyledCard>
      <ImagemLivro src={imagemUrl} alt={titulo} />
      <TituloLivro>
        {titulo.length > 54 ? titulo.substr(0, 54) + '...' : titulo}
      </TituloLivro>
      <PrecoContainer>
        <RS>R$</RS>
        <Valor>{preco}</Valor>
      </PrecoContainer>
      <Button onClick={() => onAdicionarAoCarrinho(livro)}>
        Adicionar ao Carrinho
      </Button>
    </StyledCard>
  );
};

export default LivroCard;
