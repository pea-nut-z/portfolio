import React from "react";
import { navOptions, resumeLink } from "../data";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-container">
        {navOptions.map((option) => {
          return (
            <li
              key={option}
              className={`nav-option ${option === "Resume" ? "resume-button" : "nav-option-button"}`}
            >
              <a href={`${option === "Resume" ? resumeLink : `#${option}`}`} target="_blank">
                {option}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
