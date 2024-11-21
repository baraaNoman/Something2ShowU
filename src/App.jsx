import React from 'react';
import '../src/style/effects/effcets.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Blogs from './pages/Blogs';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;