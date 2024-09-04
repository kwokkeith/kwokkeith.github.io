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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Highlights </strong>
        </h1>
        <p style={{ color: "white" }}>
          :Here are a few projects I especially enjoyed working on:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sapLogo}
              isBlog={false}
              title="ConcurSolutionz"
              description=
              "Automation for student claims that interfaces with the SAP Concur system and uses Optical Character Recognition. This project allowed me to apply software engineering skills and project management skills such as scrum project planning, UML designs, sequence diagrams, design-patterns, unit test cases, control flow graphs and Object-Oriented Programming."
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
              "Together with my friend, this cybersecurity project was done for a Capture the Flag challenge. It contains two challenges which requires one to decipher a UTF-8 enigma generated code.
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
          :Here are some of my past projects:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> 
        </Row>
      </Container>
    </Container>

  );
}

export default Projects;
