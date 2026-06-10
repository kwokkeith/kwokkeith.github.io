import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMoon, HiSun } from "react-icons/hi";
import brandLogo from "../Assets/brand.png";

function NavBar({ darkMode, toggleDarkMode }) {
  const [expand, setExpand] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About",    to: "/"        },
    // { label: "Research", to: "/research" },
    { label: "Projects", to: "/project" },
  ];

  const handleNavClick = (e, to) => {
    setExpand(false);
    if (location.pathname === to) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    setExpand(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    }
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`site-navbar${scrolled ? " site-navbar--scrolled" : ""}`}
    >
      <Container className="site-navbar__inner">

        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="site-navbar__brand" onClick={handleBrandClick}>
          <img src={brandLogo} className="site-navbar__brand-logo" alt="logo" />
          Keith Kwok
        </Navbar.Brand>

        {/* Hamburger — only visible below md */}
        <Navbar.Toggle
          aria-controls="main-nav"
          onClick={() => setExpand(e => e ? false : "expanded")}
          className="site-navbar__toggle"
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>

        {/* Nav links — collapse on mobile, inline on desktop */}
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto site-navbar__nav">
            {navLinks.map(({ label, to }) => {
              const isActive = location.pathname === to;
              return (
                <Nav.Item key={to}>
                  <Nav.Link
                    as={Link}
                    to={to}
                    onClick={(e) => handleNavClick(e, to)}
                    className={`site-navbar__link${isActive ? " site-navbar__link--active" : ""}`}
                  >
                    {label}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;