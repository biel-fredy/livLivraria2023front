// livInputText-styles.ts
import styled from 'styled-components';
import { TextField } from '@mui/material';

export const getTextFieldWidth = (size: 'pequeno' | 'medio' | 'grande') => {
  switch (size) {
    case 'pequeno':
      return '225px';
    case 'medio':
      return '300px';
    case 'grande':
      return '450px';
    default:
      return '300px'; // Tamanho médio como padrão
  }
};

export const StyledInput = styled(TextField)`
  && {
    margin: 10px;
  }
`;
