import React, { useState, useEffect } from 'react';
import './Header.css';
import wallpaper from './wallpaper.png';

const headings = [
  [{ text: "MI VAGYUNK A TBZ. PRODUCTIONS!", highlight: true }],
  [
    { text: "SZERETNÉD", highlight: false },
    { text: "EGY KÉZBEN TARTANI", highlight: true },
    { text: "AZ ONLINE JELENLÉTED?", highlight: false }
  ],
  [
    { text: "EGYEDI ÉS PROFI MÉDIATARTALMAK A", highlight: false },
    { text: "MÁRKÁDNAK ÉS VÁLLALKOZÁSODNAK", highlight: true }
  ],
  [{ text: "TE MÁRKÁD, TE TÖRTÉNETED", highlight: true }],
  [{ text: "TERVEZÉSTŐL A MEGVALÓSÍTÁSIG", highlight: true }]
];

const Header = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="framer-16709mg"
      data-framer-name="Hero Section"
      style={{
        width: '100%',
        height: '800px',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
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
      <div
        className="framer-y7w8l1"
        data-framer-name="title"
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div className="framer-1b880ke">
          <div className="framer-1v8xiey" id="navbar-scroll-trigger">
            <div
              className="framer-ykv72m"
              data-framer-name="Title"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: 'auto',
                overflow: 'visible'
              }}
              data-framer-component-type="RichTextContainer"
            >
              <h1
                className="framer-text framer-styles-preset-13gpyit"
                style={{
                  color: '#fff',
                  margin: 0,
                  lineHeight: '1.5',
                  whiteSpace: 'pre-wrap',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                {headings[currentHeadingIndex].map((segment, idx) => (
                  <span
                    key={idx}
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
          </div>
        </div>
        {/* Egyéb tartalom itt */}
      </div>

      {/* FIX gomb: Külön van elhelyezve, így nem érinti a dinamikus szöveg */}
      <div className="fixed-button">
        <div className="ssr-variant hidden-1q3dwis hidden-1303b6h">
          <div className="framer-7we1a5-container">
            <a
              className="framer-BTbjQ framer-dKer1 framer-bhZhX framer-152rnsu framer-v-1mb0zqp framer-1qzgy94"
              data-framer-name="White"
              data-highlight="true"
              style={{
                backgroundColor: '#fff',
                borderRadius: '100px',
                width: '100%', /* A gomb szélessége most 100% lesz a konténer szélességéhez igazítva */
                display: 'inline-block',
                padding: '10px'
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
        <div
          className="framer-tm7nua"
          data-framer-appear-id="tm7nua"
          data-framer-name="Description"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '15px'
          }}
          data-framer-component-type="RichTextContainer"
        >
          <p
            className="framer-text framer-styles-preset-1ff0x4j"
            style={{ textAlign: 'center', color: '#fff', margin: 0 }}
          >
            {/* <a style={{ marginLeft:'20%'}}
              className="framer-text framer-styles-preset-gd5tqz"
              href="mailto:info@tbzproductions.hu"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@tbzproductions.hu
            </a> */}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;