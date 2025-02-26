import React, { useState, useEffect } from 'react';
import './Header.css';
import wallpaper from './wallpaper.png';

const headings = [
  // "MI VAGYUNK A TBZ. PRODUCTIONS!" - kiemelve: "TBZ. PRODUCTIONS"
  [
    { text: "MI VAGYUNK A", highlight: false },
    { text: "TBZ. PRODUCTIONS!", highlight: true }
  ],
  // "SZERETNÉD EGY KÉZBEN TARTANI AZ ONLINE JELENLÉTED?" - kiemelve: "EGY KÉZBEN TARTANI"
  [
    { text: "SZERETNÉD", highlight: false },
    { text: "EGY KÉZBEN TARTANI", highlight: true },
    { text: "AZ ONLINE JELENLÉTED?", highlight: false }
  ],
  // "EGYEDI ÉS PROFI MÉDIATARTALMAK A MÁRKÁDNAK ÉS VÁLLALKOZÁSODNAK" - kiemelve: "MÁRKÁDNAK ÉS VÁLLALKOZÁSODNAK"
  [
    { text: "EGYEDI ÉS PROFI MÉDIATARTALMAK A", highlight: false },
    { text: "MÁRKÁDNAK ÉS VÁLLALKOZÁSODNAK", highlight: true }
  ],
  // "TE MÁRKÁD, TE TÖRTÉNETED" - kiemelve: "TE" (mindkét előfordulás)
  [
    { text: "TE", highlight: true },
    { text: "MÁRKÁD,", highlight: false },
    { text: "TE", highlight: true },
    { text: "TÖRTÉNETED", highlight: false }
  ],
  // "TERVEZÉSTŐL A MEGVALÓSÍTÁSIG" - kiemelve: "TERVEZÉSTŐL" és "MEGVALÓSÍTÁSIG"
  [
    { text: "TERVEZÉSTŐL", highlight: true },
    { text: "A", highlight: false },
    { text: "MEGVALÓSÍTÁSIG", highlight: true }
  ]
];

const Header = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const isRow = [0, 3, 4].includes(currentHeadingIndex);

  return (
    <header
      className="framer-16709mg"
      data-framer-name="Hero Section"
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Háttérkép */}
      <div
        className="framer-113wd9s"
        data-framer-name="BG"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
          zIndex: 0
        }}
      ></div>

      {/* Szövegkonténer */}
      <div
        className="framer-y7w8l1"
        data-framer-name="title"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: '0 20px',
          flexGrow: 1
        }}
      >
        <h1
          className="framer-text framer-styles-preset-13gpyit"
          style={{
            color: '#fff',
            margin: 0,
            lineHeight: '1.5',
            fontSize: '1.2rem',
            whiteSpace: isRow ? 'nowrap' : 'normal',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            flexDirection: isRow ? 'row' : 'column',
            gap: isRow ? '5px' : '10px', // Csökkentett gap egysoros szövegeknél
            overflow: 'visible',
            maxWidth: '90%'
          }}
        >
          {headings[currentHeadingIndex].map((segment, idx) => (
            <span
              key={idx}
              className={segment.highlight ? 'highlight' : ''}
              style={
                segment.highlight
                  ? {
                      color: '#003B2E',
                      textShadow:
                        '1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff'
                    }
                  : {
                      textShadow:
                        '1px 1px 0 #003B2E, -1px 1px 0 #003B2E, 1px -1px 0 #003B2E, -1px -1px 0 #003B2E'
                    }
              }
            >
              {segment.text}
            </span>
          ))}
        </h1>
      </div>

      {/* Fix gomb */}
      <div
        className="fixed-button"
        style={{
          position: 'absolute',
          bottom: '20px',
          zIndex: 1000, // Magas z-index a láthatóságért
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div className="ssr-variant">
          <div className="framer-7we1a5-container">
            <a
              className="framer-BTbjQ framer-dKer1 framer-bhZhX framer-152rnsu framer-v-1mb0zqp framer-1qzgy94"
              data-framer-name="White"
              data-highlight="true"
              style={{
                backgroundColor: '#fff',
                borderRadius: '100px',
                width: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px 20px'
              }}
              onClick={() => {
                const mainSection = document.getElementById('services');
                if (mainSection) {
                  mainSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              tabIndex={0}
            >
              <div
                className="framer-1wnb748"
                data-framer-name="Main Text"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1ress3h"
                  style={{ color: '#212121', margin: 0, textAlign: 'center' }}
                >
                  Szolgáltatásaink
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;