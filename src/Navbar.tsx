import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';

const CustomNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);

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
    closeNavbar();
  };

  const scrollToRef = () => {
    const aboutSection = document.getElementById('REF');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
    closeNavbar();
  };

  const scrollToServices = () => {
    const mainSection = document.getElementById('services');
    if (mainSection) mainSection.scrollIntoView({ behavior: 'smooth' });
    closeNavbar();
  };

  const scrollToContact = () => {
    const servicesSection = document.getElementById('contact');
    if (servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth' });
    closeNavbar();
  };

  const scrollToPrices = () => {
    const pricesSection = document.getElementById('prices-section');
    if (pricesSection) pricesSection.scrollIntoView({ behavior: 'smooth' });
    closeNavbar();
  };

  const closeNavbar = () => {
    if (isMobile) {
      const navbarCollapse = document.getElementById('navbar-nav');
      if (navbarCollapse) {
        navbarCollapse.classList.remove('show');
      }
    }
  };

  const navbarStyle = {
    width: '100%',
    zIndex: 1000,
    maxWidth: '100vw',
    margin: 0,
    padding: 0,
  };

  const navLinkStyle = {
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    fontWeight: 500,
    transition: 'color 0.3s ease',
  };

  const navCollapseStyle = {
    backgroundColor: isMobile ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
    backdropFilter: isMobile ? 'blur(5px)' : 'none',
    WebkitBackdropFilter: isMobile ? 'blur(5px)' : 'none',
    padding: isMobile ? '0px 0' : '0',
  };

  const buttonStyle = {
    borderRadius: '100px',
    padding: isMobile ? '12px 20px' : '12px 15px',
    color: '#333',
    fontWeight: 600,
    border: 'none',
    transition: 'all 0.3s ease-in-out',
    marginRight: isMobile ? '0' : '20px',
  };

  const toggleStyle = {
    border: 'none',
    color: '#fff',
    fontSize: '24px',
    marginRight: '15px',
  };

  return (
    <Navbar
      bg="transparent"
      variant="dark"
      expand="lg"
      fixed="top"
      style={navbarStyle}
      className="w-100"
    >
      <Container fluid className="px-0 mx-0 w-100">
        <Navbar.Brand href="./" style={{ marginLeft: '15px' }}>
          <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" style={toggleStyle} />
        <Navbar.Collapse id="navbar-nav" style={navCollapseStyle}>
          <Nav className={isMobile ? 'mx-auto text-center w-100' : 'mx-auto d-flex justify-content-center'}>
            <Nav.Link onClick={scrollToServices} style={navLinkStyle}>
              Szolgáltatások
            </Nav.Link>
            <Nav.Link onClick={scrollToRef} style={navLinkStyle}>
              Referenciák
            </Nav.Link>
            <Nav.Link href="./#velemenyek" onClick={closeNavbar} style={navLinkStyle}>
              Vélemények
            </Nav.Link>
            <Nav.Link onClick={scrollToFAQ} style={navLinkStyle}>
              GY.I.K
            </Nav.Link>
            <Nav.Link onClick={scrollToContact} style={navLinkStyle}>
              Kapcsolat
            </Nav.Link>
          </Nav>
          {!isMobile && (
            <Button onClick={scrollToPrices} variant="light" style={buttonStyle}>
              Árajánlat
            </Button>
          )}
          {isMobile && (
            <div className="text-center mt-3 w-100">
              <Button
                onClick={scrollToPrices}
                variant="light"
                style={buttonStyle}
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