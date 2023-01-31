import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/ChrisJRamirez" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/christopher-j-ramirez/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/ChrisJMRamirez" target="_blank">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
