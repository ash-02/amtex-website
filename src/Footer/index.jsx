// import React from "react";
// import "./index.css";
// import amtexLogo from "../assets/amtex_logo.png";

// const index = () => {
//   return (
//     <div className="footer-all">
//       <div className="footer-main">
//         <div className="footer-logo">
//           <img src={amtexLogo} alt="Tech Solutions" />
//         </div>
//         <div className="footer-content">
//           <ul className="footer-column">
//             <li className="heading">Services</li>
//             <li>
//               <a href="">Artificial Intelligence</a>
//             </li>
//             <li>
//               <a href="">Cyber Security</a>
//             </li>
//             <li>
//               <a href="">Cloud and Data Services</a>
//             </li>
//             <li>
//               <a href="">Software Consulting</a>
//             </li>
//           </ul>
//           <ul className="footer-column">
//             <li className="heading">Corporate Overview</li>
//             <li>
//               <a href="">About</a>
//             </li>
//             <li>
//               <a href="">Careers</a>
//             </li>
//           </ul>
//           <ul className="footer-column">
//             <li className="heading">Support</li>
//             <li>
//               <a href="">Contact</a>
//             </li>
//             <li>
//               <a href="">Fraud Alert</a>
//             </li>
//           </ul>
//         </div>
//         <div className="footer-branches">
//           <ul className="footer-column">
//             <div className="">
//               <li
//                 className="heading"
//                 style={{
//                   marginBottom: "1rem",
//                 }}
//               >
//                 Home Branch
//               </li>
//               <li>
//                 616 S Coppell RD Coppell, TX 75019 <br /> (972) 474-8787
//               </li>
//             </div>
//             <br />
//             <ul className="">
//               <li className="heading">Other Locations</li>
//               <li>Albany, NY</li>
//               <li>Colorado Springs, CO</li>
//               <li>San Ramon, CA</li>
//             </ul>
//           </ul>
//         </div>
//       </div>
//       <hr />
//       <div className="footer-bottom">
//         <p>&copy; 2025 Themesoft Inc. All rights reserved.</p>
//         <div className="social-media-buttons">
//             <a href="">
//                 <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="">
//                 <i className="fab fa-instagram"></i>
//             </a>
//             <a href="">
//                 <i className="fab fa-twitter"></i>
//             </a>
//             <a href="">
//                 <i className="fab fa-linkedin-in"></i>
//             </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default index;

import React from "react";
import "./index.css";
import amtexLogo from "../assets/amtex_logo.png";

const Footer = () => {
  return (
    <div className="footer-all">
      <div className="footer-main">
        <div className="footer-logo">
          <img src={amtexLogo} alt="Tech Solutions" />
        </div>
        <div className="footer-content">
          <ul className="footer-column">
            <li className="heading">Solutions</li>
            <li><a href="">Big Data and Solutions</a></li>
            <li><a href="">Database Architecture</a></li>
            <li><a href="">Data Warehouse</a></li>
            <li><a href="">Data Migration and Integration</a></li>
          </ul>
          <ul className="footer-column">
            <li className="heading">Consulting</li>
            <li><a href="">Information Technology</a></li>
          </ul>
          <ul className="footer-column">
            <li className="heading">Contact</li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms of Use</a></li>
          </ul>
        </div>
        <div className="footer-branches">
          <ul className="footer-column">
            <div>
              <li className="heading" style={{ marginBottom: "1rem" }}>USA Office</li>
              <li>3080 Olcott Street, Unit BBU245 Santa Clara, CA - 95054 <br /> (408) 734-4050</li>
            </div>
            <br />
            {/* <ul>
              <li className="heading">Other Locations</li>
              <li>Albany, NY</li>
              <li>Colorado Springs, CO</li>
              <li>San Ramon, CA</li>
            </ul> */}
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; 2025 Amtex Enterprises. All rights reserved.</p>
        <div className="social-media-buttons">
          <a href=""><i className="fab fa-facebook-f"></i></a>
          <a href=""><i className="fab fa-instagram"></i></a>
          <a href=""><i className="fab fa-twitter"></i></a>
          <a href=""><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;