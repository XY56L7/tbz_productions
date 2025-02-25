import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Use Bootstrap for responsiveness
import './Partnerships.css';
import madbroLogo from './madbro-logo.png'; // Logo for MADBRO
import meisterTransLogo from './meister-trans-logo.png'; // Logo for Meister Trans
import victoryFitnessLogo from './victory-fitness-logo.png'; // Logo for Victory Fitness

const Partnerships = () => {
  return (
    <div className="partnerships-section">
      <h2 className="partnerships-title text-center mb-5">EGYÜTTMŰKÖDÉSEINK</h2>
      <div className="row justify-content-center align-items-center custom-gap">
        {/* Companies with logos, side by side left to right on desktop */}
        <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
          <div className="partnership-item">
            <img src={madbroLogo} alt="MADBRO" className="logo grayscale desktop-grayscale" />
          </div>
        </div>
        <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
          <div className="partnership-item">
            <img src={meisterTransLogo} alt="Meister Trans" className="logo grayscale desktop-grayscale" />
          </div>
        </div>
        <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
          <div className="partnership-item">
            <img src={victoryFitnessLogo} alt="Victory Fitness" className="logo grayscale desktop-grayscale" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;