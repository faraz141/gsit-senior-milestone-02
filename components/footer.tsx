import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Branding / Copyright */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold">Faraz</h1>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/faraz141"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub className="text-yellow-400 text-3xl hover:text-yellow-600 transition duration-700 hover:scale-125" />
          </a>
          <a
            href="https://github.com/faraz141"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin className="text-yellow-400 text-3xl hover:text-yellow-600 transition duration-700 hover:scale-125" />
          </a>
          <a
            href="mailto:alamfaraz141@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope className="text-yellow-400 text-3xl hover:text-yellow-600 transition duration-700 hover:scale-125" />
          </a>
        </div>

        {/* Right: Quick Note (Optional) */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>Crafted with ❤️ using Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
