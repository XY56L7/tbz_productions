import React from 'react';
import Header from './Header'; // Ha van Header komponens
import Navbar from './Navbar'; // Ha van Navbar komponens
import ServicesSection from './ServicesSelection';
import Asked from './asked';
import CallToActionCard from './ActionCard';
import Contact from './Contact';
import Footer from './Footer';
import Partnerships from './Partnerships';
import References from './References';

const App = () => {
  return (
    <div
      id="main"
      data-framer-hydrate-v2='{"routeId":"HqQIkKuvD","localeId":"default","breakpoints":[{"hash":"17mnt2g","mediaQuery":"(min-width: 1200px)"},{"hash":"1q3dwis","mediaQuery":"(min-width: 810px) and (max-width: 1199px)"},{"hash":"1303b6h","mediaQuery":"(max-width: 809px)"}]}'
      data-framer-ssr-released-at="2025-02-13T09:47:16.918Z"
      data-framer-page-optimized-at="2025-02-15T09:58:32.912Z"
    >
      <style>
        {`
          html body {
            background: rgb(0, 0, 0);
          }
        `}
      </style>
      <div
        data-framer-root
        className="framer-eYD19 framer-UTJHd framer-na1gH framer-gao1K framer-PG464 framer-GZaA2 framer-AdFwz framer-fMB2d framer-8Rgkc framer-17mnt2g"
        style={{ minHeight: '100vh', width: 'auto' }}
      >
        <div className="framer-1pin6hi-container">
          <div className="ssr-variant hidden-1303b6h"></div>
          <div className="ssr-variant hidden-17mnt2g hidden-1q3dwis"></div>
        </div>
        <Header />
        <Navbar />
        <Partnerships />
        <ServicesSection />
        <References />
        <Asked />
        <CallToActionCard />
        <Contact />
        <Footer />
        {/* <FeaturedSection/> */}
        {/* További tartalom */}
      </div>
    </div>
  );
};

export default App;