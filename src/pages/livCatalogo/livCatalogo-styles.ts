import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Se estiver usando react-router

export const CatalogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Permite que os itens da grade se ajustem à largura do container
  justify-content: center;
`;

export const LivroCardLink = styled(Link)`
  margin: 10px; // Espaçamento entre os cartões
  text-decoration: none; // Remove o sublinhado do link
`;