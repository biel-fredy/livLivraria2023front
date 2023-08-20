import styled from 'styled-components';

export const RoutesContainer = styled.div`
  display: flex;
  height: 100vh; // Ocupa toda a altura disponível
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  width: calc(100% - 200px);
  min-height: calc(100vh - 64px); // Subtrair a altura do header
  background-color: #E1E1E1;
  overflow-y: auto;
  margin-left: 200px; // Deixando espaço para o navbar
  margin-top: 64px; // Deixando espaço para o header
`;


