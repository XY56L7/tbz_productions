import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './FeaturedSection.css';


// Ikonok a statisztikákhoz (React Icons csomagból)
import { FaPlay, FaUser, FaUsers } from 'react-icons/fa';

// ----- AnimatedStats: A három statisztikai elem -----
const AnimatedStats: React.FC = () => {
  // 3 külön ref és state, hogy csak akkor induljon a számlálás, amikor az elem a viewportba kerül
  const { ref: refMegtekintes, inView: inViewMegtekintes } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: refUgyfel, inView: inViewUgyfel } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: refKoveto, inView: inViewKoveto } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="stats-section">
    {/* 1. Össz megtekintés videóinkon */}
    <div className="stat-item" ref={refMegtekintes}>
      {/* Ikon, körben */}
      <div className="icon-circle" style={{ backgroundColor: '#FFD500' }}>
        <FaPlay className="icon" />
      </div>
      {/* Számláló */}
      <div className="stat-number">
        {inViewMegtekintes ? (
          <CountUp start={0} end={100000000} duration={3} separator="." />
        ) : (
          0
        )}
        <span>+</span>
      </div>
      <p className="stat-description">Össz megtekintés videóinkon</p>
    </div>

    {/* 2. Elégedett ügyfél */}
    <div className="stat-item" ref={refUgyfel}>
      <div className="icon-circle" style={{ backgroundColor: '#0ABF53' }}>
        <FaUser className="icon" />
      </div>
      <div className="stat-number">
        {inViewUgyfel ? (
          <CountUp start={0} end={50} duration={3} separator="." />
        ) : (
          0
        )}
        <span>+</span>
      </div>
      <p className="stat-description">Elégedett ügyfél</p>
    </div>

    {/* 3. Követő az ügyfeleinknél */}
    <div className="stat-item" ref={refKoveto}>
      <div className="icon-circle" style={{ backgroundColor: '#FF0040' }}>
        <FaUsers className="icon" />
      </div>
      <div className="stat-number">
        {inViewKoveto ? (
          <CountUp start={0} end={2000000} duration={3} separator="." />
        ) : (
          0
        )}
        <span>+</span>
      </div>
      <p className="stat-description">Követő az ügyfeleinknél</p>
    </div>
  </div>
  );
};

// ----- Szöveges tartalom -----
const TextContent: React.FC = () => (
  <div
    style={{
      textAlign: 'center',
      margin: '20px 0',
      color: '#fff',
      fontFamily: '"Poppins", sans-serif',
    }}
  >
    <h2 style={{ fontSize: '24px' }}>
      Partnereink között tudhatjuk számos iparág kiemelkedő szereplőit,{' '}
      <span style={{ fontWeight: 500 }}>
        akiknek valós tapasztalattal és kreativitással érjük el céljait
      </span>
      .
    </h2>
  </div>
);

// ----- Logók szekciója (példa) -----
const Logos: React.FC = () => (
  <div style={{ textAlign: 'center', margin: '40px 0' }}>
    <img
      src="https://framerusercontent.com/images/XboVW53FqGHa062HUFA8N7mE8.png?scale-down-to=512"
      alt="Logo"
      style={{ width: '120px', margin: '0 10px' }}
    />
    {/* További logók... */}
  </div>
);

// ----- Idézet -----
const Quote: React.FC = () => (
  <div
    style={{
      textAlign: 'center',
      marginTop: '40px',
      color: '#fff',
      fontFamily: '"Poppins", sans-serif',
      fontStyle: 'italic',
    }}
  >
    <h3>„A te céged lesz a következő sikerstorynk?!”</h3>
  </div>
);

// ----- Fő komponens: FeaturedSection -----
const FeaturedSection: React.FC = () => {
  return (
    <div
      className="framer-letr3n"
      data-framer-name="Featured Section"
      id="trigger-video-zoom"
      // Ha szeretnél háttérszínt, pl. fekete:
      style={{ backgroundColor: '#000', padding: '40px 0' }}
    >
      <div className="framer-t2orv6" data-framer-name="Content Wrapper">
        <div className="framer-1r1jugc" data-framer-name="Top">
          <div className="framer-1a74yl4" data-framer-name="Featured">
            <AnimatedStats />
          </div>
        </div>
        <div className="framer-v1mswm"></div>
        <div className="framer-n72sta" data-framer-name="Top">
          <div className="framer-n326w9" data-framer-name="TextContent">
            <TextContent />
          </div>
          <Logos />
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
