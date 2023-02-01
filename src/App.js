import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Navigation } from './components/navigation';
import { Container } from './components/container';

import { Display } from './views/display';
import { Syntax } from './views/syntax';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Container>
          <Routes>
            <Route path='/display' element={<Display />} />
            <Route path='/syntax' element={<Syntax />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
