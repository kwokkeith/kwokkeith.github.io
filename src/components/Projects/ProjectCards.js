import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <div className="pc-card">
      <div className="pc-card__img-wrap">
        <img src={props.imgPath} alt={props.title} className="pc-card__img" />
      </div>
      <div className="pc-card__body">
        <h3 className="pc-card__title">{props.title}</h3>

        {props.logos && props.logos.length > 0 && (
          <div className="pc-card__logos">
            {props.logos.map((logo, i) => (
              <img key={i} src={logo} alt={`tech-${i}`} className="pc-card__logo" />
            ))}
          </div>
        )}

        <p className="pc-card__desc">{props.description}</p>

        <div className="pc-card__links">
          {props.ghLink && (
            <a href={props.ghLink} target="_blank" rel="noreferrer" className="pc-card__link">
              <BsGithub /> GitHub
            </a>
          )}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
          {!props.isBlog && props.demoLink && (
            <a href={props.demoLink} target="_blank" rel="noreferrer" className="pc-card__link pc-card__link--demo">
              <CgWebsite /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;