import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header-index';

function RoutesLiv() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </Router>
  );
}

export default RoutesLiv;
