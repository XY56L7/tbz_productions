import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Partnerships.css';
import madbroLogo from './madbro-logo.png';
import meisterTransLogo from './meister-trans-logo.png';
import victoryFitnessLogo from './victory-fitness-logo.png';

const Partnerships = () => {
  return (
    <div className="partnerships-section">
      <h2 className="partnerships-title text-center mb-5">EGYÜTTMŰKÖDÉSEINK</h2>
      <div className="custom-gap">
        <div className="partnership-item">
          <img src={madbroLogo} alt="MADBRO" className="logo grayscale desktop-grayscale" />
        </div>
        <div className="partnership-item">
          <img src={meisterTransLogo} alt="Meister Trans" className="logo grayscale desktop-grayscale" />
        </div>
        <div className="partnership-item">
          <img src={victoryFitnessLogo} alt="Victory Fitness" className="logo grayscale desktop-grayscale" />
        </div>
      </div>
    </div>
  );
};

export default Partnerships;