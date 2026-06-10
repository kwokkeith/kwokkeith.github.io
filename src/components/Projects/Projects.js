import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import TableOfContents from "../TableOfContents";

// Project images
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
import unityLogo from "../../Assets/Logos/unity_logo_light.png"
import golangLogo from "../../Assets/Logos/go_logo.png"
import cppLogo from "../../Assets/Logos/cpp_logo.svg"
import unrealLogo from "../../Assets/Logos/UE_logo.png"
import flightDynamicImg from "../../Assets/Projects/FlightDynamics.png"
import illuminateDarknessImg from "../../Assets/Projects/IlluminateDarkness.png"
import roboclash2022Img from "../../Assets/Projects/roboclash2022.jpg"
import arduinoLogo from "../../Assets/Logos/arduino_logo.png"
import fusion360Logo from "../../Assets/Logos/fusion360_logo_2.png"
import inventorLogo from "../../Assets/Logos/inventor_logo.png"
import roboclash2023Img from "../../Assets/Projects/roboclash2023.jpeg"
import arProjectImg from "../../Assets/Projects/ARProject.png"
import haskellLogo from "../../Assets/Logos/Haskell_Logo.png"
import webAssemblyImg from "../../Assets/Logos/webAssembly_logo.png"
import uiuxImg from "../../Assets/Projects/UiUx_Img.png"
import figmaLogo from "../../Assets/Logos/figma_logo.png"
import dv8Img from "../../Assets/Projects/dv8.jpeg"
import rosLogo from "../../Assets/Logos/ros_logo.png"
import mySqlLogo from "../../Assets/Logos/mysql_logo.png"
import aslModelImg from "../../Assets/Projects/aslAi.jpg"
import tensorFlowLogo from "../../Assets/Logos/tensorflow_logo.png"

// ─── SECTIONS ────────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "highlights", label: "Highlights" },
  { id: "all-projects", label: "All Projects" },
];

// ─── DATA ────────────────────────────────────────────────────────────────────

const HIGHLIGHTS = [
  {
    imgPath: dv8Img,
    title: "AI Spot Cleaning Robot (DV8)",
    description: "Developed the full navigation stack and AI-powered litter detection for the DV8 robot deployed at Changi Airport using ROS Noetic, enabling autonomous mapping, localisation, and spot cleaning. Work spanned the entire software stack — UI, database integration, navigation, and behaviour control.",
    ghLink: "https://github.com/kwokkeith/Kepstone_Experimental_Robot.git",
    demoLink: "https://youtube.com/playlist?list=PLl0ZKY4hbnYgEnyBCW2wVflFwFmwfRKof&feature=shared",
    logos: [rosLogo, cppLogo, mySqlLogo],
  },
  {
    imgPath: aslModelImg,
    title: "Sign Language Interpreter Model",
    description: "Built a multi-stage deep learning system classifying ASL gestures as dynamic or static using logistic regression, routing to LSTM or feedforward networks trained on MediaPipe landmarks. Outputs interpreted by an LLM with a custom ASL-to-English grammar for natural language generation.",
    ghLink: "https://github.com/kwokkeith/ASL-Translation-Model.git",
    demoLink: "https://youtu.be/MeLZG1cvk4M",
    logos: [tensorFlowLogo],
  },
  {
    imgPath: catalystStoryImg,
    title: "Catalyst Story",
    description: "A mental wellness RPG game that encourages journaling as a routine by gamifying it — featuring a leveling/stat system based on journal entries and mental health techniques from stakeholders such as Chatty Caterpillar. Developed in Unity.",
    ghLink: "https://github.com/kwokkeith/CatalystStory",
    demoLink: "https://devpost.com/software/the-catalyst-rpg",
    logos: [csLogo, unityLogo],
  },
];

const ALL_PROJECTS = [
  {
    imgPath: othelloBeepImg,
    title: "OthelloBeep",
    description: "Developed a unique Instruction Set Architecture based on MIT's Beta CPU to programme Othello on an FPGA. Spans computer structures, hardware description language, and machine language coding.",
    ghLink: "https://github.com/kwokkeith/50002-OthelloBeep",
    demoLink: "https://youtu.be/B0zMODB_oGo",
    logos: [alchitryLogo, verilogLogo],
  },
  {
    imgPath: webAssemblyImg,
    title: "Web Assembly Compiler",
    description: "Compiler translating SIMP language into WebAssembly, built in Haskell with a Yesod frontend. Covers the full pipeline: lexing, parsing, static analysis, optimisation, and code generation.",
    ghLink: "https://github.com/kwokkeith/SIMP",
    demoLink: "https://youtu.be/7d5i8Q5DbVQ",
    logos: [haskellLogo],
  },
  {
    imgPath: raftConsensusImg,
    title: "Raft Consensus",
    description: "From-scratch implementation of the Raft Consensus algorithm by Ongaro & Ousterhout in Go, deepening understanding of consensus algorithms in concurrent and distributed programming.",
    ghLink: "https://github.com/kwokkeith/RaftConsensus",
    logos: [golangLogo],
  },
  {
    imgPath: enigmaMachineImg,
    title: "u8EnigmaMachine",
    description: "Cybersecurity CTF challenge featuring two puzzles requiring decipherment of UTF-8 enigma-generated code. Solution cracker developed in Rust.",
    ghLink: "https://github.com/kwokkeith/u8EnigmaMachine",
    demoLink: "https://www.youtube.com/watch?v=hAaXjnVS9QQ",
    logos: [rustLogo, javaLogo],
  },
  {
    imgPath: roboclash2023Img,
    title: "Roboclash (2023)",
    description: "Winner — Engineering Award & Technology Award. Innovative suction mechanism using a compressor fan and vacuum tube for rapid ball pickup, with omni-directional mecanum wheels.",
    ghLink: "https://github.com/kwokkeith/GordonBot23",
    demoLink: "https://www.youtube.com/watch?v=wvjeGbIFvdk",
    logos: [arduinoLogo, fusion360Logo, inventorLogo],
  },
  {
    imgPath: roboclash2022Img,
    title: "Roboclash (2022)",
    description: "2nd Runner Up & Lionsbot Most Innovative Robot Award. Suction mechanism with mecanum wheels for adaptive control. Designed with Arduino, Autodesk Inventor and Fusion, with wireless communication.",
    demoLink: "https://youtu.be/x6DekIAb_U0",
    logos: [arduinoLogo, fusion360Logo, inventorLogo],
  },
  {
    imgPath: arProjectImg,
    title: "Augmented Reality Operation Training",
    description: "Internship project at Pratt & Whitney. Immersive AR training for abrasive wheel operations saving 16 training hours per cohort. Modelled in Autodesk Inventor, built in Unity with Vuforia.",
    demoLink: "https://youtu.be/5F-Ssf-Ro3k",
    logos: [csLogo, unityLogo, inventorLogo],
  },
  {
    imgPath: flightDynamicImg,
    title: "Flight Dynamics (Unreal Plugin)",
    description: "Unreal Engine plugin simulating flight mechanics with reusable Blueprint components — a blend of aerodynamics and software engineering.",
    ghLink: "https://github.com/kwokkeith/FlightDynamics",
    demoLink: "https://youtu.be/eRSFp7k56u0",
    logos: [cppLogo, unrealLogo],
  },
  {
    imgPath: illuminateDarknessImg,
    title: "Illuminate Darkness",
    description: "JTC intra-university social project using data-driven light to inspire social interaction. Included a programmable orb, interactive luminous floor, and Unity virtualisation synchronised via UDP. Nominated for JTC Award.",
    demoLink: "https://www.youtube.com/watch?v=q0iS_8MAur0",
    logos: [csLogo, unityLogo],
  },
  {
    imgPath: knightImg,
    title: "Chessboard AI",
    description: "AI that plays a knights-through chess variant against a human using an experimental heuristic for strategic moves.",
    ghLink: "https://github.com/kwokkeith/ChessBoardAI",
    logos: [javaLogo],
  },
  {
    imgPath: uiuxImg,
    title: "Improving Course Enrolment (UI/UX)",
    description: "Redesigning SUTD's course enrolment experience through user surveys and UX research, delivering a user-centred prototype that reduces friction and frustration.",
    ghLink: "https://github.com/kwokkeith/HiFi_UI_Course_Enrolment.git",
    demoLink: "https://youtu.be/xav18oKZRGU",
    logos: [golangLogo, figmaLogo],
  },
  {
    imgPath: sapLogo,
    title: "ConcurSolutionz",
    description: "Automation for student claims interfacing with SAP Concur via OCR. Applied Agile planning, UML, design patterns, unit tests, and OOP throughout.",
    ghLink: "https://github.com/kwokkeith/ConcurSolutionz",
    demoLink: "https://www.youtube.com/watch?v=O2sew6b3bDg",
    logos: [csLogo, dotNetLogo],
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

function Projects() {
  return (
    <main className="projects-page">
      <Container fluid="lg">
        <Row>
          {/* ── Main content ── */}
          <Col lg={10} md={12}>

            <section id="highlights" className="pp-section">
              <h2 className="pp-section__heading">Highlights</h2>
              <p className="pp-section__sub">Projects I especially enjoyed working on</p>
              <Row>
                {HIGHLIGHTS.map((p, i) => (
                  <Col lg={4} md={6} xs={12} key={i} className="pp-col">
                    <ProjectCard {...p} isBlog={false} />
                  </Col>
                ))}
              </Row>
            </section>

            <section id="all-projects" className="pp-section pp-section--all">
              <h2 className="pp-section__heading">All Projects</h2>
              <p className="pp-section__sub">A full list of past work</p>
              <Row>
                {ALL_PROJECTS.map((p, i) => (
                  <Col lg={4} md={6} xs={12} key={i} className="pp-col">
                    <ProjectCard {...p} isBlog={false} />
                  </Col>
                ))}
              </Row>
            </section>

          </Col>

          {/* ── Sticky sidebar ── */}
          <Col lg={2} className="d-none d-lg-block">
            <TableOfContents title="Projects" sections={SECTIONS} />
          </Col>

        </Row>
      </Container>
    </main>
  );
}

export default Projects;