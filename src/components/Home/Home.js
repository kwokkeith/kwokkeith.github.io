import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import TableOfContents from "../TableOfContents";

// ─── TOC SECTIONS ────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "research-focus", label: "Research Focus" },
  { id: "publications",   label: "Publications"   },
  { id: "education",      label: "Education"      },
  { id: "experience",     label: "Experience"     },
  { id: "awards",         label: "Awards"         },
];

// ─── DATA ────────────────────────────────────────────────────────────────────

const RESEARCH_SUMMARY =
  "I am a PhD student at NTU Singapore studying AI safety and alignment, " +
  "with a focus on infatuation and parasocial dynamics in conversational AI systems. " +
  "My work builds metrics and safeguards to make AI models safer for emotionally " +
  "sensitive interactions, advancing AI for social good.";

const RESEARCH_FOCUS =
  "My research sits at the intersection of AI safety, alignment, and social impact. " +
  "I investigate how large language models develop and reinforce parasocial relationships " +
  "with users — particularly infatuation dynamics — and develop quantitative metrics to " +
  "detect and mitigate these behaviours. Broader interests include human-AI interaction, " +
  "affective computing, and responsible deployment of conversational AI in high-stakes domains.";

const RECENT_UPDATES = [
  { date: "Aug 2026", text: "Started PhD in Computer Science at NTU Singapore" },
  { date: "May 2026", text: "Completed BEng (Computer Science & Design) at SUTD — graduated with Honours" },
  { date: "Apr 2026", text: "DV8 autonomous cleaning robot deployed at Changi Airport Group" },
];

const PUBLICATIONS = [
  // {
  //   title: "Measuring Infatuation in Human-AI Dialogue",
  //   venue: "ACL 2027",
  //   authors: "Kwok Keith, ...",
  //   link: "https://arxiv.org/...",
  //   tag: "AI Safety",
  // },
];

const EDUCATION = [
  { year: "2018", label: "Singapore Polytechnic", sub: "Aerospace Engineering" },
  { year: "2021", label: "SUTD",                  sub: "Computer Science & Design" },
  { year: "2026", label: "NTU",                   sub: "PhD, Computer Science" },
];

const EXPERIENCE = [
  { period: "2023 – 2024", role: "Capstone Engineer",  org: "Changi Airport Group × SUTD", desc: "Built full navigation stack and AI litter-detection system for the DV8 autonomous cleaning robot." },
  { period: "2022",        role: "AR Software Intern", org: "Pratt & Whitney",              desc: "Developed immersive AR operation training for abrasive wheel machinery, saving 16 training hours per cohort." },
];

const AWARDS = [
  { year: "2023", text: "Roboclash — Winner, Engineering Award & Technology Award" },
  { year: "2023", text: "JTC Illuminate Darkness — Nominated for JTC Award" },
  { year: "2023", text: "MindfulHacks — Catalyst Story mental wellness RPG" },
  { year: "2022", text: "Roboclash — 2nd Runner Up & Lionsbot Most Innovative Robot Award" },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

function Home() {
  return (
    <main className="home-page">

      {/* ── HERO — full width, no TOC alongside ── */}
      <section className="hp-hero">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="hp-hero__photo-col">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={800}>
                <img src={myImg} alt="Kwok Keith" className="hp-hero__photo" />
              </Tilt>
            </Col>
            <Col md={8} className="hp-hero__bio-col">
              <h1 className="hp-hero__name">Kwok Keith</h1>
              <p className="hp-hero__title">PhD Student · NTU Singapore</p>
              <p className="hp-hero__summary">{RESEARCH_SUMMARY}</p>
              <div className="hp-hero__meta">
                <span className="hp-hero__location">
                  <HiLocationMarker /> Singapore
                </span>
              </div>
              <div className="hp-hero__links">
                <a href="mailto:keithkwok99@gmail.com" className="hp-hero__icon-link" aria-label="Email">
                  <FaEnvelope />
                </a>
                <a href="https://scholar.google.com" target="_blank" rel="noreferrer" className="hp-hero__icon-link" aria-label="Google Scholar">
                  <SiGooglescholar />
                </a>
                <a href="https://github.com/kwokkeith" target="_blank" rel="noreferrer" className="hp-hero__icon-link" aria-label="GitHub">
                  <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/kwokkeith/" target="_blank" rel="noreferrer" className="hp-hero__icon-link" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── ALL SECTIONS + TOC SIDEBAR ── */}
      <Container fluid="lg">
        <Row>

          {/* ── Main content column ── */}
          <Col lg={10} md={12}>

            {/* Research Focus + Recent Updates */}
            <section id="research-focus" className="hp-section">
              <Row>
                <Col md={7} className="hp-focus-col">
                  <h2 className="hp-section__heading">Research Focus</h2>
                  <p className="hp-section__body">{RESEARCH_FOCUS}</p>
                </Col>
                <Col md={5} className="hp-updates-col">
                  <h2 className="hp-section__heading">Recent Updates</h2>
                  <ul className="hp-updates">
                    {RECENT_UPDATES.map((u, i) => (
                      <li key={i} className="hp-updates__item">
                        <span className="hp-updates__date">{u.date}</span>
                        <span className="hp-updates__text">{u.text}</span>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </section>

            {/* Publications */}
            <section id="publications" className="hp-section">
              <h2 className="hp-section__heading">Publications</h2>
              {PUBLICATIONS.length === 0 ? (
                <p className="hp-section__body hp-section__body--muted">
                  TBA
                </p>
              ) : (
                <ul className="hp-pubs">
                  {PUBLICATIONS.map((p, i) => (
                    <li key={i} className="hp-pubs__item">
                      <span className="hp-pubs__tag">{p.tag}</span>
                      <a href={p.link} target="_blank" rel="noreferrer" className="hp-pubs__title">
                        {p.title}
                      </a>
                      <span className="hp-pubs__meta">{p.authors} · <em>{p.venue}</em></span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* Education */}
            <section id="education" className="hp-section hp-section--alt" style={{ paddingTop: "32px", paddingBottom: "32px" }}>
              <h2 className="hp-section__heading">Education</h2>
              <div className="hp-timeline">
                {EDUCATION.map((e, i) => (
                  <div key={i} className="hp-timeline__node">
                    <div className="hp-timeline__dot" />
                    {i < EDUCATION.length - 1 && <div className="hp-timeline__line" />}
                    <div className="hp-timeline__year">{e.year}</div>
                    <div className="hp-timeline__label">{e.label}</div>
                    <div className="hp-timeline__sub">{e.sub}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section id="experience" className="hp-section">
              <h2 className="hp-section__heading">Experience</h2>
              <ul className="hp-experience">
                {EXPERIENCE.map((e, i) => (
                  <li key={i} className="hp-experience__item">
                    <div className="hp-experience__period">{e.period}</div>
                    <div className="hp-experience__detail">
                      <span className="hp-experience__role">{e.role}</span>
                      <span className="hp-experience__org">{e.org}</span>
                      <p className="hp-experience__desc">{e.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Awards */}
            <section id="awards" className="hp-section hp-section--alt">
              <h2 className="hp-section__heading">Awards</h2>

              <ul className="hp-awards">
                {Object.entries(
                  AWARDS.reduce((acc, a) => {
                    acc[a.year] = acc[a.year] ? [...acc[a.year], a.text] : [a.text];
                    return acc;
                  }, {})
                )
                  .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
                  .map(([year, items]) => (
                    <li key={year} className="hp-awards__item">
                      <span className="hp-awards__year">{year}</span>

                      <ul className="hp-awards__group">
                        {items.map((text, i) => (
                          <li key={i} className="hp-awards__entry">
                            {text}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
              </ul>
            </section>

          </Col>

          {/* ── Sticky TOC sidebar ── */}
          <Col lg={2} className="d-none d-lg-block">
            <TableOfContents sections={SECTIONS} />
          </Col>

        </Row>
      </Container>

    </main>
  );
}

export default Home;