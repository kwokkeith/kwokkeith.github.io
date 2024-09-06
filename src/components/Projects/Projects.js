import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

// For project images
import sapLogo from "../../Assets/Projects/SAP_logo.png"
import csLogo from "../../Assets/Logos/csharp_logo.png"
import dotNetLogo from "../../Assets/Logos/dotNet_logo.png"
import othelloBeepImg from "../../Assets/Projects/Othello-beep.jpeg"
import alchitryLogo from "../../Assets/Logos/alchitry_logo.png"
import verilogLogo from "../../Assets/Logos/verilog-logo.png"
import enigmaMachineImg from "../../Assets/Projects/EnigmaMachine.jpeg"
import rustLogo from "../../Assets/Logos/rust_logo.png"
import javaLogo from "../../Assets/Logos/java_logo.png"
import knightImg from "../../Assets/Projects/knight.png"
import catalystStoryImg from "../../Assets/Projects/MindfulHacks.jpeg"
import raftConsensusImg from "../../Assets/Projects/raftConsensus.png"
import unityLogo from "../../Assets/Logos/Unity_logo.png"
import golangLogo from "../../Assets/Logos/go_logo.png"
import cppLogo from "../../Assets/Logos/cpp_logo.svg"
import unrealLogo from "../../Assets/Logos/UE_logo_light.png" 
import flightDynamicImg from "../../Assets/Projects/FlightDynamics.png"
import illuminateDarknessImg from "../../Assets/Projects/IlluminateDarkness.png"
import roboclash2022Img from "../../Assets/Projects/roboclash2022.jpg"
import arduinoLogo from "../../Assets/Logos/arduino_logo.png"
import fusion360Logo from "../../Assets/Logos/fusion360_logo_2.png"
import inventorLogo from "../../Assets/Logos/inventor_logo.png"
import roboclash2023Img from "../../Assets/Projects/roboclash2023.jpeg"
import arProjectImg from "../../Assets/Projects/ARProject.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Highlights </strong>
        </h1>
        <p style={{ color: "white" }}>
          : Here are a few projects I especially enjoyed working on :
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sapLogo}
              isBlog={false}
              title="ConcurSolutionz"
              description=
              "Automation for student claims that interfaces with the SAP Concur system and uses Optical Character Recognition. This project allowed me to apply software engineering skills and project management skills such as Agile project planning, UML designs, sequence diagrams, design-patterns, unit test cases, control flow graphs and Object-Oriented Programming."
              ghLink="https://github.com/kwokkeith/ConcurSolutionz"
              demoLink="https://www.youtube.com/watch?v=O2sew6b3bDg"
              logos={[
                csLogo,
                dotNetLogo,
              ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={othelloBeepImg}
              isBlog={false}
              title="OthelloBeep"
              description=
              "My team developed a unique Instruction Set Architecture (ISA) based on the Beta CPU from MIT to programme the game of Othello on a Field Programmable Gate Array (FPGA).
              This project was challenging but extremely rewarding with application in computer structures, hardware description language and machine language coding.
              A simulation was also developed for ease of testing our brand new ISA!"
              ghLink="https://github.com/kwokkeith/50002-OthelloBeep"
              demoLink="https://youtu.be/B0zMODB_oGo"
              logos={[
                alchitryLogo,
                verilogLogo,
              ]} 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enigmaMachineImg}
              isBlog={false}
              title="u8EnigmaMachine"
              description=
              "This cybersecurity project was done for a Capture the Flag challenge. It contains two challenges which requires one to decipher a UTF-8 enigma generated code.
              This project requires an understanding on the mechanism of the Enigma machine to perform the encryption and decryption. The solution cracker was developed in Rust."
              ghLink="https://github.com/kwokkeith/u8EnigmaMachine"
              demoLink="https://www.youtube.com/watch?v=hAaXjnVS9QQ"
              logos={[
                rustLogo,
                javaLogo,
              ]}
            />
          </Col>
        </Row>
        
        <h1 className="project-heading">
          All <strong className="purple">projects</strong>
        </h1>
        
        <p style={{ color: "white" }}>
          : Here are some of my past projects :
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={knightImg}
              isBlog={false}
              title="Chessboard AI"
              description="An AI that plays a variant of chess called knights-through against a player by using a experimental heurestic to play strategic moves."
              ghLink="https://github.com/kwokkeith/ChessBoardAI"
              logos={[
                javaLogo,
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={catalystStoryImg}
              isBlog={false}
              title="Catalyst Story"
              description="A Mental Wellness RPG game (The Catalyst) that encourages journaling as a mental wellness routine by incentivising it to help those living with mental health conditions in the community. 
              The game was developed in Unity and features a leveling/stat system based on what the user has written in a journal. It also features mental health techniques from stakeholders such as Chatty Caterpillar." 
              ghLink="https://github.com/kwokkeith/CatalystStory"
              demoLink="https://devpost.com/software/the-catalyst-rpg?ref_content=user-portfolio&ref_feature=in_progress"
              logos={[
                csLogo,
                unityLogo,
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raftConsensusImg}
              isBlog={false}
              title="Raft Consensus"
              description="An implementation of the Raft Consensus by Diego Ongaro and John Ousterhout (In Search of an Understandable Consensus Algorithm) in GO developed from scratch. This project allowed for a deeper appreciation for consensus algorithms in Concurrent and Distributed Programming."
              ghLink="https://github.com/kwokkeith/RaftConsensus"         
              logos={[
                golangLogo,
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flightDynamicImg}
              isBlog={false}
              title="Flight Dynamics (Unreal Plugin)"
              description="An unreal engine plugin meant to simulate flight mechanics that allows for reusablility using Unreal Blueprint.
              This project was a good blend between aerodynamics and software programming."
              ghLink="https://github.com/kwokkeith/FlightDynamics"
              demoLink="https://youtu.be/eRSFp7k56u0"
              logos={[
                cppLogo,
                unrealLogo,
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={illuminateDarknessImg}
              isBlog={false}
              title="Illuminate Darkness (Social Project)"
              description="A social project done as part of an intra-university competition by JTC. Illuminate Darkness creates a positive environment that inspires social interaction using data-driven methods and the attractiveness of light. 
              The prototype consisted of a 1:10 scale programmable physical orb, 1:1 scale interactable luminous floor and a 1:1 scale virtual prototype developed in Unity. It showcases programmed light shows as well as particle effect patterns for the orb lighting.
              The physical prototypes were then synchronised with the virtualisation using User-Datagram Protocol creating an aesthetic light show in real life.
              This project was nominated for the JTC Awards."
              demoLink="https://www.youtube.com/watch?v=q0iS_8MAur0&t=797s"
              logos={[
                csLogo,
                unityLogo,
              ]}
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roboclash2022Img}
              isBlog={false}
              title="Roboclash (2022)"
              description="2nd Runner Up, Lionsbot (Sponsor) Award for most innovative robot. Our robot uses suction mechanism to carry cubes and mecanum wheels to allow adaptive control of robot.
              The claw was designed to grasp balls quickly and precisely onto the robot to win this competition. The robot was designed with Arduino, Autodesk Inventor and Fusion, with 3D printed parts as well as lego parts.
              Communication of the robot was done through wireless and radio connection."
              demoLink="https://youtu.be/x6DekIAb_U0"
              logos={[
                arduinoLogo,
                fusion360Logo,
                inventorLogo
              ]}
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roboclash2023Img}
              isBlog={false}
              title="Roboclash (2023)"
              description="Winner, Engineering Award, Technology Award. Our robot uses an innovative suction mechanism using a compressor fan and a vacuum tube to pick balls up rapidly. The robot also uses a high torque motor and mecanum wheels to provide omni-directional movements. 
              The robot was designed and developed using Autodesk Inventor, Autodesk Fusion, Arduino and ESP-32 for wireless communication."
              ghLink="https://github.com/kwokkeith/GordonBot23"
              demoLink="https://www.youtube.com/watch?v=wvjeGbIFvdk"
              logos={[
                arduinoLogo,
                fusion360Logo,
                inventorLogo 
              ]}
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arProjectImg}
              isBlog={false}
              title="Augmented Reality Operation Training"
              description="This was a project done during my internship at Pratt and Whitney. I developed an immersive and interactive operation training for the use of Abrasive Wheel Operation using augmented reality that saved up to 16 training hours, amounting to 220 turbine blades worth of profit for every 2 trainees.
              The machines used in the training were modelled using Autodesk Inventor and the interactive software was developed using Unity and Vuforia. The project was well received and has been implemented into the current training."
              demoLink="https://youtu.be/5F-Ssf-Ro3k?feature=shared&t=131"
              logos={[
                csLogo,
                unityLogo,
                inventorLogo,
              ]}
            />
          </Col> 

        </Row>
      </Container>
    </Container>

  );
}

export default Projects;