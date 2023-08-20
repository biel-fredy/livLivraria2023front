import styled from 'styled-components';
import { Button } from '@mui/material';

export const BotaoEstilizado = styled(Button)`
  && {
    background-color: #0B521B; // Cor de preenchimento
    color: white;
    border-radius: 10px; // Borda arredondada
    &:hover {
      background-color: #084515; // Cor quando o mouse estiver sobre o botão
    }
  }
`;
