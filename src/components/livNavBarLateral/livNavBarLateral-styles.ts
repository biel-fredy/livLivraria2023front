import styled from 'styled-components';

export const NavBarContainer = styled.div`
  width: 200px;
  min-height: calc(100vh - 64px); // Subtrair a altura do header
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  position: fixed; // Posicionando fixo à esquerda
  top: 64px; // Deixando espaço para o header
`;

export const NavItem = styled.a<{ selected?: boolean }>`
  text-decoration: none;
  color: #9E9E9E;
  padding: 15px 10px;
  cursor: pointer;
  display: block;
  margin: 5px 0;
  width: 90%;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #E1E1E1;

  &:hover {
    color: #0B521B;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.selected ? 'rgba(9, 106, 48, 0.3)' : 'transparent'};
    z-index: -1;
  }
`;