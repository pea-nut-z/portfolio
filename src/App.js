import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Media from "./components/Media";
import SideNav from "./components/SideNav";
import * as data from "./data";
import { VscGithubAlt, VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { MdOpenInNew, MdOutlineVideoLibrary } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

function App() {
  const [smallScreen, setSmallScreen] = useState(false);
  const [showImgMsg, setShowImgMsg] = useState(false);

  useEffect(() => {
    const { innerWidth } = window;
    if (innerWidth <= 540) {
      setSmallScreen(true);
      setShowImgMsg(true);
      window.addEventListener("scroll", closeSideNav);
    }

    return () => {
      window.removeEventListener("scroll", closeSideNav);
    };
  }, []);

  const openSideNav = () => {
    document.getElementById("side-nav").classList.add("active");
  };

  const closeSideNav = () => {
    document.getElementById("side-nav").classList.remove("active");
  };

  return (
    <div className="App">
      <div className="background"></div>
      <header className="App-header">
        <div className="top-nav">
          <Nav />
        </div>
        <div className="menu-bar">
          <button className="menu-button" type="button" onClick={openSideNav}>
            <IoMdMenu />
          </button>
        </div>
        {smallScreen && <SideNav />}
      </header>
      <div className="side-links">
        <Media />
      </div>
      <p className="corner-name">PAULINE ZHANG</p>
      <div className="content" onClick={() => smallScreen && closeSideNav()}>
        <section id="About" className="about">
          <title>About Me</title>
          <div className="about-content">
            <p className="greet">
              <span className="hello">Hello </span>
              <img className="hand" src="hand.png" alt="Hand Emoji" />, welcome to{" "}
              <span className="name">Pauline</span>
              's portfolio.
            </p>
            <p>{data.aboutMe1}</p>
            <p>{data.aboutMe2}</p>
            <p>{data.aboutMe3}</p>
            <p>{data.aboutMe4}</p>
          </div>
          <div className="about-image">
            <img
              className="tape"
              src="https://www.freeiconspng.com/uploads/tape-png-0.png"
              alt="Tape Png Available In Different Size"
            />
            <img className="headshot" src="headshot.jpg" decoding="async" alt="Headshot" />
          </div>
        </section>

        <section id="Stack" className="stack">
          <div className="stack-card stack-current">
            <img className="star star-top" src="/star.png" alt="Star" />
            <img className="star star-bottom" src="/star.png" alt="Star" />
            <img className="star star-right" src="/star.png" alt="Star" />
            <h1>My Stack</h1>
            <ul className="list-card my-stack-list">
              {data.stack.map((stack) => {
                return <li key={stack}>{stack}</li>;
              })}
            </ul>
          </div>

          <div className="stack-card stack-explore">
            <img className="astronaut" src="/earth.png" alt="Astronaut" />
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
          <p>
            Click on the icons in the top right corner of each project to get to its
            <span className="hilight"> demo, code and app</span>. To learn more, check out its GitHub
            Readme.
          </p>
          {showImgMsg && (
            <div>
              <p className="project-image-message">Click to see image</p>
              <div className="arrow-wrapper">
                <div className="arrow" />
              </div>
            </div>
          )}
          <ul>
            {data.portfolio.map((proj, index) => {
              const imgs = document.getElementsByClassName("project-image");
              const links = document.getElementsByClassName("project-links");
              const currentImg = imgs[index];
              const currentLink = links[index];

              return (
                <li key={proj.title} className="project">
                  <img
                    onClick={() => {
                      if (smallScreen) {
                        if (showImgMsg) setShowImgMsg(false);
                        if (currentImg.classList.contains("show-image")) {
                          window.open(proj.app, "_blank");
                        }
                        currentImg.classList.add("show-image");
                        currentLink.classList.add("disable-links");
                      } else {
                        window.open(proj.app, "_blank");
                      }
                    }}
                    className="project-image"
                    src={proj.image}
                    alt="Application Screenshot"
                  />
                  <div
                    onClick={() => {
                      if (smallScreen) {
                        currentImg.classList.remove("show-image");
                        currentLink.classList.remove("disable-links");
                      }
                    }}
                    className="project-content"
                  >
                    <header>
                      <div className="project-top">
                        <h3 className="project-title">{proj.title}</h3>
                        <div className="project-links">
                          <a
                            className="project-link"
                            href={proj.demo}
                            aria-label="Demo Link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <title>Demo Link</title>
                            <MdOutlineVideoLibrary className="project-link-icon" />
                          </a>
                          <a
                            className="project-link"
                            href={proj.github}
                            aria-label="Github Link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <title>Github Link</title>
                            <VscGithubAlt className="project-link-icon" />
                          </a>
                          <a
                            className="project-link"
                            href={proj.app}
                            aria-label="App Link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <title>App Link</title>
                            <MdOpenInNew className="project-link-icon" />
                          </a>
                        </div>
                      </div>
                      <div className="project-description">{proj.desc}</div>
                    </header>
                    <footer>
                      <ul className="project-stack-list">
                        {proj.stack.map((stack) => {
                          return (
                            <li key={`${proj.title}-${stack}`} className="project-stack-item">
                              <VscDebugBreakpointLogUnverified className="bullet-point" /> {stack}
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
          <h1>Say Hello!</h1>
          <p>{data.contactMsg}</p>
          <a
            className="email-me-button box-button"
            href="mailto:topaulinez20@gmail.com"
            aria-label="Email Me"
            target="_blank"
            rel="noreferrer"
          >
            Email Me
          </a>
        </section>
      </div>
    </div>
  );
}

export default App;
