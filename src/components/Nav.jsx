import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../style/imgs/icons/logo.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../style/components/Nav.scss';

function Nav() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);

  return (
    <div className={`nav ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <div className="logo-container">
          <img 
            src={logo} 
            alt="logo" 
            onClick={() => navigate('/')}
            className="nav-logo"
          />
        </div>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <div className="nav-item" onClick={() => navigate('/')}>
            Main
          </div>
          
          <div className="nav-item" onClick={() => navigate('/contact')}>
            Contact
          </div>

          <div 
            className={`nav-item dropdown ${packagesOpen ? 'open' : ''}`}
            onMouseEnter={() => !menuOpen && setPackagesOpen(true)}
            onMouseLeave={() => !menuOpen && setPackagesOpen(false)}
            onClick={() => setPackagesOpen(!packagesOpen)}
          >
            <div className="dropdown-header">
              <span>Packages</span>
              <ArrowDropDownIcon className="dropdown-icon" />
            </div>
            <div className="dropdown-content-container">
              <div className="dropdown-content">
                <div onClick={() => navigate('/DigitalSpotlight')}>
                  <span>24/7 Digital Spotlight</span>
                </div>
                <div onClick={() => navigate('/AutoPilotSalesEngine')}>
                  <span>AutoPilot Sales Engine</span>
                </div>
                <div onClick={() => navigate('/MarketLeaderBlueprint')}>
                  <span>Market Leader Blueprint</span>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
        
        <div 
          className={`burger-menu ${menuOpen ? 'open' : ''}`} 
          onClick={() => {
            setMenuOpen(!menuOpen);
            if (!menuOpen) setPackagesOpen(false);
          }}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;