import React from 'react';
import '../style/components/PreloadingPage.scss';

function PreloadingPage({ progress }) {
  return (
    <div className="preloading-page">
      <div className="preloading-content">
        <div className="logo-container">
          <div className="logo-spinner">
            <div className="spinner"></div>
          </div>
          <h2>SOMETHING 2 SHOW YOU</h2>
        </div>
        
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{progress}%</span>
        </div>

        <div className="loading-text">
          <p>Preparing your digital experience...</p>
        </div>
      </div>
    </div>
  );
}

export default PreloadingPage;