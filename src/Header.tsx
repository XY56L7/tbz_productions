import React from 'react';
import './Header.css';

const Header = () => {

  const scrollToServices = () => {
    const mainSection = document.getElementById('services');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="framer-16709mg" data-framer-name="Hero Section">
      <div className="framer-113wd9s" data-framer-name="BG">       
         <div className="ssr-variant">
        <div className="framer-1di1bym-container" style={{ willChange: 'transform', opacity: 1, transform: 'none' }}>
          <video
            src="https://framerusercontent.com/assets/a1hvWk1WbwKQRHiqYm2y0UdHe7M.mp4"
            loop
            preload="auto"
            poster="https://framerusercontent.com/images/lGGQGTWaeRqSnE3anMrQcGmD4o.png?scale-down-to=1024"
            muted
            playsInline
            autoPlay  // Automatikus lejátszás
            style={{ cursor: 'auto', width: '100%', height: '100%', borderRadius: '0px', display: 'block', objectFit: 'cover', backgroundColor: 'rgba(0, 0, 0, 0)', objectPosition: '50% 50%' }}
          ></video>
        </div>
      </div>
        <div className="ssr-variant  hidden-1q3dwis">
          <div className="framer-1di1bym-container" style={{ opacity: 1, transform: 'none' }}>
            <video
              src="https://framerusercontent.com/assets/a1hvWk1WbwKQRHiqYm2y0UdHe7M.mp4"
              loop
              preload="none"
              poster="https://framerusercontent.com/images/lGGQGTWaeRqSnE3anMrQcGmD4o.png?scale-down-to=1024"
              muted
              playsInline
              autoPlay
              style={{ cursor: 'auto', width: '100%', height: '100%', borderRadius: '0px', display: 'block', objectFit: 'cover', backgroundColor: 'rgba(0, 0, 0, 0)', objectPosition: '50% 50%' }}
            ></video>
          </div>
        </div>
        <div className="framer-17pyaiw" data-framer-name="BG"></div>
      </div>
      <div className="framer-y7w8l1" data-framer-name="title">
        <div className="framer-1b880ke">
          <div className="framer-1v8xiey" id="navbar-scroll-trigger">
            <div className="ssr-variant hidden-1303b6h">
              <div className="framer-16rdjif" data-framer-name="Title" style={{ opacity: 0, transform: 'translateY(40px)' }}>
                <div className="framer-1f41923" data-framer-name="Text">
                  <div className="framer-zms2nu" data-framer-name="App Store" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }} data-framer-component-type="RichTextContainer">
                    <p style={{ fontFamily: 'Poppins, Poppins Placeholder, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.15em', lineHeight: '1.5em', textAlign: 'left', color: 'rgba(222, 222, 222, 0.8)', textTransform: 'uppercase' }} className="framer-text">directed by TBZ productions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant hidden-17mnt2g hidden-1q3dwis">
              <div className="framer-16rdjif" data-framer-name="Title" style={{ opacity: 1, transform: 'none' }}>
                <div className="framer-1f41923" data-framer-name="Text">
                  <div className="framer-zms2nu" data-framer-name="App Store" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }} data-framer-component-type="RichTextContainer">
                    <p style={{ fontFamily: 'Poppins, Poppins Placeholder, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.15em', lineHeight: '1.5em', textAlign: 'left', color: 'rgba(222, 222, 222, 0.8)', textTransform: 'uppercase' }} className="framer-text">directed by TBZ productions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-ykv72m" data-framer-name="Title" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }} data-framer-component-type="RichTextContainer">
              <h1 className="framer-text framer-styles-preset-13gpyit" data-styles-preset="QWoLHv2HI" style={{ color: 'rgb(255, 255, 255)' }}>
                <span style={{ display: 'inline-block', opacity: 1, transform: 'translateX(0px) translateY(10px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)' }}>Hatékony,</span>{' '}
                <span style={{ display: 'inline-block', opacity: 1, transform: 'translateX(0px) translateY(10px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)' }}>kreatív</span>{' '}
                <span style={{ display: 'inline-block', opacity: 1, transform: 'translateX(0px) translateY(10px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)' }}>és</span>{' '}
                <span style={{ display: 'inline-block', opacity: 1, transform: 'translateX(0px) translateY(10px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)' }}></span>
                <br className="framer-text" />
                <span style={{ display: 'inline-block', opacity: 1, transform: 'translateX(0px) translateY(10px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)' }}>minőségi</span>{' '}
                <span style={{ display: 'inline-block', opacity: 1, transform: 'translateX(0px) translateY(10px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)' }}>tartalomgyártás</span>
              </h1>
            </div>
            <div className="framer-bnplt4" data-framer-appear-id="bnplt4" data-framer-name="Description" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', opacity: 1, flexShrink: 0, willChange: 'transform', transform: 'translateY(2px)' }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-jt39bk" data-styles-preset="q0QedYkV9" style={{ textAlign: 'center', color: 'rgb(255, 255, 255)' }}>
                Arra vágysz, hogy valós eredmények legyenek felmutatva neked céged tartalmaiban?! Akkor a megfelelő helyen jársz. Üdvözöl téged az TBZ productions! Csapatunk küldetése, hogy a legmagasabb minőségbe kivitelezze a céged tartalmait.
              </p>
            </div>
          </div>
        </div>
        <div className="framer-ahrh2z" style={{ marginTop: '50px' }}>
          <div className="ssr-variant hidden-1q3dwis hidden-1303b6h">
            <div className="framer-7we1a5-container">
              <a className="framer-BTbjQ framer-dKer1 framer-bhZhX framer-152rnsu framer-v-1mb0zqp framer-1qzgy94" data-framer-name="White" data-highlight="true" style={{ borderBottomWidth: '0px', borderColor: 'rgba(0, 0, 0, 0)', borderLeftWidth: '0px', borderRightWidth: '0px', borderStyle: 'solid', borderTopWidth: '0px', backdropFilter: 'none', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '100px', WebkitBackdropFilter: 'none', height: '100%', maxWidth: '100%', width: '100%' }} onClick={scrollToServices} tabIndex={0}>
                <div className="framer-1wnb748" data-framer-name="Main Text" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-1ress3h" data-styles-preset="OdrXVUxks" style={{ color: 'rgb(33, 33, 33)' }}>Szolgáltatásaink</p>
                </div>
              </a>
            </div>
          </div>
          {/* <div className="ssr-variant hidden-17mnt2g hidden-1303b6h">
            <div className="framer-7we1a5-container">
              <a className="framer-BTbjQ framer-dKer1 framer-bhZhX framer-152rnsu framer-v-1mb0zqp framer-1qzgy94" data-framer-name="White" data-highlight="true" style={{ borderBottomWidth: '0px', borderColor: 'rgba(0, 0, 0, 0)', borderLeftWidth: '0px', borderRightWidth: '0px', borderStyle: 'solid', borderTopWidth: '0px', backdropFilter: 'none', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '100px', WebkitBackdropFilter: 'none', height: '100%', maxWidth: '100%', width: '100%' }} href="./#szolgaltatasok" tabIndex={0}>
                <div className="framer-1wnb748" data-framer-name="Main Text" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-1ress3h" data-styles-preset="OdrXVUxks" style={{ color: 'rgb(33, 33, 33)' }}>Szolgáltatásaink</p>
                </div>
              </a>
            </div>
          </div> */}
          {/* <div className="ssr-variant hidden-17mnt2g hidden-1q3dwis">
            <div className="framer-7we1a5-container">
              <a className="framer-BTbjQ framer-dKer1 framer-bhZhX framer-152rnsu framer-v-1mb0zqp framer-1qzgy94" data-framer-name="White" data-highlight="true" style={{ borderBottomWidth: '0px', borderColor: 'rgba(0, 0, 0, 0)', borderLeftWidth: '0px', borderRightWidth: '0px', borderStyle: 'solid', borderTopWidth: '0px', backdropFilter: 'none', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '100px', WebkitBackdropFilter: 'none', height: '100%', maxWidth: '100%', width: '100%' }} href="./#szolgaltatasok" tabIndex={0}>
                <div className="framer-1wnb748" data-framer-name="Main Text" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-1ress3h" data-styles-preset="OdrXVUxks" style={{ color: 'rgb(33, 33, 33)' }}>Szolgáltatásaink</p>
                </div>
              </a>
            </div>
          </div> */}
          <div className="framer-tm7nua" data-framer-appear-id="tm7nua" data-framer-name="Description" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', opacity: 0.001, flexShrink: 0, willChange: 'transform', transform: 'translateY(40px)' }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-1ff0x4j" data-styles-preset="YIj0rq2zB" style={{ textAlign: 'center', color: 'rgb(255, 255, 255)' }}>
              <a className="framer-text framer-styles-preset-gd5tqz" data-styles-preset="cgt2N9IWa" href="mailto:info@tbzproductions.hu" target="_blank" rel="noopener noreferrer">info@tbzproductions.hu</a>
            </p>
          </div>
        </div>
      </div>
      <div className="framer-1pybv41 hidden-17mnt2g hidden-1q3dwis" data-framer-name="nav-trigger" id="nav-trigger"></div>
    </header>
  );
};

export default Header;