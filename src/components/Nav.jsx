import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../css/Nav.css'
import { Link, NavLink } from 'react-router-dom';

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
    // <Navbar
    //   expand="lg"
    //   className={`bg-dark position-fixed w-100 z-3 ${scrolled && activePath ? 'nav-large' : ''} py-2`}
    // >
    //   <Container>
    //     <Navbar.Brand
    //       href="/"
    //       className={`text-uppercase fw-bold text-white ${
    //         scrolled && activePath ? 'fs-5 fs-lg-3' : 'fs-3'
    //       }`}
    //     >
    //       Start Framework
    //     </Navbar.Brand>

    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav" className="flex-row-reverse">
    //       <Nav className="">
    //         <Nav.Link
    //           href="/about"
    //           className={`text-uppercase text-white ${
    //             activePath === '/about' ? 'active' : ''
    //           }`}
    //         >
    //           about
    //         </Nav.Link>
    //         <Nav.Link
    //           href="/portfolio"
    //           className={`text-uppercase text-white ${
    //             activePath === '/portfolio' ? 'active' : ''
    //           }`}
    //         >
    //           portofolio
    //         </Nav.Link>
    //         <Nav.Link
    //           href="/contact"
    //           className={`text-uppercase text-white ${
    //             activePath === '/contact' ? 'active' : ''
    //           }`}
    //         >
    //           contact
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>


    <nav className={`navbar navbar-expand-lg bg-dark position-fixed w-100 z-3 ${scrolled && activePath ? 'nav-large' : ''} py-2`}>
      <div className="container">
        <NavLink className={`text-uppercase fw-bold text-white navbar-brand ${
            scrolled && activePath ? 'fs-5 fs-lg-3' : 'fs-3'
          }`} to="/">Start framework</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              
              <NavLink className={`text-uppercase text-white nav-link`} aria-current="page" to="/about">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`text-uppercase text-white nav-link `} to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`text-uppercase text-white nav-link`} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

{/*
  <li className="nav-item">
    <Link className="nav-link text-white active" aria-current="page" to="/about">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-white" to="/portfolio">Portfolio</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-white" to="/contact">Contact</Link>
  </li>
  <nav className={`bg-dark position-fixed w-100 z-3 ${scrolled && activePath ? 'nav-large' : ''} py-2`}>
  <div className="container">
        <Link className={`text-uppercase fw-bold text-white text-decoration-none ${scrolled && activePath ? 'fs-5 fs-lg-3' : 'fs-3'
          }`} to="/">Start Framework</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
          </ul>
        </div>
      </div>
    </nav>
  */}