import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header-index';
import Home from './pages/home/home-index';
import LivNavBarLateral from './components/livNavBarLateral/livNavBarLateral-index';
import { RoutesContainer, ContentContainer } from './RoutesLiv-styles';
import InformacoesGerais from './pages/cadastroCliente/informacoesGerais/informacoesGerais-index';
import Cartoes from './pages/cadastroCliente/cartoes/cartoes-index';
import Enderecos from './pages/cadastroCliente/enderecos/enderecos-index';
import Telefones from './pages/cadastroCliente/telefones/telefones-index';
import LivCatalogo from './pages/livCatalogo/livCatalogo-index';
import { Livro } from './components/livForm/model/model';
import imagemLivro from './assets/guiaCapa.jpg';
import DetalhesLivro from './components/detalhesLivro/detalhesLivro-index';
import Carrinho from './pages/carrinho/carrinho-index';

function RoutesLiv() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  const livros: Livro[] = Array.from({ length: 20 }, (v, i) => ({
    id: (i + 1).toString(),
    titulo: `Livro ${i + 1}`,
    autor: `Autor ${i + 1}`,
    ano: `20${i + 1}`, // Ano como string
    preco: (Math.random() * 40 + 10).toFixed(2), // Preço como string
    imagemUrl: imagemLivro,
    quantidade: 0,
  }));

  const selectedPath = '/';

  return (
    <Router>
      <Header />
      <RoutesContainer>
        <LivNavBarLateral links={links} selected={selectedPath} />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<LivCatalogo livros={livros} />} />
            <Route
              path="/cadastro-cliente/informacoes-gerais"
              element={<InformacoesGerais />}
            />
            <Route path="/cadastro-cliente/cartoes" element={<Cartoes />} />
            <Route path="/cadastro-cliente/enderecos" element={<Enderecos />} />
            <Route path="/cadastro-cliente/telefones" element={<Telefones />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detalhes/:id" element={<DetalhesLivro />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </ContentContainer>
      </RoutesContainer>
    </Router>
  );
}

export default RoutesLiv;
