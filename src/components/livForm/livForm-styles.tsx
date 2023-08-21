import styled from 'styled-components';

interface FormProps {
  colunas: number;
}

export const FormContainer = styled.form<FormProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  // Estilização para diferentes números de colunas
  & > div {
    width: ${({ colunas }) => 100 / colunas - 2}%;
    margin: 1%;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;
