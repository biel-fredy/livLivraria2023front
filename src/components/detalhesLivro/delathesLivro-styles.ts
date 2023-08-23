import styled from "styled-components";

export const DetalhesContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Permite que os elementos se ajustem
`;

export const Capa = styled.img`
  max-width: 230px;
  max-height: 353px;
`;

export const Sinopse = styled.div`
  max-width: 586px;
  max-height: 353px;
  overflow: hidden; // Oculta o excesso de texto
`;

export const TituloPreco = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Titulo = styled.h1`
  color: #0B521B;
`;

export const Preco = styled.span`
  color: #0B521B;
  font-size: 34px;
  font-weight: bold;
`;

export const Informacoes = styled.div`
  // Estilos para a seção de informações
`;
