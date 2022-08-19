import React from "react";
import { navOptions } from "../data";

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
              <a href={`#${option}`}>{option}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
