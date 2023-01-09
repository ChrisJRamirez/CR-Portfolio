import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/ChrisJRamirez">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/christopher-j-ramirez/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/ChrisJMRamirez">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
