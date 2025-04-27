import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import ServicesSection from './ServicesSelection';
import Asked from './asked';
import CallToActionCard from './ActionCard';
import Contact from './Contact';
import Footer from './Footer';
import Partnerships from './Partnerships';
import References from './References';
import Testimonials from './Testimonials';
const App = () => {
  return (
    <div
      id="main"
      style={{
        width: '100%',
        margin: 0,
        padding: 0,
        background: 'rgb(0, 0, 0)',
           }} 
    >
      
      <Navbar />
      <Header />
      <Partnerships />
      <ServicesSection />
      <References />
      <Testimonials />
      <Asked />

      <CallToActionCard />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;


//Az npm installt nem csak peers legacyval kell felrakni. Kell valamilyen --dev de kerdezd meg valamelyik llm modelt majd,
//npm install --save-dev typescript --legacy-peer-deps
//npm install ajv@^8.12.0 --legacy-peer-deps