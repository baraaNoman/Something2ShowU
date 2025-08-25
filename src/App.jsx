import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import MarketLeaderBlueprint from './pages/MarketLeaderBlueprint';
import DigitalSpotlight from './pages/DigitalSpotlight';
import AutoPilotSalesEngine from './pages/AutoPilotSalesEngine';
import PreloadingPage from './components/PreloadingPage';
import '../src/style/effects/effcets.scss';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.classList.add('preloading');

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('preloading');
      document.body.classList.add('loaded');
      clearInterval(progressTimer);
    }, 3000);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <>
      {isLoading && <PreloadingPage progress={progress} />}
      
      <div className={`app-content ${!isLoading ? 'loaded' : ''}`}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Landing/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/market-leader-blueprint" element={<MarketLeaderBlueprint />} />
            <Route path="/digital-spotlight" element={<DigitalSpotlight />} />
            <Route path="/auto-pilot-sales-engine" element={<AutoPilotSalesEngine />} />
            
            {/* Redirect old routes to new ones */}
            <Route path="/MarketLeaderBlueprint" element={<MarketLeaderBlueprint />} />
            <Route path="/DigitalSpotlight" element={<DigitalSpotlight />} />
            <Route path="/AutoPilotSalesEngine" element={<AutoPilotSalesEngine />} />
            
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Landing />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;