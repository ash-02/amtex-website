import React from "react";
import amtexLogo from "../assets/amtex_logo.png";
import { motion } from "framer-motion";
import "./index.css";

const index = () => {
  const navLinks = [
    { title: "About Us", path: "/" },
    { title: "Solutions", path: "/about" },
    { title: "Consulting", path: "/services" },
    { title: "Careers / Jobs", path: "/contact" },
  ];

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut", delay: 2 }}
        className="navbar-main"
      >
        <div className="navbar-main">
          <ul className="navbar-list">
            <div className="logo-container">
              <img src={amtexLogo} alt="Amtex Logo" />
            </div>
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button>
                    <a href={link.path}>{link.title}</a>
                  </button>
                </li>
              ))}
            </ul>
            <div className="extra-buttons">
              <a href="">
                <button className="contact-button">Contact Us</button>
              </a>
            </div>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default index;
