import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Header.css';

const headings = [
  [{ text: "MI VAGYUNK A", highlight: false }, { text: "TBZ. PRODUCTIONS!", highlight: true }],
  [{ text: "SZERETNÉD", highlight: false }, { text: "EGY KÉZBEN TARTANI", highlight: true }, { text: "AZ ONLINE JELENLÉTED?", highlight: false }],
  [{ text: "EGYEDI ÉS PROFI MÉDIATARTALMAK A", highlight: false }, { text: "MÁRKÁDNAK ÉS VÁLLALKOZÁSODNAK", highlight: true }],
  [{ text: "TE", highlight: true }, { text: "MÁRKÁD,", highlight: false }, { text: "TE", highlight: true }, { text: "TÖRTÉNETED", highlight: false }],
  [{ text: "TERVEZÉSTŐL", highlight: true }, { text: "A", highlight: false }, { text: "MEGVALÓSÍTÁSIG", highlight: true }],
];

const Header = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 4000);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isRow = [0, 3, 4].includes(currentHeadingIndex);

  return (
    <header
      className="header-section"
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        paddingTop: '60px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: 'linear-gradient(135deg, rgba(0, 89, 69, 0.95), rgba(0, 44, 35, 0.95))',
          boxShadow: '0 15px 40px rgba(0, 179, 143, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(5px)',
          zIndex: 0,
        }}
      />
      <Container
        fluid
        className="h-100 d-flex flex-column justify-content-center align-items-center"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h1
          className={`text-center ${isRow ? 'd-flex flex-row flex-wrap' : 'd-flex flex-column'} justify-content-center align-items-center`}
          style={{
            color: '#fff',
            margin: 0,
            lineHeight: '1.5',
            fontSize: isDesktop ? '2.5rem' : '1.2rem',
            gap: isRow ? '4px' : '10px',
            maxWidth: '100%',
          }}
        >
          {headings[currentHeadingIndex].map((segment, idx) => (
            <span
              key={idx}
              className={segment.highlight ? 'highlight' : 'normal-text'}
              style={{ display: 'inline-block' }}
            >
              {segment.text}
            </span>
          ))}
        </h1>
      </Container>
      <div
        className="fixed-button"
        style={{
          position: 'absolute',
          bottom: '20px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 998,
        }}
      >
        <Button
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            const mainSection = document.getElementById('services');
            if (mainSection) mainSection.scrollIntoView({ behavior: 'smooth' });
          }}
          className="custom-button"
          style={{
            backgroundColor: '#fff',
            borderRadius: '100px',
            padding: '15px 20px',
            color: '#212121',
            fontWeight: 600,
            border: 'none',
          }}
        >
          Szolgáltatásaink
        </Button>
      </div>
    </header>
  );
};

export default Header;