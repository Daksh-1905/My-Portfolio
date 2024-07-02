import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Links = () => {
  return (
    <>
      <div className="container links-box">
        <a
          href="https://leetcode.com/u/dakshjain1905/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode size="25px" />
        </a>

        <a
          href="https://www.linkedin.com/in/daksh-jain-9b278a2a7/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size="25px" />
        </a>

        <a
          href="https://github.com/Daksh-1905"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size="25px" />
        </a>

        <a
          href="mailto:dakshjain1905@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MdEmail size="25px" />
        </a>
      </div>
    </>
  );
};

export default Links;
