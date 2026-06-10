import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" id="site-footer">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="site-footer__copy">
            Keith Kwok &copy; {year}
          </Col>
          <Col md={6} className="site-footer__links">
            <a href="mailto:keithkwok99@gmail.com" className="site-footer__link" aria-label="Email">
              <FaEnvelope />
              <span>Email</span>
            </a>
            <a href="https://scholar.google.com/citations?user=sWWi37YAAAAJ" target="_blank" rel="noreferrer" className="site-footer__link" aria-label="Google Scholar">
              <SiGooglescholar />
              <span>Scholar</span>
            </a>
            <a href="https://github.com/kwokkeith" target="_blank" rel="noreferrer" className="site-footer__link" aria-label="GitHub">
              <AiFillGithub />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/kwokkeith/" target="_blank" rel="noreferrer" className="site-footer__link" aria-label="LinkedIn">
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;