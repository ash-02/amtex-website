import React, {useRef} from "react";
import "./index.css";
import { motion, useInView } from "framer-motion";
import Typewriter from "../components/Typewriter";
import { BlurIn } from "../components/BlurIn";
import Expandable from "../components/expandable";
import { GlowingDivs } from "../components/GlowingDivs";
import AnimatedCards from "../components/AnimatedCards";

const index = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sectionRef = useRef(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="home-main">
      <div
        className="gradient-background absolute top-0 left-0 w-full h-screen z-4"
        style={{ height: "200vh" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
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
      <div className="banner-main absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-18">
          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="Mainpage-FirstText text-6xl text-white font-bold text-center"
          >
            <span className="glass-text text-pink-500">Building</span> Dreams...{" "}
            <br />
            <Typewriter />
          </motion.h1>
          <div className="z-3">
            <BlurIn>
              <p className="MainPage-subText">
                Empowering the Next Generation of Innovators
              </p>
            </BlurIn>
            <motion.button
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
              onClick={handleScroll}
              className="MainPage-button mt-4 px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-300 transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
      <div ref={sectionRef} className="services-carou h-screen w-full bg-gray-100 flex flex-col justify-center items-center gap-2">
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-4xl text-white font-bold z-3"
        >
          Areas of Expertise
        </motion.h1>
        <div
          className="
        top-0 left-0 flex justify-center items-center z-3 mt-2
        "
          style={{
            width: "90%",
            height: "75%",
            flexDirection: "column",
          }}
        >
          <Expandable />
        </div>
      </div>

      <div className="feature-cards-wrapper">
          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="z-5"
          >
            Insights That Lead to Innovation
          </motion.h1>
        <div className="feature-cards">

          <AnimatedCards />
        </div>
      </div>
    </div>
  );
};

export default index;
