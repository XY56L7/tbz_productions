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
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'services' && !isMobile) {
      // Desktop nézetben a services target pozíciójához görgetés
      const target = document.getElementById('scroll-target-services');
      if (target) {
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: targetTop -240 , // Offset a navbar magassága miatt
          behavior: 'smooth',
        });
      } else {
        // Visszatérés az alapértelmezett szekcióhoz, ha a célpont nem található
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (sectionId === 'FAQ' && !isMobile) {
      // Desktop nézetben a 9. kártya pozíciójához görgetés
      const target = document.getElementById('scroll-target-9th-card');
      if (target) {
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: targetTop - 50, // Offset a navbar magassága miatt
          behavior: 'smooth',
        });
      } else {
        // Visszatérés az alapértelmezett szekcióhoz, ha a célpont nem található
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Más szekciókhoz vagy mobil nézetben
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
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
      className="py-0"
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
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
                className="ms-auto rounded-pill px-3 py-1 fw-semibold"
                style={{
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: isButtonHovered ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none',
                  backgroundColor: '#f8f9fa',
                  borderColor: '#f8f9fa',
                }}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
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