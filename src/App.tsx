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