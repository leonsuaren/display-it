import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Navigation } from './components/navigation';
import { Container } from './components/container';

import { Display } from './views/display';
import { Syntax } from './views/syntax';
import { Values } from './views/values';
import { Examples } from './views/examples';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Container>
          <Routes>
            <Route path='/display' element={<Display />} />
            <Route path='/syntax' element={<Syntax />} />
            <Route path='/values' element={<Values />} />
            <Route path='/examples' element={<Examples />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
