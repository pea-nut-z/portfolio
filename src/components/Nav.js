import React from "react";
import { navOptions } from "../const";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-container">
        {navOptions.map((option) => {
          return (
            <li key={option} className="nav-option">
              <a href="#">{option}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
