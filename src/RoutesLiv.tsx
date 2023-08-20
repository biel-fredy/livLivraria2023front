import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header-index';
import Home from './pages/home/home-index';
import LivNavBarLateral from './components/livNavBarLateral/livNavBarLateral-index';
import { RoutesContainer, ContentContainer } from './RoutesLiv-styles';
import InformacoesGerais from './pages/cadastroCliente/informacoesGerais/informacoesGerais-index';

function RoutesLiv() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  const selectedPath = '/';

  return (
    <Router>
      <Header />
      <RoutesContainer>
        <LivNavBarLateral links={links} selected={selectedPath} />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cadastro-cliente/informacoes-gerais"
              element={<InformacoesGerais />}
            />
          </Routes>
        </ContentContainer>
      </RoutesContainer>
    </Router>
  );
}

export default RoutesLiv;
