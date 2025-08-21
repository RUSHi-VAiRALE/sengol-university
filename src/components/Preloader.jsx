import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader-area">
      <div className="spinner-container">
        <div className="logo-container">
          <img src="/images/logo.png" alt="logo" className="logo-pulse" />
        </div>
        <div className="loading-spinner"></div>
        <p className="loading-text"> Sengol International University </p>
      </div>
    </div>
  );
}

export default Preloader;
