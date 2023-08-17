import { styled } from '@mui/system';
import { Button as MUIButton, AppBar as MUIAppBar } from '@mui/material';

export const StyledAppBar = styled(MUIAppBar)`
  background-color: #0B521B;
`;

export const StyledButton = styled(MUIButton)`
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

export const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};
