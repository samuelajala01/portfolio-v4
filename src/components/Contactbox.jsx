import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaRocket } from 'react-icons/fa';

const ContactBox = () => {
    return (
        <div className="fixed bottom-12 left-24 z-50 p-4 border-2 border-blue-600 rounded-sm flex space-x-4">
            <a href="https://www.twitter.com/samuelajala01" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-blue-400 hover:text-blue-600" size={32} />
            </a>
            <a href="https://www.linkedin.com/in/samuelajala01" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-blue-700 hover:text-blue-900" size={32} />
            </a>
            <a href="https://www.github.com/samuelajala01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="text-gray-800 hover:text-gray-900" size={32} />
            </a>
            
        </div>
    );
};

export default ContactBox;