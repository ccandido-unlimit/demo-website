import React, { useState } from 'react';
import './App.css';
import Onramp from './components/Onramp';
import Offramp from './components/Offramp';

export default function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleToggleChange = () => {
    setIsLightMode(prevMode => !prevMode);
  };

  return (
    <div className={isLightMode ? 'app light-mode' : 'app dark-mode'}>
      <div className="sidebar">
      <h3></h3>
      </div>
      <div className="content">
        <div className="toggle-container">
          <label className="toggle">
            <span role="img" aria-label="Moon">🌙</span>
            <input type="checkbox" checked={isLightMode} onChange={handleToggleChange} />
            <span className="slider"></span>
            <span role="img" aria-label="Sun">☀️</span>
          </label>
        </div>
        <div>
        <Onramp />
        <Offramp />
        </div>
       
      </div>
    </div>
  );
}
