// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import "./index.css";

// // const fadeIn = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // };

// // const introAnimation = {
// //   hidden: { opacity: 0, scale: 0.5, y: -50 },
// //   visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
// //   exit: { opacity: 0, scale: 0.5, y: 50, transition: { duration: 0.8, ease: "easeInOut" } },
// // };

// // const index = () => {
// //   const [showIntro, setShowIntro] = useState(true);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setShowIntro(false);
// //     }, 4000);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <motion.div className="contact-container text-gray-200">
// //       <AnimatePresence>
// //         {showIntro ? (
// //           <motion.h2
// //             key="intro"
// //             variants={introAnimation}
// //             initial="hidden"
// //             animate="visible"
// //             exit="exit"
// //             className="text-4xl sm:text-6xl font-bold text-center text-white"
// //           >
// //             Let's Connect!!!
// //           </motion.h2>
// //         ) : (
// //           <motion.div
// //             key="contact-content"
// //             initial="hidden"
// //             animate="visible"
// //             variants={fadeIn}
// //             className="contact-content"
// //           >
// //             <motion.div className="contact-form-container" variants={fadeIn}>
// //               <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
// //               <p className="text-gray-400 mb-6">
// //                 Have questions? Fill out the form and our team will get back to you.
// //               </p>
// //               <form className="contact-form">
// //                 <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
// //                 <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
// //                 <textarea name="message" placeholder="Your Message" className="contact-textarea" required></textarea>
// //                 <motion.button whileHover={{ scale: 1.05 }} className="contact-submit-btn">
// //                   Send Message
// //                 </motion.button>
// //               </form>
// //             </motion.div>
// //             <motion.div className="contact-info" variants={fadeIn}>
// //               <h3 className="text-2xl font-semibold text-white mb-4">Our Office</h3>
// //               <p className="text-gray-400"><strong>Address:</strong> 123 Business Street, Boston, MA</p>
// //               <p className="text-gray-400"><strong>Email:</strong> contact@amtex.com</p>
// //               <p className="text-gray-400"><strong>Phone:</strong> +1 (555) 123-4567</p>
// //               <p className="text-gray-400"><strong>Hours:</strong> Mon - Fri, 9 AM - 5 PM</p>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.div>
// //   );
// // };

// // export default index;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "./index.css";

// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const index = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//     teamSize: "",
//     newsletter: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   return (
//     <>
//         <div className="main-banner">

//         </div>
//         <motion.div className="contact-container">
//         <motion.div initial="hidden" animate="visible" variants={fadeIn} className="contact-content">
//             {/* Left Section - Title & Subtitle */}
//             <div className="contact-left">
//             <h1 className="contact-title">Let's <br /> Connect</h1>
//             <p className="contact-subtitle">Tell us more about your business and how we can help.</p>
//             </div>

//             {/* Right Section - Contact Form */}
//             <div className="contact-right">
//             <form className="contact-form">
//                 <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//                 <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                 <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
//                 <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>

//                 {/* Team Size Selection
//                 <div className="team-size">
//                 <p className="team-size-title">Team Size</p>
//                 <div className="team-size-options">
//                     {[
//                     "1-5", "6-20", "21-50", "51-100", "101-250", "251-500", "501-1000", "1001+"
//                     ].map((size) => (
//                     <button type="button"
//                         key={size}
//                         className={`team-size-btn ${formData.teamSize === size ? "selected" : ""}`}
//                         onClick={() => setFormData({ ...formData, teamSize: size })}
//                     >
//                         {size}
//                     </button>
//                     ))}
//                 </div>
//                 </div> */}

//                 {/* Newsletter Checkbox */}
//                 <div className="newsletter">
//                 <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} />
//                 <label>Subscribe to our newsletter for marketing insights</label>
//                 </div>

//                 {/* Submit Button */}
//                 <motion.button whileHover={{ scale: 1.05 }} className="contact-submit-btn">
//                 Submit
//                 </motion.button>
//             </form>
//             </div>
//         </motion.div>
//         </motion.div>
//     </>
//   );
// };

// export default index;

import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import GoogleMapComponent from "./GoogleMap"; // Import the Google Map component
import "./index.css";
import Stamp from "../assets/stamp.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay:
    3
   } },
};

const ContactUs = () => {
  return (
    <>
      <div className="main-banner">
        {/* Google Maps Section */}
        <div className="map-container">
          <GoogleMapComponent />
        </div>
        <motion.div className="address-container" initial="hidden" animate="visible" variants={fadeIn}>

            <motion.div className="address-stamp-container">
                <img src={Stamp} alt="Stamp" className="address-stamp" />
            </motion.div>

            {/* <motion.div initial="hidden" animate="visible" variants={fadeIn} className="address-content">
                <h3 className="address-title">USA Office</h3>
                <p className="address-text"><strong>Address:</strong>
                3080 Olcott Street, Unit BBU245 Santa Clara, CA - 95054</p>
                <p className="address-text"><strong>Email:</strong> info@amtexenterprises.com</p>
                <p className="address-text"><strong>Phone:</strong> +1 (408) 734-4050</p>
            </motion.div> */}
            <motion.div
  initial="hidden"
  animate="visible"
  variants={fadeIn}
  className="address-content text-gray-300 space-y-3"
>
  <h3 className="text-3xl md:text-2xl font-extrabold text-white tracking-wide uppercase">
    USA Office
  </h3>
  
  <p className="text-lg md:text-xl leading-relaxed font-light">
    <strong className="text-blue-400 font-semibold">Address</strong><br />
    <span className="ml-1 text-gray-200">
      3080 Olcott Street, Unit BBU245 Santa Clara, CA - 95054
    </span>
  </p>

  <p className="text-lg md:text-xl leading-relaxed font-light">
    <strong className="text-blue-400 font-semibold">Email</strong><br />
    <span className="ml-1 text-gray-200"> info@amtexenterprises.com</span>
  </p>

  <p className="text-lg md:text-xl leading-relaxed font-light">
    <strong className="text-blue-400 font-semibold">Phone</strong><br />
    <span className="ml-1 text-gray-200"> +1 (408) 734-4050</span>
  </p>
</motion.div>
        </motion.div>
      </div>
      <motion.div className="contact-container">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="contact-content">
          {/* Left Section - Title & Subtitle */}
          <div className="contact-left">
            <h1 className="contact-title">Let's <br /> Connect</h1>
            <p className="contact-subtitle">Tell us more about your business and how we can help.</p>
          </div>

          {/* Right Section - Contact Form */}
          <div className="contact-right">
            <form className="contact-form">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="company" placeholder="Company" />
              <textarea name="message" placeholder="Message" required></textarea>

              {/* Newsletter Checkbox */}
              <div className="newsletter">
                <input type="checkbox" name="newsletter" />
                <label>Subscribe to our newsletter for marketing insights</label>
              </div>

              {/* Submit Button */}
              <motion.button whileHover={{ scale: 1.05 }} className="contact-submit-btn">
                Submit
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactUs;