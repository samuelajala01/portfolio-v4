import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaRocket } from "react-icons/fa";

const ContactBox = () => {
  return (
    <div className="ml-[5vw] w-fit mb-16 sm:mb-0 left-[5vw] p-4 bg-black bg-opacity-[0.5] rounded-sm flex space-x-4">
      <a
        href="https://www.twitter.com/cy63rx_"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter className="text-blue-600" size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/samuelajala01"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-blue-700" size={32} />
      </a>
      <a
        href="https://www.github.com/samuelajala01"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="text-white-800" size={32} />
      </a>
    </div>
  );
};

export default ContactBox;
