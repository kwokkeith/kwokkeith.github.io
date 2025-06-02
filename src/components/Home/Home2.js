import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Logos
import csharpLogo from "../../Assets/Logos/csharp_logo.png";
import pythonLogo from "../../Assets/Logos/python_logo.png";
import javaLogo from "../../Assets/Logos/java_logo.png";
import javascriptLogo from "../../Assets/Logos/javascript_logo.png";
import goLogo from "../../Assets/Logos/go_logo.png";
import cppLogo from "../../Assets/Logos/cpp_logo.svg";
import rosLogo from "../../Assets/Logos/ros_logo.png";
import inventorLogo from "../../Assets/Logos/inventor_logo.png"
import fusion360Logo from "../../Assets/Logos/fusion360_logo_2.png"
import printing3dLogo from "../../Assets/Logos/3dprint_logo.jpg"
import unityLogo from "../../Assets/Logos/unity_logo_light.png"
import unrealLogo from "../../Assets/Logos/UE_logo.png"
import haskellLogo from "../../Assets/Logos/Haskell_Logo.png"

// This is wayyy tooo ugly XD 
// import {
//   DiJavascript1,
//   DiJava,
//   DiReact,
//   DiNodejs,
//   DiPython,
//   DiGo,
// } from "react-icons/di";
// import { 
//   SiCsharp,
//   SiCplusplus,
//   SiUnrealengine,
// } from "react-icons/si";
// import {
//   FaUnity
// } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              THIS IS <span className="highlight"> ME </span> !
            </h1>
            <p className="home-about-body">
              I've been an avid learner my entire life because I find the world fascinating. My first passion was Aeronautical Engineering,
              which I studied at Singapore Polytechnic. I got to work with B737s and B747s!  Later on in my studies, I became interested 
              in Object Oriented Programming through C#. During an internship with Pratt & Whitney, my love for programming deepened as 
              I created an interactive training manual in Augmented Reality using Unity, Vuforia, and C#. 
              <br />
              <br />
              I decided to pursue my studies in Computer Science and Design at SUTD. This was where my software development journey took off 🚀 
              - I learned about the fundamentals of operating systems and even developed my own instruction set architecture for an arcade 
              game called OthelloBeep! I also gained more hardware experience from my work with robotics. Together with my best friends in 
              school, we have won robotics competitions and are currently working on a cleaning robot for our capstone project with the 
              Changi Airport Group.
              <br />
              <br />I am proficient in:
              <br />
              {/* <Row style={{ justifyContent: "center", paddingBottom: "50px" }}> */}
              <Row className="home-proficiency-logo-row justify-content-center">
                <Col className="d-flex justify-content-center home-proficiency-logo-col">
                  {/* <SiCplusplus className="tech-icons" /> */}
                  <img src={csharpLogo} className="home-proficiency-logo-image" />
                </Col>
                <Col className="d-flex justify-content-center home-proficiency-logo-col">
                  {/* <DiPython className="tech-icons" /> */}
                  <img src={pythonLogo} className="home-proficiency-logo-image" />
                </Col>
                <Col className="d-flex justify-content-center home-proficiency-logo-col">
                  {/* <DiJava className="tech-icons" /> */}
                  <img src={javaLogo} className="home-proficiency-logo-image" />
                </Col>
                <Col className="d-flex justify-content-center home-proficiency-logo-col">
                  {/* <DiJavascript1 className="tech-icons" /> */}
                  <img src={javascriptLogo} className="home-proficiency-logo-image" />
                </Col>
                <Col className="d-flex justify-content-center home-proficiency-logo-col">
                  {/* <DiGo className="tech-icons" /> */}
                  <img src={goLogo} className="home-proficiency-logo-image" />
                </Col>
                <Col className="d-flex justify-content-center home-proficiency-logo-col">
                  {/* <SiCplusplus className="tech-icons" /> */}
                  <img src={cppLogo} className="home-proficiency-logo-image" />
                </Col>
                <Col className="d-flex justify-content-center home-proficiency-logo-col">
                  <img src={haskellLogo} className="home-proficiency-logo-image" style={{ width: "80px", height: "auto" }} />
                </Col>
              </Row>
              <Row className="home-proficiency-logo-row justify-content-center">
                <Col className="d-flex justify-content-center home-proficiency-logo-col">
                  <img src={rosLogo} className="home-proficiency-logo-image" />
                </Col>
                <Col className="d-flex justify-content-center home-proficiency-logo-col">
                  <img src={inventorLogo} className="home-proficiency-logo-image" />
                </Col>
                <Col className="d-flex justify-content-center home-proficiency-logo-col">
                  <img src={fusion360Logo} className="home-proficiency-logo-image" />
                </Col>
                <Col className="d-flex justify-content-center home-proficiency-logo-col">
                  <img src={printing3dLogo} className="home-proficiency-logo-image" />
                </Col>
                <Col className="d-flex justify-content-center home-proficiency-logo-col">
                  <img src={unityLogo} className="home-proficiency-logo-image" />
                </Col>
                <Col className="d-flex justify-content-center home-proficiency-logo-col">
                  <img src={unrealLogo} className="home-proficiency-logo-image" />
                </Col>
              </Row>
              <br />
              I am currently learning more about:
              <br />
              <i>
                <b className="highlight"> Advanced robotics algorithms, Rust. </b>
              </i> 
              <br />
              <br />
              I love learning and I believe in a multidisciplinary approach to solving problems. 
              I am looking for an opportunity to grow while working on projects across various disciplines, 
              exploring different fields and technologies!
            </p>
          </Col>
          <br />
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="highlight">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kwokkeith"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kwokkeith/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
