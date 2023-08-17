import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header-index';
import Home from './pages/home/home-index';

function RoutesLiv() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default RoutesLiv;
