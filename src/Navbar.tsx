import React, { useState, useEffect } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';

interface NavItemProps {
  onClick: () => void;
  children: React.ReactNode;
  href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ onClick, children, href }) => (
  <button
    onClick={onClick}
    className="text-white bg-transparent border-0 px-4 py-2"
    style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 500 }}
  >
    {href ? <a href={href} className="text-white text-decoration-none">{children}</a> : children}
  </button>
);

const CustomNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log(window.innerWidth); // Aktuális kijelző szélesség logolása
    if (sectionId === 'FAQ' && !isMobile) {
      const target = document.getElementById('scroll-target-9th-card');
      if (target) {
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
        if (window.innerWidth < 1200) {
          console.log("1"); // Aktuális kijelző szélesség logolása

          // Ha mobil nézetben vagyunk, akkor a target elemhez görgetünk
          window.scrollTo({
            top: targetTop - 10,
            behavior: 'smooth',
          });
         }
        // else if (window.innerWidth > 1400) { 
        //   console.log("2"); // Aktuális kijelző szélesség logolása
        //   window.scrollTo({
        //     top: targetTop + 200,
        //     behavior: 'smooth',
        //   });
        // }
        else {
          console.log("3"); // Aktuális kijelző szélesség logolása
          window.scrollTo({
            top: targetTop - 50,
            behavior: 'smooth',
          });
        }
        

      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: sectionTop - 80,
          behavior: 'smooth',
        });
      }
    }
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
      className="py-2"
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))',
      }}
    >
      <Container fluid className="px-4">
        <Navbar.Brand href="./" className="p-0">
          <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0 p-0" />
        <Navbar.Collapse id="navbar-nav">
          {isMobile ? (
            <div
              className="d-flex flex-column w-100 vh-100 position-fixed top-0 start-0"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(5px)', zIndex: 1000 }}
            >
              <div className="d-flex justify-content-between align-items-center p-3">
                <Navbar.Brand href="./" className="p-0">
                  <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" className="border-0 p-0" />
              </div>
              <div className="d-flex flex-column text-center w-100 mt-4">
                <NavItem onClick={() => scrollToSection('services')}>Szolgáltatások</NavItem>
                <NavItem onClick={() => scrollToSection('REF')}>Referenciák</NavItem>
                <NavItem onClick={() => scrollToSection('test')}>Vélemények</NavItem>
                <NavItem onClick={() => scrollToSection('FAQ')}>GY.I.K.</NavItem>
                <NavItem onClick={() => scrollToSection('contact')}>Kapcsolat</NavItem>
              </div>
            </div>
          ) : (
            <div className="d-flex w-100 align-items-center">
              <div className="d-flex justify-content-center flex-nowrap w-100">
                <NavItem onClick={() => scrollToSection('services')}>Szolgáltatások</NavItem>
                <NavItem onClick={() => scrollToSection('REF')}>Referenciák</NavItem>
                <NavItem onClick={() => scrollToSection('test')}>Vélemények</NavItem>
                <NavItem onClick={() => scrollToSection('FAQ')}>GY.I.K.</NavItem>
                <NavItem onClick={() => scrollToSection('contact')}>Kapcsolat</NavItem>
              </div>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="light"
                className="ms-auto rounded-pill px-3 py-1 fw-semibold quote-btn"
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