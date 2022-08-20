import React from "react";
import { medias } from "../data";
import { AiFillGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

export default function Media() {
  const renderIcon = (name) => {
    switch (name) {
      case "LinkedIn":
        return <AiOutlineLinkedin className="media-icon" />;
      case "GitHub":
        return <AiFillGithub className="media-icon" />;
      case "Twitter":
        return <AiOutlineTwitter className="media-icon" />;
      default:
        <div />;
    }
  };

  return (
    <div>
      <ul className="media-link-list">
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
