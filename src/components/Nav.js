import React from "react";
import { navOptions, resumeLink } from "../data";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-container">
        {navOptions.map((option) => {
          const isResume = option === "Resume";
          return (
            <li key={option} className={`nav-option ${isResume ? "box-button" : "text-button"}`}>
              <a
                className="nav-link"
                href={`${isResume ? resumeLink : `#${option}`}`}
                target={`${isResume ? "_blank" : ""}`}
              >
                {option}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
