// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import amtexLogo from "../assets/amtex_logo.png";
// import "./index.css";
// import { path } from "framer-motion/client";

// const Navbar = () => {
//   const [isHidden, setIsHidden] = useState(false);
//   const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

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

//   const toggleDropdown = () => {
//     setIsSolutionsOpen((prev) => !prev);
//   };

//   const navLinks = [
//     { title: "About Us",
//       path: "#",
//       dropdown: [
//         { title: "Our Company",
//           path: "/aboutus"
//         },
//         { title: "Letter from the President",
//           path: "/aboutus/letter"
//         }
//       ]
//     },
//     {
//       title: "Solutions",
//       path: "#",
//       dropdown: [
//         { title: "Big Data Development & Solutions",
//           path: "/solutions/big-data-development-&-solutions"
//         },
//         { title: "Database Architecture",
//           path: "/solutions/database-architecture"
//         },
//         { title: "Data Warehouse",
//           path: "/solutions/data-warehouse"
//         },
//         { title: "Data Migration & Integration",
//           path: "/solutions/data-migration-&-integration"
//         },
//         { title: "Data Science & Services",
//           path: "/solutions/data-science-&-services"
//         },
//         { title: "Data Analytics & Visualizations",
//           path: "/solutions/data-analytics-&-visualizations"
//         },
//         { title: "End to End Automation",
//           path: "/solutions/end-to-end-automation"
//         },
//       ]
//     },
//     { title: "Consulting", path: "/services" },
//     { title: "Careers / Jobs", path: "/contact" }
//   ];

//   return (
//     <motion.div
//       initial={{ y: -150 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 1.25, ease: "easeInOut", delay: 2 }}
//       className={`navbar-main ${isMobile ? "h-auto" : ""}`}
//     >
//       <div className="navbar-main">
//         <div className="navbar-content">
//           <ul className={`navbar-list ${isMobile ? "flex flex-row" : ""}`}>
//             <motion.div
//               initial={{ y: 25, opacity: 0 }}
//               animate={{ y: isHidden ? (isMobile ? 0 : -150) : 0, opacity: 1 }}
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

//             {/* <ul className={`nav-links ${isMobile ? (isMenuOpen ? "mobile-nav open" : "mobile-nav") : ""}`}> */}
//             <motion.ul
//               initial={{ opacity: isMobile ? (isMenuOpen ? 1 : 0) : 1 , y: -10 }}
//               animate={{ opacity: isMobile ? (isMenuOpen ? 1 : 0) : 1, y: isMobile ? (isMenuOpen ? 0 : -10) : 0 }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               className={`nav-links ${isMobile ? (isMenuOpen ? "mobile-nav open" : "mobile-nav") : ""}`}
//             >
//               {navLinks.map((link, index) => (
//                 <li
//                   key={index}
//                   className={`nav-item relative ${isMobile ? "w-full" : ""}`}
//                 >
//                   {link.dropdown ? (
//                     <div className="dropdown-container relative w-full">
//                       <button className="dropdown-button" onClick={toggleDropdown}>
//                         {link.title} ▼
//                       </button>
//                       {isSolutionsOpen && (
//                         <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: isSolutionsOpen ? 1 : 0, y: isSolutionsOpen ? 0 : -10 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                         className={
//                           `dropdown-menu bg-gray-800 text-white rounded-lg shadow-lg mt-2 mx-auto text-center ${
//                             isMobile ? "relative w-[90%] p-4 flex flex-col items-center" : "absolute top-full left-1/2 transform -translate-x-1/2 p-3 z-50"
//                           }`
//                         }
//                       >
//                         {link.dropdown.map((item, subIndex) => (
//                           <div key={subIndex} className="dropdown-item p-3 hover:bg-gray-700 rounded text-lg w-full">
//                             <a href={item.path}>{item.title}</a>
//                           </div>
//                         ))}
//                       </motion.div>
//                       )}
//                     </div>
//                   ) : (
//                     <a href={link.path}>{link.title}</a>
//                   )}
//                 </li>
//               ))}
//             {/* </ul> */}
//             </motion.ul>

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
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

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

  const toggleDropdown = (dropdown) => {
    if (dropdown === "solutions") {
      setIsSolutionsOpen((prev) => !prev);
      setIsAboutUsOpen(false);
    } else if (dropdown === "aboutus") {
      setIsAboutUsOpen((prev) => !prev);
      setIsSolutionsOpen(false);
    }
  };

  const navLinks = [
    {
      title: "About Us",
      path: "#",
      dropdown: [
        { title: "Our Company", path: "/aboutus" },
        { title: "Letter from the President", path: "/aboutus/letter" },
      ],
    },
    {
      title: "Solutions",
      path: "#",
      dropdown: [
        {
          title: "Big Data Development & Solutions",
          path: "/solutions/big-data-development-&-solutions",
        },
        {
          title: "Database Architecture",
          path: "/solutions/database-architecture",
        },
        { title: "Data Warehouse", path: "/solutions/data-warehouse" },
        {
          title: "Data Migration & Integration",
          path: "/solutions/data-migration-&-integration",
        },
        {
          title: "Data Science & Services",
          path: "/solutions/data-science-&-services",
        },
        {
          title: "Data Analytics & Visualizations",
          path: "/solutions/data-analytics-&-visualizations",
        },
        {
          title: "End to End Automation",
          path: "/solutions/end-to-end-automation",
        },
      ],
    },
    { title: "Consulting", path: "#" },
    { title: "Careers / Jobs", path: "#" },
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
              <button
                className="hamburger"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
            )}

            <motion.ul
              initial={{ opacity: isMobile ? (isMenuOpen ? 1 : 0) : 1, y: -10 }}
              animate={{
                opacity: isMobile ? (isMenuOpen ? 1 : 0) : 1,
                y: isMobile ? (isMenuOpen ? 0 : -10) : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`nav-links ${
                isMobile ? (isMenuOpen ? "mobile-nav open" : "mobile-nav") : ""
              }`}
            >
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`nav-item relative ${isMobile ? "w-full" : ""}`}
                >
                  {link.dropdown ? (
                    <div className="dropdown-container relative w-full">
                      <button
                        className="dropdown-button"
                        onClick={() =>
                          toggleDropdown(
                            link.title.toLowerCase().replace(" ", "")
                          )
                        }
                      >
                        {link.title} ▼
                      </button>
                      {((link.title === "Solutions" && isSolutionsOpen) ||
                        (link.title === "About Us" && isAboutUsOpen)) && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className={`dropdown-menu bg-gray-800 text-white rounded-lg shadow-lg mt-2 mx-auto text-center ${
                            isMobile
                              ? "relative w-[90%] p-4 flex flex-col items-center"
                              : "absolute top-full left-1/2 transform -translate-x-1/2 p-3 z-50"
                          }`}
                        >
                          {link.dropdown.map((item, subIndex) => (
                            <div
                              key={subIndex}
                              className="dropdown-item p-3 hover:bg-gray-700 rounded text-lg w-full"
                            >
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
            </motion.ul>
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
