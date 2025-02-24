import { motion } from "framer-motion";
import React from "react";
import { useParams } from "react-router-dom";
import { Solutions } from "../data/solutions";
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
        className="gradient-background absolute left-0 w-full h-screen z-1 overflow-hidden opacity-30"
        style={{ height: "100vh", minHeight: "100vh", top: "35%" }}
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
