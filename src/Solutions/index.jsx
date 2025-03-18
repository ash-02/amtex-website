import { motion } from "framer-motion";
import React from "react";
import { useParams } from "react-router-dom";
import { Solutions } from "../data/Solutions";
import "./index.css";
import { GlowingDivs } from "../components/GlowingDivs";

const SectionPage = () => {
  const { sectionTitle } = useParams();
  const section = Solutions.sections.find(
    (s) => s.title.toLowerCase().replace(/\s+/g, "-") === sectionTitle
  );

  if (!section) {
    return <h2 className="text-center text-white text-3xl">Section Not Found</h2>;
  }

  return (
    <section className="solutions-main bg-gradient-to-r text-white">
      <div
        className="gradient-background absolute left-0 w-full h-screen z-1 overflow-hidden"
        style={{ height: "100vh", minHeight: "100vh", top: "25%" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0 }}
          className="relative w-full h-full flex justify-center items-center z-4 mt-2 overflow-hidden"
          style={{
            position: "relative",
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        >
          <GlowingDivs />
        </motion.div>
      </div>
      <div className="solutions-container w-full flex flex-col md:flex-row gap-12 z-3">
        <motion.div
          className="flex-1 space-y-6 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {section.title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {section.description}
          </motion.p>
          <ul className="space-y-4">
            {section.features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 + i * 0.6 }}
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-cyan-400 text-gray-900 font-bold">
                  ✔
                </span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
          <motion.button
            className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-gray-100 font-semibold rounded-lg shadow-lg transition-all"
            style={{ background: "#1a1a1a" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900 opacity-50 rounded-lg"></div>
          <motion.img
            src={section.image}
            alt={section.title}
            className="rounded-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionPage;

// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./index.css";

// const SectionPage = () => {
//   const { sectionTitle } = useParams();
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
//   const xTransform = useTransform(scrollYProgress, [0, 1], ["-10vw", "10vw"]);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const sections = [
//     {
//       title: "Innovative Solutions",
//       description: "Explore cutting-edge technology and creative solutions for modern problems.",
//       image: "https://source.unsplash.com/800x600/?technology",
//       features: ["AI-powered tools", "Scalable infrastructure", "User-centric design"]
//     },
//     {
//       title: "Sustainable Future",
//       description: "Discover how innovation can lead to a more sustainable and eco-friendly world.",
//       image: "https://source.unsplash.com/800x600/?sustainability",
//       features: ["Green energy", "Smart cities", "Carbon-neutral goals"]
//     }
//   ];

//   const section = sections.find((s) => s.title.toLowerCase().replace(/\s+/g, "-") === sectionTitle);

//   if (!section) {
//     return <h2 className="text-center text-white text-3xl">Section Not Found</h2>;
//   }

//   return (
//     <section ref={sectionRef} className="solutions-main text-white flex flex-col items-center py-20 px-6 relative overflow-hidden">
//       {/* Background Parallax Effect */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-40"
//         style={{ x: xTransform }}
//       />
      
//       {/* Hero Section */}
//       <motion.div className="text-center max-w-3xl z-10" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
//         <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">
//           {section.title}
//         </h1>
//         <p className="text-lg text-gray-300 mt-4 leading-relaxed max-w-xl mx-auto">
//           {section.description}
//         </p>
//       </motion.div>
      
//       {/* Expanding Grid Menu */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-5xl z-10">
//         {sections.map((item, index) => (
//           <motion.div
//             key={index}
//             className={`relative bg-gray-800 p-6 rounded-lg shadow-xl transition-all hover:scale-105 cursor-pointer overflow-hidden ${selectedItem === index ? "expanded" : ""}`}
//             onClick={() => setSelectedItem(selectedItem === index ? null : index)}
//             whileHover={{ scale: 1.05 }}
//           >
//             <motion.img 
//               src={item.image} 
//               alt={item.title} 
//               className="w-full h-48 object-cover rounded-md shadow-lg mb-4"
//               initial={{ opacity: 0 }} 
//               animate={{ opacity: 1 }} 
//               transition={{ duration: 1, delay: 0.3 }}
//             />
//             <h3 className="text-2xl font-bold text-white">{item.title}</h3>
//             {selectedItem === index && <p className="text-gray-400 mt-2 leading-relaxed">{item.description}</p>}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SectionPage;