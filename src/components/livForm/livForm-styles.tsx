import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    width: var(--colunas);
    margin: 1%;
  }

  // Configuração responsiva
  @media (max-width: 768px) {
    & > div {
      width: 100%; // 1 coluna em telas pequenas
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    & > div {
      width: 48%; // 2 colunas em telas médias
    }
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;
