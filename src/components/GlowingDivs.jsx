import React from "react";
import { motion } from "framer-motion";

export const GlowingDivs = () => {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: [2, 2.5, 2] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="glow-container">
        <div className="glowing-div div1"></div>
        <div className="glowing-div div2"></div>
        <div className="glowing-div div3"></div>
      </div>
    </motion.div>
  );
};
