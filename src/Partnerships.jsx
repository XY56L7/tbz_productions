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
      <div className="row flex-nowrap justify-content-center align-items-center custom-gap">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="partnership-item">
            <img src={madbroLogo} alt="MADBRO" className="logo grayscale desktop-grayscale" />
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <div className="partnership-item">
            <img src={meisterTransLogo} alt="Meister Trans" className="logo grayscale desktop-grayscale" />
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <div className="partnership-item">
            <img src={victoryFitnessLogo} alt="Victory Fitness" className="logo grayscale desktop-grayscale" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;