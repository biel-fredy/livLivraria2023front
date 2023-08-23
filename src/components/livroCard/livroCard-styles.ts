
import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 247px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff; // Cor de fundo branca
  border: 1px solid #e0e0e0; // Bordas suaves
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1), 
              -3px -3px 5px rgba(255, 255, 255, 0.7); // Sombra para efeito em relevo
  border-radius: 5px; // Cantos arredondados
  padding: 20px; // Espaçamento interno para evitar a sobreposição de conteúdo
  overflow: hidden; // Evita que o conteúdo exceda o quadro
`;

export const ImagemLivro = styled.img`
  width: 122px; // Mantenha o tamanho original por enquanto
  height: 159px;
  margin-bottom: 15px;
`;

export const TituloLivro = styled.div`
  color: #0B521B;
  max-height: 54px; // Ajuste para permitir duas linhas
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; // Permite quebra de linha
  display: -webkit-box; // Necessário para usar -webkit-line-clamp
  -webkit-line-clamp: 2; // Limita a 2 linhas
  -webkit-box-orient: vertical; // Necessário para usar -webkit-line-clamp
  margin-bottom: 15px;
`;

export const PrecoContainer = styled.div`
  display: flex;
  align-items: flex-start; // Alinha o "R$" com a parte superior do preço
`;

export const RS = styled.span`
  color: #737171;
  font-size: 17px;
  align-self: baseline; // Alinha com a parte inferior, para ajustar com o valor
`;

export const Valor = styled.span`
  color: #0B521B;
  font-size: 34px;
  font-weight: bold;
  line-height: 1; // Ajuste para alinhar melhor com "R$"
`;

