import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import { Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  NavLinksContainer,
  StyledAppBar,
  StyledButton,
  StyledMenu,
  linkStyle,
} from './header-styles';

function Header() {
  const [cadastroMenuAnchor, setCadastroMenuAnchor] =
    useState<null | HTMLElement>(null);

  const handleCadastroMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setCadastroMenuAnchor(event.currentTarget);
  };

  const handleCadastroMenuClose = () => {
    setCadastroMenuAnchor(null);
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const notifications = [
    'Notificação 1',
    'Notificação 2',
    'Notificação 3',
    'erick lindo',
    'qualquer string',
  ]; // Exemplo de notificações

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Liv Livraria
        </Typography>
        <NavLinksContainer>
          <div>
            <StyledButton onClick={handleCadastroMenuOpen}>
              Cadastro
            </StyledButton>
            <StyledMenu
              anchorEl={cadastroMenuAnchor}
              open={Boolean(cadastroMenuAnchor)}
              onClose={handleCadastroMenuClose}
            >
              <MenuItem onClick={handleCadastroMenuClose}>
                <Link to="/cadastro/informacoes-gerais" style={linkStyle}>
                  Cadastro de Informações Gerais
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCadastroMenuClose}>
                <Link to="/cadastro/enderecos" style={linkStyle}>
                  Cadastro de Endereços
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCadastroMenuClose}>
                <Link to="/cadastro/telefones" style={linkStyle}>
                  Cadastro de Telefones
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCadastroMenuClose}>
                <Link to="/cadastro/cartoes" style={linkStyle}>
                  Cadastro de Cartões
                </Link>
              </MenuItem>
            </StyledMenu>
          </div>

          <Link to="/" style={linkStyle}>
            <StyledButton>Home</StyledButton>
          </Link>
          <Link to="/cliente" style={linkStyle}>
            <StyledButton>Cliente</StyledButton>
          </Link>
          <Link to="/admin" style={linkStyle}>
            <StyledButton>Admin</StyledButton>
          </Link>
        </NavLinksContainer>
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {notifications.map((notification, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>
              {notification}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
