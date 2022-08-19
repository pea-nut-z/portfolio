import { useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import * as data from "./data";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOpenInNew } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="content">
        <section id="About" className="about">
          <title>About Me</title>
          <div className="about-text">
            <p className="greet">
              <span className="hello">Hello 👋 </span>, welcome to{" "}
              <span className="name">Pauline</span>
              's portfolio.
            </p>
            <p>
              I am a resilient and resourceful self-starter looking to break into the tech world. I
              made a smooth transition from office administration to building my own business as an
              Esthetician, and I will do that again with tech.
            </p>
          </div>
          <div className="about-image">
            <img className="headshot" src="headshot.jpg" decoding="async" alt="Headshot" />
          </div>
        </section>

        <section id="Stack" className="stack">
          <div className="stack-card stack-current">
            <h1>My Stack</h1>
            <ul className="list-card my-stack-list">
              {data.stack.map((stack) => {
                return <li key={stack}>{stack}</li>;
              })}
            </ul>
          </div>

          <div className="stack-card stack-explore">
            <h2>Exploring</h2>
            <ul className="list-card">
              {data.explore.map((stack) => {
                return <li key={stack}>{stack}</li>;
              })}
            </ul>
          </div>
        </section>

        <section id="Portfolio" className="portfolio">
          <h1>Portfolio</h1>
          <p>To learn more, please check out the GitHub Readme of each project.</p>
          <ul>
            {data.portfolio.map((proj) => {
              return (
                <li key={proj.title} className="project">
                  <img className="project-image" src={proj.image} alt="Application Screenshot" />
                  <div className="project-content">
                    <header>
                      <div className="project-top">
                        <h3 className="project-title">{proj.title}</h3>

                        <div className="project-links">
                          <a
                            className="project-link-icon"
                            href={proj.demo}
                            aria-label="Demo Link"
                            target="_blank"
                          >
                            <title>Demo Link</title>
                            <RiVideoLine size={25} />
                          </a>
                          <a
                            className="project-link-icon"
                            href={proj.github}
                            aria-label="Github Link"
                            target="_blank"
                          >
                            <title>Github</title>
                            <VscGithubAlt size={25} />
                          </a>
                          <a
                            className="project-link-icon"
                            href={proj.app}
                            aria-label="App Link"
                            target="_blank"
                          >
                            <title>App Link</title>
                            <MdOpenInNew size={25} />
                          </a>
                        </div>
                      </div>
                      <div className="project-description">{proj.desc}</div>
                      {proj.title === "Connect Four" && data.renderLoginInfo()}
                    </header>
                    <footer>
                      <ul className="project-stack-list">
                        {proj.stack.map((stack) => {
                          return (
                            <li key={`${proj.title}-${proj.stack}`} className="project-stack-item">
                              {stack}
                            </li>
                          );
                        })}
                      </ul>
                    </footer>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section id="Contact" className="contact">
          <h1>Get In Touch</h1>
          <p>Job oppotunities or anything about code, if you're interested to talk then I am too!</p>
          <a
            className="contact-button"
            href="mailto:topaulinez20@gmail.com"
            aria-label="Email Me"
            target="_blank"
          >
            Email Me
          </a>
        </section>
      </div>
    </div>
  );
}

export default App;
