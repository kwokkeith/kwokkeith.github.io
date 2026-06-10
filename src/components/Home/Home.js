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

const RESEARCH_SUMMARY = () => (
  <>
    Hi! I am a PhD student at Nanyang Technological University of Singapore working on{" "}
    <span className="highlight">AI safety</span> and{" "}
    <span className="highlight">alignment</span>, building safer and more honest AI systems
    that resist harmful social dynamics such as{" "}
    <span className="highlight">sycophancy</span>,{" "}
    <span className="highlight">emotional manipulation</span>, and{" "}
    <span className="highlight">parasocial attachment</span>.
  </>
);

const RESEARCH_FOCUS = () => (
  <>
    My research centres on{" "}
    <span className="highlight">infatuation</span> and{" "}
    <span className="highlight">parasocial dynamics</span> in conversational AI systems.
    I investigate how large language models reinforce unhealthy emotional attachment in users
    and develop quantitative metrics to detect and mitigate these behaviours. Beyond infatuation,
    I also explore related alignment problems such as{" "}
    <span className="highlight">sycophancy</span>, where models learn to prioritise user
    approval over honesty. Broader interests include{" "}
    <span className="highlight">human-AI interaction</span>,{" "}
    <span className="highlight">affective computing</span>, and the responsible deployment
    of conversational AI in emotionally sensitive contexts.
  </>
);

const RECENT_UPDATES = [
  { date: "Aug 2026", text: "Started PhD in Computer Science at NTU S'pore" },
  { date: "May 2025", text: "Graduated with Honours - BEng Computer Science at SUTD" },
  { date: "Apr 2025", text: "DV8 autonomous cleaning robot deployed at Changi Airport Group" },
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
  { year: "2019", label: "SP",                sub: "Aerospace Engineering" },
  { year: "2021", label: "SUTD",              sub: "BEng, Computer Science & Design" },
  { year: "2026", label: "NTU S'pore",        sub: "PhD, Computer Science" },
];

const EXPERIENCE = [
  { period: "2025 - 2026",        
    role: "Research Assistant", 
    org: "DeCLaRe Lab",              
    desc: "Researching emotional attachment risks in human and AI conversations by developing behavioural metrics and language model based analysis methods for detecting infatuation related interaction patterns."
  },
  { period: "2023 - 2024",
    role: "Undergraduate Research Assistant",
    org: "Singapore University of Technology and Design",
    desc: "Researched how students query and interact with LLMs across SUTD courses, characterising learning behaviours and LLM usage patterns. Developed a semantic kernel to specialise GPT response behaviours for educational contexts."
  },
];

const AWARDS = [
  { year: "2025", name: "IMDA Outstanding Student Award",          desc: "Top graduating student, Computer Science & Design, SUTD",               tag: "Academic"     },
  { year: "2025", name: "Institution of Engineers Singapore Gold Medal", desc: "Top student of graduating cohort, SUTD",                           tag: "Academic"     },
  { year: "2025", name: "SUTD Global Distinguished Scholarship",   desc: "Top scholarship for high-performing students",                           tag: "Scholarship"  },
  { year: "2024", name: "SUTD Senior Honours List",                desc: "Top 10% of cohort",                                                      tag: "Academic"     },
  { year: "2023", name: "SUTD Junior Honours List",                desc: "Top 10% of cohort",                                                      tag: "Academic"     },
  { year: "2023", name: "Roboclash",                               desc: "Winner, Engineering Award & Technology Award",                           tag: "Competition"  },
  { year: "2023", name: "MindfulHacks",                            desc: "Catalyst Story mental wellness RPG",                                     tag: "Competition"  },
  { year: "2022", name: "Roboclash",                               desc: "2nd Runner Up & Lionsbot Most Innovative Robot Award",                   tag: "Competition"  },
  { year: "2021", name: "Lee Kuan Yew STEP Award",                 desc: "Ministry of Education, recognising outstanding polytechnic graduates",   tag: "Scholarship"  },
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
                <img src={myImg} alt="Keith Kwok" className="hp-hero__photo" />
              </Tilt>
            </Col>
            <Col md={8} className="hp-hero__bio-col">
              <h1 className="hp-hero__name">Keith Kwok</h1>
              <p className="hp-hero__title">PhD Student · NTU Singapore</p>
              <p className="hp-hero__summary"><RESEARCH_SUMMARY /></p>
              <div className="hp-hero__meta">
                <span className="hp-hero__location">
                  <HiLocationMarker /> Singapore
                </span>
              </div>
              <div className="hp-hero__links">
                <a href="mailto:keithkwok99@gmail.com" className="hp-hero__icon-link" aria-label="Email">
                  <FaEnvelope />
                </a>
                <a href="https://scholar.google.com/citations?user=sWWi37YAAAAJ" target="_blank" rel="noreferrer" className="hp-hero__icon-link" aria-label="Google Scholar">
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
                  <p className="hp-section__body"><RESEARCH_FOCUS /></p>
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
              <h2 className="hp-section__heading">Selected Publications</h2>
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
            <section id="awards" className="hp-section hp-section--alt" style={{ paddingTop: "32px", paddingBottom: "32px" }}>
              <h2 className="hp-section__heading">Awards</h2>
              <ul className="hp-awards">
                {Object.entries(
                  AWARDS.reduce((acc, a) => {
                    acc[a.year] = acc[a.year] ? [...acc[a.year], a] : [a];
                    return acc;
                  }, {})
                )
                  .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
                  .map(([year, items]) => (
                    <li key={year} className="hp-awards__item">
                      <span className="hp-awards__year">{year}</span>
                      <ul className="hp-awards__group">
                        {items.map((a, i) => (
                          <li key={i} className="hp-awards__entry">
                            <span className={`hp-awards__tag hp-awards__tag--${a.tag.toLowerCase()}`}>{a.tag}</span>
                            <div className="hp-awards__content">
                              <span className="hp-awards__name">{a.name}</span>
                              <span className="hp-awards__desc">{a.desc}</span>
                            </div>
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