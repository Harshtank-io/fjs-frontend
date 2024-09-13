import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="my-5">
      <footer className="py-4 text-white bg-black rounded">
        <div className="container w-full px-4 mx-auto">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <Link to="/">
              <div className="p-2 bg-yellow-500 rounded">
                <span className="text-xl font-bold text-black">FJS</span>
              </div>
            </Link>
            <nav className="flex flex-wrap justify-center space-x-6 sm:justify-end">
              <a href="#product" className="hover:text-blue-500">
                Product
              </a>
              <a href="#features" className="hover:text-blue-500">
                Features
              </a>
              <a href="#pricing" className="hover:text-blue-500">
                Pricing
              </a>
              <a href="#resources" className="hover:text-blue-500">
                Resources
              </a>
            </nav>
            <div className="flex mt-4 space-x-4 sm:mt-0">
              <a href="#twitter" className="hover:text-yellow-300">
                <FaTwitter size={24} />
              </a>
              <a href="#instagram" className="hover:text-yellow-300">
                <FaInstagram size={24} />
              </a>
              <a href="#github" className="hover:text-yellow-300">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="mt-6 text-sm text-center ">
            © Copyright 2024, All Rights Reserved by FJS
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
