import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Partnerships.css';
import madbroLogo from './madbro-logo.png';
import meisterTransLogo from './meister-trans-logo.png';
import victoryFitnessLogo from './victory.png';
import rapper from './rapper.png';
import te from './te.png';
import bence from './bence.png';

const Partnerships = () => {
  return (
    <div className="partnerships-section mb-5">
      <h2 className="partnerships-title text-center mb-5">EGYÜTTMŰKÖDÉSEINK</h2>
      <div className="container px-4">
        <div className="row row-cols-3 row-cols-md-6 g-4 justify-content-center align-items-center">
          <div className="col">
            <div className="partnership-item">
              <img src={te} alt="te" className="logo grayscale desktop-grayscale" />
            </div>
          </div>
          <div className="col">
            <div className="partnership-item">
              <img src={meisterTransLogo} alt="Meister Trans" className="logo grayscale desktop-grayscale" />
            </div>
          </div>
          <div className="col">
            <div className="partnership-item">
              <img src={madbroLogo} alt="MADBRO" className="logo grayscale desktop-grayscale" />
            </div>
          </div>
          <div className="col">
            <div className="partnership-item">
              <img src={rapper} alt="rapper" className="logo grayscale desktop-grayscale" />
            </div>
          </div>
          <div className="col">
            <div className="partnership-item">
              <img src={victoryFitnessLogo} alt="Victory Fitness" className="logo grayscale desktop-grayscale" />
            </div>
          </div>
          <div className="col">
            <div className="partnership-item">
              <img src={bence} alt="bence" className="logo grayscale desktop-grayscale" />
            </div>
          </div>
        </div>
      </div>
      <div id="services"></div>
    </div>

  );
};

export default Partnerships;