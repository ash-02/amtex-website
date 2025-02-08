// import React from "react";
// import amtexLogo from "../assets/amtex_logo.png";
// import { motion } from "framer-motion";
// import "./index.css";

// const index = () => {
//   const navLinks = [
//     { title: "About Us", path: "/" },
//     { title: "Solutions", path: "/about" },
//     { title: "Consulting", path: "/services" },
//     { title: "Careers / Jobs", path: "/contact" },
//   ];

//   return (
//     <>
//       <motion.div
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 1.25, ease: "easeInOut", delay: 2 }}
//         className="navbar-main"
//       >
//         <div className="navbar-main">
//           <ul className="navbar-list">
//             <div className="logo-container">
//               <img src={amtexLogo} alt="Amtex Logo" />
//             </div>
//             <ul className="nav-links">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <button>
//                     <a href={link.path}>{link.title}</a>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <div className="extra-buttons">
//               <a href="">
//                 <button className="contact-button">Contact Us</button>
//               </a>
//             </div>
//           </ul>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default index;

// import React, { useState, useEffect } from "react";
// import amtexLogo from "../assets/amtex_logo.png";
// import { motion } from "framer-motion";
// import "./index.css";

// const Navbar = () => {
//   const [isHidden, setIsHidden] = useState(false);
//   const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
//   const scrollThreshold = 20; // Adjust this value to control hiding sensitivity

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       const isScrolledDown = currentScrollPos > prevScrollPos + scrollThreshold;

//       if (isScrolledDown) {
//         setIsHidden(true);
//       } else if (currentScrollPos < prevScrollPos) {
//         setIsHidden(false);
//       }

//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos]);

//   const navLinks = [
//     { title: "About Us", path: "/" },
//     { title: "Solutions", path: "/about" },
//     { title: "Consulting", path: "/services" },
//     { title: "Careers / Jobs", path: "/contact" },
//   ];

//   return (
//     <motion.div
//       initial={{ y: -150 }}
//       animate={{ y: isHidden ? -150 : 0 }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className="navbar-main"
//     >
//       <div className="navbar-content">
//         <ul className="navbar-list">
//           <div className="logo-container">
//             <img src={amtexLogo} alt="Amtex Logo" />
//           </div>
//           <ul className="nav-links">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <button>
//                   <a href={link.path}>{link.title}</a>
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="extra-buttons">
//             <a href="">
//               <button className="contact-button">Contact Us</button>
//             </a>
//           </div>
//         </ul>
//       </div>
//     </motion.div>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import amtexLogo from "../assets/amtex_logo.png";
// import { motion } from "framer-motion";
// import "./index.css";

// const Navbar = () => {
//   const [isHidden, setIsHidden] = useState(false);
//   const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // New state to control menu visibility

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       setIsHidden(currentScrollPos > prevScrollPos + 20);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos]);

//   const navLinks = [
//     { title: "About Us", path: "/" },
//     { title: "Solutions", path: "/about" },
//     { title: "Consulting", path: "/services" },
//     { title: "Careers / Jobs", path: "/contact" },
//   ];

//   return (
//     <motion.div
//       initial={{ y: -150 }}
//       animate={{ y: isHidden ? -150 : 0 }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className="navbar-main"
//     >
//       <div className="navbar-content">
//         <ul className="navbar-list">
//           <div className="logo-container">
//             <img src={amtexLogo} alt="Amtex Logo" />
//           </div>

//           {/* Hamburger Menu for Mobile */}
//           {isMobile && (
//             <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               ☰
//             </button>
//           )}

//           <ul className={`nav-links ${isMobile ? (isMenuOpen ? "mobile-nav open" : "mobile-nav") : ""}`}>
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <button onClick={() => setIsMenuOpen(false)}> {/* Close menu on click */}
//                   <a href={link.path}>{link.title}</a>
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="extra-buttons">
//             <a href="">
//               <button className="contact-button">Contact Us</button>
//             </a>
//           </div>
//         </ul>
//       </div>
//     </motion.div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import amtexLogo from "../assets/amtex_logo.png";
import "./index.css";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHidden(currentScrollPos > prevScrollPos + 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    { title: "About Us", path: "/" },
    { title: "Solutions", path: "/about" },
    { title: "Consulting", path: "/services" },
    { title: "Careers / Jobs", path: "/contact" },
  ];

  return (
    <motion.div
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut", delay: 2 }}
        className="navbar-main"
      >
      <div className="navbar-main">
        <div className="navbar-content">
          <ul className="navbar-list">
            <div className="logo-container">
              <img src={amtexLogo} alt="Amtex Logo" />
            </div>

            {isMobile && (
              <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
              </button>
            )}

            <ul className={`nav-links ${isMobile ? (isMenuOpen ? "mobile-nav open" : "mobile-nav") : ""}`}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button onClick={() => setIsMenuOpen(false)}>
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
      </div>
    </motion.div>
  );
};

export default Navbar;
