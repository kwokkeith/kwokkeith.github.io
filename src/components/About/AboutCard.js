import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="highlight">Kwok Keith </span>
            from <span className="highlight"> Singapore, Singapore.</span>
            <br />
            I am currently a Computer Science student at the Singapore University of Technology and Design.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Going out for a walk
            </li>
            <li className="about-activity">
              <ImPointRight /> Socialising 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "TOO inspirational XD"{" "}
          </p>
          <footer className="blockquote-footer">Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
