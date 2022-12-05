import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";

import { GrLinkedin } from "react-icons/gr";
const socialLinks = [
  { icon: GrLinkedin, link: "https://www.linkedin.com/in/shivshankar0965/" },
  { icon: BsGithub, link: "https://github.com/shivshankar0965" },
  { icon: BsTwitter, link: "https://twitter.com/shivshankar263" },
];
const SocailMedia = () => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="app__social">
      {socialLinks.map((ico, i) => {
        const Icon = ico.icon;
        return (
          <div onClick={() => handleClick(ico.link)} key={i}>
            <Icon />
          </div>
        );
      })}
    </div>
  );
};

export default SocailMedia;
