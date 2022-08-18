import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import * as data from "./const";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOpenInNew } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>

      <section className="about">
        <title>About Me</title>
        <p>
          Hello 👋, you're at <span>Pauline</span>'s portfolio.
        </p>
        <p>
          I am a resilient and resourceful self-starter looking to break into the tech world. I made
          a smooth transition from office administration to building my own business as an
          Esthetician, and I will do that again with tech.
        </p>
      </section>

      <section className="stack">
        <h1>My Stack</h1>
        <ul>
          {data.stack.map((stack) => {
            return <li key={stack}>{stack}</li>;
          })}
        </ul>

        <h2>Exploring</h2>
        <ul>
          {data.explore.map((stack) => {
            return <li key={stack}>{stack}</li>;
          })}
        </ul>
      </section>

      <section className="portfolio">
        <h1>Portfolio</h1>
        <p>To learn more, please check out the GitHub Readme of that project.</p>
        <ul>
          {data.portfolio.map((proj) => {
            return (
              <li key={proj.title}>
                <header>
                  <div className="project-top">
                    <div className="project-links">
                      <a href={proj.demo} aria-label="Demo Link" target="_blank">
                        <title>Demo Link</title>
                        <RiVideoLine />
                      </a>
                      <a href={proj.github} aria-label="Github Link" target="_blank">
                        <title>Github</title>
                        <VscGithubAlt />
                      </a>
                      <a href={proj.app} aria-label="App Link" target="_blank">
                        <title>App Link</title>
                        <MdOpenInNew />
                      </a>
                    </div>
                  </div>
                  <h3 className="project-title">{proj.title}</h3>
                  <div className="project-description">{proj.desc}</div>
                </header>
                <footer>
                  <ul className="project-stack-list">
                    {proj.stack.map((stack) => {
                      return <li key={`${proj.title}-${proj.stack}`}>{stack}</li>;
                    })}
                  </ul>
                </footer>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="contact">
        <h1>Get In Touch</h1>
        <p>Job oppotunities or anything about code, if you're interested to talk then I am too!</p>
        <a href="mailto:topaulinez20@gmail.com" aria-label="Email Me" target="_blank">
          Say Hello
        </a>
      </section>
    </div>
  );
}

export default App;
