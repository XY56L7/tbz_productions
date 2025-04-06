import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from './logo.png';
import './Navbar.css';

const CustomNavbar = () => {
  const scrollToFAQ = () => {
    const aboutSection = document.getElementById('FAQ');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRef = () => {
    const aboutSection = document.getElementById('REF');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const mainSection = document.getElementById('services');
    if (mainSection) mainSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const servicesSection = document.getElementById('contact');
    if (servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPrices = () => {
    const pricesSection = document.getElementById('prices-section');
    if (pricesSection) pricesSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar"
      style={{
        width: '100%',
        overflowX: 'hidden', // Itt marad
      }}
    >
      <Container fluid>
        <Navbar.Brand href="./">
          <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggle" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link onClick={scrollToServices} className="nav-link-custom">Szolgáltatások</Nav.Link>
            <Nav.Link onClick={scrollToRef} className="nav-link-custom">Referenciák</Nav.Link>
            <Nav.Link href="./#velemenyek" className="nav-link-custom">Vélemények</Nav.Link>
            <Nav.Link onClick={scrollToFAQ} className="nav-link-custom">GY.I.K</Nav.Link>
            <Nav.Link onClick={scrollToContact} className="nav-link-custom">Kapcsolat</Nav.Link>
          </Nav>
          <Button
            onClick={scrollToPrices}
            className="quote-button ms-lg-3"
            style={{
              borderRadius: '100px',
              padding: '12px 20px',
              color: '#333',
              fontWeight: 600,
              border: 'none',
            }}
          >
            Árajánlat
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;