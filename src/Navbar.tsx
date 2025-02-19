import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="framer-1yv3j76-container">
      {/* Desktop navbar */}
      <div className="ssr-variant hidden-1303b6h">
        <nav className="framer-f4Ugu framer-9oCrN framer-qva57 framer-v-qva57" data-framer-name="Desktop" style={{ background: 'linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%', width: '100%' }}>
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
                    backdropFilter: `blur(${0.1171875 * Math.pow(2, i)}px)`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="framer-mx8mak" data-framer-name="Nav Wrapper">
            <div aria-label="esd logo" className="framer-1ve3frv" data-framer-name="Content">
              <div aria-label="esd logo" className="framer-1mo70g1" data-framer-name="Logo & Hamburger Icon">
                <a
                  data-framer-component-type="SVG"
                  data-framer-name="esd logo"
                  href="./"
                  data-framer-page-link-current="true"
                  style={{ imageRendering: 'pixelated', flexShrink: 0 }}
                  className="framer-1x28qk9 framer-b65qkz"
                  role="img"
                  aria-label="esd logo"
                  aria-labelledby="esd logo"
                >
                  <div className="svgContainer" style={{ width: '100%', height: '100%', aspectRatio: 'inherit' }}>
                    <svg style={{ width: '100%', height: '100%' }}>
                      <use href="#svg12553293481" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="framer-1b61lg7" data-framer-name="Links">
              {['Rólunk', 'Szolgáltatások', 'Referenciák', 'Vélemények', 'GY.I.K', 'Kapcsolat'].map((link, index) => (
                <div key={index} className="framer-uxaq5g" data-framer-name="Features" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }} data-framer-component-type="RichTextContainer">
                  <p style={{ fontFamily: 'Poppins, Poppins Placeholder, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: '22px', color: 'rgb(255, 255, 255)' }} className="framer-text">
                    <a className="framer-text framer-styles-preset-1b1g0kp" data-styles-preset="dRzQBmjh2" href={`./#${link.toLowerCase()}`}>
                      {link}
                    </a>
                  </p>
                </div>
              ))}
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
                    WebkitBackdropFilter: 'none',
                  }}
                  href="./#szolgaltatasok"
                  tabIndex={0}
                >
                  <div className="framer-1wnb748" data-framer-name="Main Text" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1ress3h" data-styles-preset="OdrXVUxks" style={{ color: 'rgb(33, 33, 33)' }}>
                      Árajánlat
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobil navbar */}
      {/* Mobil navbar */}
      <div className="ssr-variant hidden-17mnt2g">
        <nav
          className="framer-f4Ugu framer-9oCrN framer-qva57 framer-v-qva57"
          data-framer-name="Mobile"
          style={{
            background: 'linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
            width: '100%'
          }}
        >
          <div className="framer-mx8mak" data-framer-name="Nav Wrapper" style={{ position: 'relative' }}>
            <div aria-label="esd logo" className="framer-1ve3frv" data-framer-name="Content">
              <div className="framer-1mo70g1" data-framer-name="Logo & Hamburger Icon">
                <a
                  data-framer-component-type="SVG"
                  data-framer-name="esd logo"
                  href="./"
                  data-framer-page-link-current="true"
                  style={{ imageRendering: 'pixelated', flexShrink: 0 }}
                  className="framer-1x28qk9 framer-b65qkz"
                  role="img"
                  aria-label="esd logo"
                  aria-labelledby="esd logo"
                >
                  <div className="svgContainer" style={{ width: '100%', height: '100%', aspectRatio: 'inherit' }}>
                    <svg style={{ width: '100%', height: '100%' }}>
                      <use href="#svg12553293481" />
                    </svg>
                  </div>
                </a>
                {/* Hamburger ikon */}
                {/* Hamburger ikon */}
                <button
                  onClick={toggleMenu}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'white',
                    fontSize: '24px',
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    zIndex: 1100, // <-- Ez a sor hozzáadva
                  }}
                >
                  ☰
                </button>

              </div>
            </div>
            {/* Legördülő menü */}
            {isMenuOpen && (
              <div
                className="framer-1b61lg7"
                data-framer-name="Links"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '60px',
                  alignItems: 'center',
                  width: '100%',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  zIndex: 1000
                }}
              >
                {['Rólunk', 'Szolgáltatások', 'Referenciák', 'Vélemények', 'GY.I.K', 'Kapcsolat'].map(
                  (link, index) => (
                    <div
                      key={index}
                      className="framer-uxaq5g"
                      data-framer-name="Features"
                      style={{
                        outline: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        flexShrink: 0,
                        transform: 'none',
                        marginBottom: '10px'
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
                          href={`./#${link.toLowerCase()}`}
                        >
                          {link}
                        </a>
                      </p>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </nav>
      </div>

    </div>
  );
};

export default Navbar;