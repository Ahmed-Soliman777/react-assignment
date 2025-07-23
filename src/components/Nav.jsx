import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../css/Nav.css'

export default function NavComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handlePopState = () => {
      setActivePath(window.location.pathname);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);

    // Initial check
    handleScroll();
    handlePopState();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`bg-dark position-fixed w-100 z-3 ${scrolled && activePath ? 'nav-large' : ''} py-2`}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className={`text-uppercase fw-bold text-white ${
            scrolled && activePath ? 'fs-5 fs-lg-3' : 'fs-3'
          }`}
        >
          Start Framework
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-row-reverse">
          <Nav className="">
            <Nav.Link
              href="/about"
              className={`text-uppercase text-white ${
                activePath === '/about' ? 'active' : ''
              }`}
            >
              about
            </Nav.Link>
            <Nav.Link
              href="/portfolio"
              className={`text-uppercase text-white ${
                activePath === '/portfolio' ? 'active' : ''
              }`}
            >
              portofolio
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className={`text-uppercase text-white ${
                activePath === '/contact' ? 'active' : ''
              }`}
            >
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}