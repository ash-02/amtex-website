// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import amtexLogo from "../assets/amtex_logo.png";
// import "./index.css";

// const Navbar = () => {

//   const [ifCurrentPageHome, setIfCurrentPageHome] = useState(false);

//   const [isHidden, setIsHidden] = useState(false);
//   const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

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
//     { title: "About Us", path: "/aboutus" },
//     { title: "Solutions", path: "/solutions" },
//     { title: "Consulting", path: "/services" },
//     { title: "Careers / Jobs", path: "/contact" },
//   ];

//   return (
//     <motion.div
//         initial={{ y: -150 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 1.25, ease: "easeInOut", delay: 2 }
//     }
//         className="navbar-main"
//       >
//       <div className="navbar-main">
//         <div className="navbar-content">
//           <ul className="navbar-list">

//             <motion.div
//               initial={{ y: 25, opacity: 0 }}
//               animate={{ y: isHidden ? isMobile ? 0 : -150 : 0, opacity: 1 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="logo-container"
//             >
//               <img src={amtexLogo} alt="Amtex Logo" />
//             </motion.div>

//             {isMobile && (
//               <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                 ☰
//               </button>
//             )}

//             <ul className={`nav-links ${isMobile ? (isMenuOpen ? "mobile-nav open" : "mobile-nav") : ""}`}>
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <button onClick={() => setIsMenuOpen(false)}>
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
//       </div>
//     </motion.div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import amtexLogo from "../assets/amtex_logo.png";
import "./index.css";
import { path } from "framer-motion/client";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

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

  const toggleDropdown = () => {
    setIsSolutionsOpen((prev) => !prev);
  };

  const navLinks = [
    { title: "About Us", path: "/aboutus" },
    {
      title: "Solutions",
      path: "#",
      dropdown: [
        { title: "Big Data Development & Solutions", 
          path: "/solutions/big-data-development-solutions"
        },
        { title: "Database Architecture",
          path: "/solutions/database-architecture"
        },
        { title: "Data Warehouse",
          path: "/solutions/data-warehouse"
        },
        { title: "Data Migration & Integration", 
          path: "/solutions/data-migration-integration"
        },
        { title: "Data Science & Services",
          path: "/solutions/data-science-services"
        },
        { title: "Data Analytics & Visualizations",
          path: "/solutions/data-analytics-visualizations"
        },
        { title: "End to End Automation",
          path: "/solutions/end-to-end-automation"
        },
      ]
    },
    { title: "Consulting", path: "/services" },
    { title: "Careers / Jobs", path: "/contact" }
  ];

  return (
    <motion.div
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.25, ease: "easeInOut", delay: 2 }}
      className={`navbar-main ${isMobile ? "h-auto" : ""}`}
    >
      <div className="navbar-main">
        <div className="navbar-content">
          <ul className={`navbar-list ${isMobile ? "flex flex-row" : ""}`}>
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: isHidden ? (isMobile ? 0 : -150) : 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="logo-container"
            >
              <img src={amtexLogo} alt="Amtex Logo" />
            </motion.div>

            {isMobile && (
              <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
              </button>
            )}

            <ul className={`nav-links ${isMobile ? (isMenuOpen ? "mobile-nav open" : "mobile-nav") : ""}`}>
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`nav-item relative ${isMobile ? "w-full" : ""}`}
                >
                  {link.dropdown ? (
                    <div className="dropdown-container relative w-full">
                      <button className="dropdown-button" onClick={toggleDropdown}>
                        {link.title} ▼
                      </button>
                      {isSolutionsOpen && (
                        // <div className={
                        //   `dropdown-menu bg-gray-800 text-white rounded-lg shadow-lg mt-2 ${
                        //     isMobile ? "relative w-full p-4" : "absolute top-full left-0 p-3 z-50"
                        //   }`
                        // }>
                        //   {link.dropdown.map((item, subIndex) => (
                        //     <div key={subIndex} className="dropdown-item p-3 hover:bg-gray-700 rounded text-lg">
                        //       <a href={item.path}>{item.title}</a>
                        //     </div>
                        //   ))}
                        // </div>
                        // <div className={
                        //   `dropdown-menu bg-gray-800 text-white rounded-lg shadow-lg mt-2 mx-auto text-center ${
                        //     isMobile ? "relative w-[90%] p-4 flex flex-col items-center" : "absolute top-full left-1/2 transform -translate-x-1/2 p-3 z-50"
                        //   }`
                        // }>
                        //   {link.dropdown.map((item, subIndex) => (
                        //     <div key={subIndex} className="dropdown-item p-3 hover:bg-gray-700 rounded text-lg w-full">
                        //       <a href={item.path}>{item.title}</a>
                        //     </div>
                        //   ))}
                        // </div>
                        <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: isSolutionsOpen ? 1 : 0, y: isSolutionsOpen ? 0 : -10 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={
                          `dropdown-menu bg-gray-800 text-white rounded-lg shadow-lg mt-2 mx-auto text-center ${
                            isMobile ? "relative w-[90%] p-4 flex flex-col items-center" : "absolute top-full left-1/2 transform -translate-x-1/2 p-3 z-50"
                          }`
                        }
                      >
                        {link.dropdown.map((item, subIndex) => (
                          <div key={subIndex} className="dropdown-item p-3 hover:bg-gray-700 rounded text-lg w-full">
                            <a href={item.path}>{item.title}</a>
                          </div>
                        ))}
                      </motion.div>
                      )}
                    </div>
                  ) : (
                    <a href={link.path}>{link.title}</a>
                  )}
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