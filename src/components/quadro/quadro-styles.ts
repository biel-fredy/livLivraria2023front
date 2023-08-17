// quadro-styles.ts
import { styled } from '@mui/system';
import { Paper } from '@mui/material';

export const StyledPaper = styled(Paper)`
  background-color: white;
  border-radius: 8px; // Pontas arredondadas
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 16px; // Espaçamento interno
  margin: 15px;
`;

export const Title = styled('h2')`
  color: #0B521B; // Cor do título
  margin: 0;
  padding: 0;
`;
