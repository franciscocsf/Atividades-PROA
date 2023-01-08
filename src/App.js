import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Historico from './Historico';
import Home from "./Home";
import Horario from './Horario';
import Informacao from './Informacao';
import Trabalho from './Trabalho';

function App() {
  return (

    <div>
      <Router>
        <header>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Historico">História</Link></li>
            <li><Link to="/Informacao">Informação</Link></li>
            <li><Link to="/Horario">Horário de atendimento</Link></li>
            <li><Link to="/Trabalho">Trabalhe conosco</Link></li>
          </ul>
        </header>

        <body>
          <Routes>
            <Route exact path="/Home" element={<Home />} /><Route />
            <Route exact path="/Historia" element={<Historico />} /><Route />
            <Route exact path="/Informacao" element={<Informacao />} /><Route />
            <Route exact path="/Horario" element={<Horario />} /><Route />
            <Route exact path="/Trabalho" element={<Trabalho />} /><Route />
          </Routes>
        </body>

        <footer>
          <p>Barreirinhas - MA, Lençóis Maranhenses, Maranhão, Brasil</p>
          <p><b>Telefone:</b> (98) 3349-1267</p>
        </footer>
      </Router>
    </div>

  );
}

export default App;