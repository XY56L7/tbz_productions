import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from './logo.png';

const CustomNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToFAQ = () => {
    const aboutSection = document.getElementById('FAQ');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
    setExpanded(false);
  };

  const scrollToRef = () => {
    const aboutSection = document.getElementById('REF');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
    setExpanded(false);
  };

  const scrollToServices = () => {
    const mainSection = document.getElementById('services');
    if (mainSection) mainSection.scrollIntoView({ behavior: 'smooth' });
    setExpanded(false);
  };

  const scrollToContact = () => {
    const servicesSection = document.getElementById('contact');
    if (servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth' });
    setExpanded(false);
  };

  const scrollToPrices = () => {
    const pricesSection = document.getElementById('prices-section');
    if (pricesSection) pricesSection.scrollIntoView({ behavior: 'smooth' });
    setExpanded(false);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      bg="transparent"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
      className="custom-navbar"
    >
      <Container fluid className="px-4">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Navbar.Brand href="./">
            <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
        </div>
        <Navbar.Collapse id="navbar-nav">
          {isMobile ? (
            <>
              <div className="mobile-header">
                <Navbar.Brand href="./">
                  <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
              </div>
              <div className="mobile-nav-content">
                <Nav className="text-center w-100">
                  <Nav.Link onClick={scrollToServices}>
                    Szolgáltatások
                  </Nav.Link>
                  <Nav.Link onClick={scrollToRef}>
                    Referenciák
                  </Nav.Link>
                  <Nav.Link href="./#velemenyek" onClick={closeNavbar}>
                    Vélemények
                  </Nav.Link>
                  <Nav.Link onClick={scrollToFAQ}>
                    GY.I.K
                  </Nav.Link>
                  <Nav.Link onClick={scrollToContact}>
                    Kapcsolat
                  </Nav.Link>
                </Nav>
              </div>
            </>
          ) : (
            <div className="w-100 d-flex flex-row align-items-center justify-content-between">
              <div className="d-none d-lg-block" style={{ width: '100px' }}></div>
              <Nav className="mx-auto">
                <Nav.Link onClick={scrollToServices}>
                  Szolgáltatások
                </Nav.Link>
                <Nav.Link onClick={scrollToRef}>
                  Referenciák
                </Nav.Link>
                <Nav.Link href="./#velemenyek" onClick={closeNavbar}>
                  Vélemények
                </Nav.Link>
                <Nav.Link onClick={scrollToFAQ}>
                  GY.I.K
                </Nav.Link>
                <Nav.Link onClick={scrollToContact}>
                  Kapcsolat
                </Nav.Link>
              </Nav>
              <Button 
                onClick={scrollToPrices} 
                variant="light" 
                className="quote-button"
              >
                Árajánlat
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;