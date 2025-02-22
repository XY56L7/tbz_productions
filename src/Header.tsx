import React, { useState, useEffect } from 'react';
import './Header.css';

const headings = [
  [
    { text: "MI VAGYUNK A ", highlight: false },
    { text: "TBZ. PRODUCTIONS!", highlight: true }
  ],
  [
    { text: "SZERETNÉD ", highlight: false },
    { text: "EGY KÉZBEN TARTANI", highlight: true },
    { text: " AZ ONLINE JELENLÉTED?", highlight: false }
  ],
  [
    { text: "EGYEDI ÉS PROFI MÉDIATARTALMAK A ", highlight: false },
    { text: "MÁRKÁDNAK ÉS VÁLLALKOZÁSODNAK", highlight: true }
  ],
  [
    { text: "TE ", highlight: true },
    { text: "MÁRKÁD, ", highlight: false },
    { text: "TE ", highlight: true },
    { text: "TÖRTÉNETED", highlight: false }
  ],
  [
    { text: "TERVEZÉSTŐL A MEGVALÓSÍTÁSIG", highlight: true }
  ]
];

const Header = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 4000); // Change heading every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="framer-16709mg" data-framer-name="Hero Section">
      <div className="framer-113wd9s" data-framer-name="BG">       
        <div className="ssr-variant">
          <div
            className="framer-1di1bym-container"
            style={{ willChange: 'transform', opacity: 1, transform: 'none' }}
          >
            <video
              src="https://framerusercontent.com/assets/a1hvWk1WbwKQRHiqYm2y0UdHe7M.mp4"
              loop
              preload="auto"
              poster="https://framerusercontent.com/images/lGGQGTWaeRqSnE3anMrQcGmD4o.png?scale-down-to=1024"
              muted
              playsInline
              autoPlay
              style={{
                cursor: 'auto',
                width: '100%',
                height: '100%',
                borderRadius: '0px',
                display: 'block',
                objectFit: 'cover',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                objectPosition: '50% 50%'
              }}
            ></video>
          </div>
        </div>
        <div className="ssr-variant hidden-1q3dwis">
          <div
            className="framer-1di1bym-container"
            style={{ opacity: 1, transform: 'none' }}
          >
            <video
              src="https://framerusercontent.com/assets/a1hvWk1WbwKQRHiqYm2y0UdHe7M.mp4"
              loop
              preload="none"
              poster="https://framerusercontent.com/images/lGGQGTWaeRqSnE3anMrQcGmD4o.png?scale-down-to=1024"
              muted
              playsInline
              autoPlay
              style={{
                cursor: 'auto',
                width: '100%',
                height: '100%',
                borderRadius: '0px',
                display: 'block',
                objectFit: 'cover',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                objectPosition: '50% 50%'
              }}
            ></video>
          </div>
        </div>
        <div className="framer-17pyaiw" data-framer-name="BG"></div>
      </div>
      <div className="framer-y7w8l1" data-framer-name="title">
        <div className="framer-1b880ke">
          <div className="framer-1v8xiey" id="navbar-scroll-trigger">
            <div
              className="framer-ykv72m"
              data-framer-name="Title"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start'
              }}
              data-framer-component-type="RichTextContainer"
            >
              <h1
                className="framer-text framer-styles-preset-13gpyit"
                style={{ color: '#fff' }}
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
                        : {}
                    }
                  >
                    {segment.text}
                  </span>
                ))}
              </h1>
            </div>
            <div
              className="framer-bnplt4"
              data-framer-appear-id="bnplt4"
              data-framer-name="Description"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                opacity: 1,
                transform: 'translateY(2px)'
              }}
              data-framer-component-type="RichTextContainer"
            >
              {/* Optional description */}
            </div>
          </div>
        </div>
        <div className="framer-ahrh2z" style={{ marginTop: '50px' }}>
          <div className="ssr-variant hidden-1q3dwis hidden-1303b6h">
            <div className="framer-7we1a5-container">
              <a
                className="framer-BTbjQ framer-dKer1 framer-bhZhX framer-152rnsu framer-v-1mb0zqp framer-1qzgy94"
                data-framer-name="White"
                data-highlight="true"
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '100px',
                  width: '100%'
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
                    justifyContent: 'flex-start'
                  }}
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1ress3h"
                    style={{ color: '#212121' }}
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
              justifyContent: 'flex-start',
              transform: 'translateY(40px)'
            }}
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text framer-styles-preset-1ff0x4j"
              style={{ textAlign: 'center', color: '#fff' }}
            >
              <a
                className="framer-text framer-styles-preset-gd5tqz"
                href="mailto:info@tbzproductions.hu"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@tbzproductions.hu
              </a>
            </p>
          </div>
        </div>
      </div>
      <div
        className="framer-1pybv41 hidden-17mnt2g hidden-1q3dwis"
        id="nav-trigger"
      ></div>
    </header>
  );
};

export default Header;
