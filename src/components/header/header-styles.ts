import { styled } from '@mui/system';
import { Button as MUIButton, AppBar as MUIAppBar, Menu } from '@mui/material';

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

export const NavLinksContainer = styled('div')`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    background-color: #0B521B;
  }
`;