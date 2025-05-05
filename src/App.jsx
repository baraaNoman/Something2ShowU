import React from 'react';
import '../src/style/effects/effcets.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing/>} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;