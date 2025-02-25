import React, { useState } from 'react';
import logo from './logo.png';
import wallpeper from './bg.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToFAQ = () => {
    const aboutSection = document.getElementById('FAQ');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const mainSection = document.getElementById('services');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const servicesSection = document.getElementById('contact');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPrices = () => {
    const pricesSection = document.getElementById('prices-section');
    if (pricesSection) {
      pricesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="framer-1yv3j76-container">
      {/* Desktop navbar */}
      <div className="ssr-variant hidden-1303b6h">
        <nav
          className="framer-f4Ugu framer-9oCrN framer-qva57 framer-v-qva57"
          data-framer-name="Desktop"
          style={{
            background: 'linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
            width: '100%'
          }}
        >
          <div className="framer-7auulw-container">
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    opacity: 1,
                    position: 'absolute',
                    inset: 0,
                    zIndex: i + 1,
                    maskImage: `linear-gradient(to top, rgba(0, 0, 0, 0) ${i * 12.5}%, rgba(0, 0, 0, 1) ${(i + 1) * 12.5}%, rgba(0, 0, 0, 1) ${(i + 2) * 12.5}%, rgba(0, 0, 0, 0) ${(i + 3) * 12.5}%)`,
                    WebkitMaskImage: `linear-gradient(to top, rgba(0, 0, 0, 0) ${i * 12.5}%, rgba(0, 0, 0, 1) ${(i + 1) * 12.5}%, rgba(0, 0, 0, 1) ${(i + 2) * 12.5}%, rgba(0, 0, 0, 0) ${(i + 3) * 12.5}%)`,
                    borderRadius: '0px',
                    pointerEvents: 'none',
                    backdropFilter: `blur(${0.1171875 * Math.pow(2, i)}px)`
                  }}
                />
              ))}
            </div>
          </div>
          <div
            className="framer-mx8mak"
            data-framer-name="Nav Wrapper"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            {/* Logo a bal oldalon */}
            <div
              className="logo-container"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
            >
              <a href="./" style={{ flexShrink: 0 }}>
                <img src={wallpeper} alt="Logo" style={{ width: '100px', height: 'auto' }} />
              </a>
            </div>
            {/* Linkek */}
            <div className="framer-1b61lg7" data-framer-name="Links">
              <div
                className="framer-uxaq5g"
                data-framer-name="Features"
                style={{
                  outline: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  flexShrink: 0,
                  transform: 'none'
                }}
                data-framer-component-type="RichTextContainer"
              >
                <p
                  style={{
                    fontFamily: 'Poppins, Poppins Placeholder, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '22px',
                    color: 'rgb(255, 255, 255)'
                  }}
                  className="framer-text"
                >
                  <a className="framer-text framer-styles-preset-1b1g0kp" data-styles-preset="dRzQBmjh2" href="./#rolunk">
                    Rólunk
                  </a>
                </p>
              </div>
              <div
                className="framer-uxaq5g"
                data-framer-name="Features"
                style={{
                  outline: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  flexShrink: 0,
                  transform: 'none'
                }}
                data-framer-component-type="RichTextContainer"
              >
                <p
                  style={{
                    fontFamily: 'Poppins, Poppins Placeholder, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '22px',
                    color: 'rgb(255, 255, 255)'
                  }}
                  className="framer-text"
                >
                  <a
                    className="framer-text framer-styles-preset-1b1g0kp"
                    data-styles-preset="dRzQBmjh2"
                    onClick={scrollToServices}
                  >
                    Szolgáltatások
                  </a>
                </p>
              </div>
              <div
                className="framer-uxaq5g"
                data-framer-name="Features"
                style={{
                  outline: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  flexShrink: 0,
                  transform: 'none'
                }}
                data-framer-component-type="RichTextContainer"
              >
                <p
                  style={{
                    fontFamily: 'Poppins, Poppins Placeholder, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '22px',
                    color: 'rgb(255, 255, 255)'
                  }}
                  className="framer-text"
                >
                  <a className="framer-text framer-styles-preset-1b1g0kp" data-styles-preset="dRzQBmjh2" href="./#referenciak">
                    Referenciák
                  </a>
                </p>
              </div>
              <div
                className="framer-uxaq5g"
                data-framer-name="Features"
                style={{
                  outline: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  flexShrink: 0,
                  transform: 'none'
                }}
                data-framer-component-type="RichTextContainer"
              >
                <p
                  style={{
                    fontFamily: 'Poppins, Poppins Placeholder, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '22px',
                    color: 'rgb(255, 255, 255)'
                  }}
                  className="framer-text"
                >
                  <a className="framer-text framer-styles-preset-1b1g0kp" data-styles-preset="dRzQBmjh2" href="./#velemenyek">
                    Vélemények
                  </a>
                </p>
              </div>
              <div
                className="framer-uxaq5g"
                data-framer-name="Features"
                style={{
                  outline: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  flexShrink: 0,
                  transform: 'none'
                }}
                data-framer-component-type="RichTextContainer"
              >
                <p
                  style={{
                    fontFamily: 'Poppins, Poppins Placeholder, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '22px',
                    color: 'rgb(255, 255, 255)'
                  }}
                  className="framer-text"
                >
                  <a
                    className="framer-text framer-styles-preset-1b1g0kp"
                    data-styles-preset="dRzQBmjh2"
                    onClick={scrollToFAQ}
                  >
                    GY.I.K
                  </a>
                </p>
              </div>
              <div
                className="framer-uxaq5g"
                data-framer-name="Features"
                style={{
                  outline: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  flexShrink: 0,
                  transform: 'none'
                }}
                data-framer-component-type="RichTextContainer"
              >
                <p
                  style={{
                    fontFamily: 'Poppins, Poppins Placeholder, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '22px',
                    color: 'rgb(255, 255, 255)'
                  }}
                  className="framer-text"
                >
                  <a
                    className="framer-text framer-styles-preset-1b1g0kp"
                    data-styles-preset="dRzQBmjh2"
                    onClick={scrollToContact}
                  >
                    Kapcsolat
                  </a>
                </p>
              </div>
            </div>
            <div className="framer-qlevbk" data-framer-name="Buttons">
              <div className="framer-fwbndh-container">
                <a
                  className="framer-BTbjQ framer-dKer1 framer-bhZhX framer-152rnsu framer-v-1mb0zqp framer-1qzgy94"
                  data-framer-name="White"
                  data-highlight="true"
                  style={{
                    borderBottomWidth: '0px',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderLeftWidth: '0px',
                    borderRightWidth: '0px',
                    borderStyle: 'solid',
                    borderTopWidth: '0px',
                    backdropFilter: 'none',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderRadius: '100px',
                    WebkitBackdropFilter: 'none'
                  }}
                  href="./#szolgaltatasok"
                  tabIndex={0}
                >
                  <div
                    className="framer-1wnb748"
                    data-framer-name="Main Text"
                    style={{
                      outline: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      flexShrink: 0,
                      transform: 'none'
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1ress3h"
                      data-styles-preset="OdrXVUxks"
                      style={{ color: 'rgb(33, 33, 33)' }}
                    >
                      Árajánlat
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile navbar */}
      <div className="ssr-variant hidden-17mnt2g">
        <nav
          className="framer-f4Ugu framer-9oCrN framer-qva57 framer-v-qva57"
          data-framer-name="Mobile"
          style={{
            background: 'linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
            width: '100%',
            position: 'relative'
          }}
        >
          {/* Fix pozícionált, fix magasságú navigációs sáv, ahol a logó mindig ugyanabban a helyen marad */}
          <div
            className="framer-mx8mak"
            data-framer-name="Nav Wrapper"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '60px'
            }}
          >
            {/* Logo a bal oldalon */}
            <div
              className="logo-container"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
            >
              <a href="./" style={{ flexShrink: 0 }}>
                <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto' }} />
              </a>
            </div>
            {/* Toggle gomb a jobb oldalon */}
            <div className="framer-1ve3frv" data-framer-name="Content" style={{ position: 'relative' }}>
              <div className="framer-1mo70g1" data-framer-name="Logo & Hamburger Icon">
                <button
                  onClick={toggleMenu}
                  style={{
                    position: 'absolute',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'white',
                    fontSize: '24px',
                    right: '20px',
                    zIndex: 1100
                  }}
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
          {/* Dropdown menü – abszolút pozícionált a navigációs sáv alatt, és homályos háttérrel */}
          {isMenuOpen && (
            <div
              className="framer-1b61lg7"
              data-framer-name="Links"
              style={{
                position: 'absolute',
                top: '20px',
                left: '0',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(5px)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px 0'
              }}
            >
              <div style={{ marginBottom: '10px' }}>
                <a
                  className="framer-text framer-styles-preset-1b1g0kp"
                  data-styles-preset="dRzQBmjh2"
                  href="./#rolunk"
                >
                  Rólunk
                </a>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <a
                  className="framer-text framer-styles-preset-1b1g0kp"
                  data-styles-preset="dRzQBmjh2"
                  onClick={scrollToServices}
                >
                  Szolgáltatások
                </a>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <a
                  className="framer-text framer-styles-preset-1b1g0kp"
                  data-styles-preset="dRzQBmjh2"
                  href="./#referenciak"
                >
                  Referenciák
                </a>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <a
                  className="framer-text framer-styles-preset-1b1g0kp"
                  data-styles-preset="dRzQBmjh2"
                  href="./#velemenyek"
                >
                  Vélemények
                </a>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <a
                  className="framer-text framer-styles-preset-1b1g0kp"
                  data-styles-preset="dRzQBmjh2"
                  onClick={scrollToFAQ}
                >
                  GY.I.K
                </a>
              </div>
              <div>
                <a
                  className="framer-text framer-styles-preset-1b1g0kp"
                  data-styles-preset="dRzQBmjh2"
                  onClick={scrollToContact}
                >
                  Kapcsolat
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
