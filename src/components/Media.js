import React from "react";
import { medias } from "../data";
import { AiFillGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

export default function Media() {
  const renderIcon = (name) => {
    switch (name) {
      case "LinkedIn":
        return <AiOutlineLinkedin size={25} />;
      case "GitHub":
        return <AiFillGithub size={25} />;
      case "Twitter":
        return <AiOutlineTwitter size={25} />;
      default:
        <div />;
    }
  };

  return (
    <div className="side-links">
      <ul>
        {medias.map((media) => {
          const { name, link } = media;
          return (
            <li key={name}>
              <a href={link} aria-label={name} target="_blank">
                <title>{name}</title>
                {renderIcon(name)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
