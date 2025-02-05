import React from "react";
import BlurryBlob from "../components/background/blurry-blob";
import "./index.css";
import { motion } from "framer-motion";
import Typewriter from "../components/Typewriter";
import { BlurIn } from "../components/BlurIn";
import Expandable from "../components/expandable";

const index = () => {
  return (
    <div className="home-main">
      <div className="banner-main absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-gray-900 to-black opacity-90">
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
          className="relative w-full h-full flex justify-center items-center z-0 mt-2"
        >

          <svg
          className="
        absolute top-0 left-0 w-full h-full z-0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 450"
          opacity="0.79"
        >
          <defs>
            <filter
              id="bbblurry-filter"
              x="-100%"
              y="-100%"
              width="400%"
              height="400%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur
                className="
        absolute top-0 left-0 w-full h-full z-0"
                stdDeviation="109"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                edgeMode="none"
                result="blur"
              ></feGaussianBlur>
            </filter>
          </defs>
          <g filter="url(#bbblurry-filter)">
            <ellipse
              rx="150"
              ry="150"
              cx="332.4603491012005"
              cy="324.9015671033221"
              fill="hsl(37, 99%, 67%)"
            ></ellipse>
            <ellipse
              rx="150"
              ry="150"
              cx="449.95328077382993"
              cy="269.8344235199399"
              fill="hsl(316, 73%, 52%)"
            ></ellipse>
            <ellipse
              rx="150"
              ry="150"
              cx="288.1606220695825"
              cy="547.7963074913102"
              fill="hsl(185, 100%, 57%)"
            ></ellipse>
          </g>
          </svg>
        </motion.div> */}

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
  className="relative w-full h-full flex justify-center items-center z-0 mt-2 overflow-hidden"
  style={{
    // position: relative;
  // background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.8) 100%);
  position: "relative",
  background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.8) 100%)",
  }}
>
  <motion.svg
    className="absolute top-0 left-0 w-full h-full z-0"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.dev/svgjs"
    viewBox="0 0 800 450"
    opacity="0.79"
    initial={{ scale: 0.5 }}
    animate={{ scale: [1, 1.4, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <defs>
      <filter
        id="bbblurry-filter"
        x="-100%"
        y="-100%"
        width="400%"
        height="400%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feGaussianBlur
          className="absolute top-0 left-0 w-full h-full z-0"
          stdDeviation="109"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="SourceGraphic"
          edgeMode="none"
          result="blur"
        />
      </filter>
    </defs>
    <g filter="url(#bbblurry-filter)">
      <ellipse rx="150" ry="150" cx="332.4603491012005" cy="324.9015671033221" fill="hsl(37, 99%, 67%)" />
      <ellipse rx="150" ry="150" cx="449.95328077382993" cy="269.8344235199399" fill="hsl(316, 73%, 52%)" />
      <ellipse rx="150" ry="150" cx="288.1606220695825" cy="547.7963074913102" fill="hsl(185, 100%, 57%)" />
    </g>
  </motion.svg>
</motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 3 }}
          >
            <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 800 800"
          style={{
            position: "absolute",
            top: 0,
            left: -600,
            width: "150%",
            height: "120%",
            zIndex: -1,
          }}
        >
          <g fill="white" stroke="white" stroke-width="1">
            <line
              x1="50"
              y1="0"
              x2="130"
              y2="80"
              stroke-width="1.5"
              stroke-linecap="round"
              opacity="0.8"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 0"
                to="800 800"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="2s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="180"
              y1="-50"
              x2="260"
              y2="30"
              stroke-width="1.5"
              stroke-linecap="round"
              opacity="0.7"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 -50"
                to="700 750"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="320"
              y1="-100"
              x2="400"
              y2="-20"
              stroke-width="1.5"
              stroke-linecap="round"
              opacity="0.85"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 -100"
                to="600 700"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="520"
              y1="-150"
              x2="600"
              y2="-70"
              stroke-width="1.5"
              stroke-linecap="round"
              opacity="0.9"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 -150"
                to="500 650"
                dur="3.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="700"
              y1="-200"
              x2="800"
              y2="-100"
              stroke-width="1.5"
              stroke-linecap="round"
              opacity="0.75"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 -200"
                to="400 600"
                dur="4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="4s"
                repeatCount="indefinite"
              />
            </line>
          </g>
            </svg>  
          </motion.div> */}

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-18  z-10">
          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="Mainpage-FirstText text-6xl text-white font-bold text-center"
          >
            <span className="glass-text text-pink-500">Building</span> Dreams... <br />
            <Typewriter />
          </motion.h1>
          <div className="">
            <BlurIn>
              <p className="MainPage-subText">
                Empowering the Next Generation of Innovators
              </p>
            </BlurIn>
            <motion.button
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
              className="MainPage-button mt-4 px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-300 transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
      <div className="services-carou h-screen w-full bg-gray-100">
        {/* <h2 className="text-center text-violet-500">Services</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}

        <div className="
        top-0 left-0 flex justify-center items-center z-0 mt-2 gap-8
        " style={{
          width: "75%",
          height: "75%",
          flexDirection: "column",
        }}>
          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="Mainpage-FirstText text-4xl text-white font-bold"
          >
            Areas of Expertise
          </motion.h1>
          <Expandable />
        </div>

      </div>
    </div>
  );
};

export default index;
