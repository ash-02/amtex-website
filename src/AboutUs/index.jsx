import React from "react";
import { delay, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "./index.css";
import { GlowingDivs } from "../components/GlowingDivs";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const index = () => {
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += 1;
        }
      }
    };
    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="gradient-background absolute left-0 w-full h-screen z-4 overflow-hidden opacity-50"
        style={{ height: "300vh", minHeight: "300vh", top: "-40%" }}
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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="aboutus-main text-gray-200"
      >
        <motion.div
          variants={fadeIn}
          className="section1 relative max-w-6xl mx-auto text-center flex flex-col items-center px-6 sm:px-8 md:px-12 lg:px-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, ...fadeIn.visible.transition },
            }}
            className="z-3"
          >
            <motion.h2
              initial={{ opacity: 1, y: 120 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1.8,
                  ...fadeIn.visible.transition,
                  duration: 1.5,
                },
              }}
              className="text-3xl sm:text-6xl font-extrabold text-white mb-6 tracking-wide z-3"
            >
              About Us
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 2.4,
                ...fadeIn.visible.transition,
                duration: 1.5,
              },
            }}
            className="w-24 bg-blue-500 h-1 mb-6 z-3"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2, ...fadeIn.visible.transition },
            }}
            className="text-md sm:text-2xl text-gray-300 leading-relaxed z-3"
          >
            At Amtex Enterprises, we are passionate about
            <span className="text-blue-400 font-semibold">
              {" "}
              empowering businesses{" "}
            </span>
            with top-tier IT services and talent solutions. Our mission is to
            create meaningful connections between
            <span className="text-blue-400 font-semibold">
              {" "}
              exceptional professionals{" "}
            </span>
            and{" "}
            <span className="text-blue-400 font-semibold">
              innovative companies
            </span>
            , driving growth and success.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2.2, ...fadeIn.visible.transition },
            }}
            className="text-md sm:text-2xl text-gray-300 leading-relaxed mt-6 z-3"
          >
            With years of industry expertise, a dedicated team, and a deep
            understanding of evolving market needs, we
            <span className="text-blue-400 font-semibold">
              {" "}
              deliver tailored staffing solutions{" "}
            </span>
            that align with our clients' objectives. Whether it’s permanent
            placements, contract staffing, or executive search, we ensure
            companies get the right people to fuel their success.
          </motion.p>

          <div className="mt-8 z-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 2.4, ...fadeIn.visible.transition },
              }}
              className="px-6 py-3 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 px-6 sm:px-8 md:px-12 lg:px-32"
        >
          <motion.div
            variants={fadeIn}
            className="glass-div p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 z-3"
          >
            <h3 className="text-xl sm:text-4xl font-semibold text-white">
              Who We Are
            </h3>
            <p className="mt-4 text-gray-400 sm:text-xl">
              Our expertise in IT staffing and talent management has helped us
              grow our US footprint and build a reputation for excellence.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="glass-div p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 z-3"
          >
            <h3 className="text-xl sm:text-4xl font-semibold text-white">
              Our Mission
            </h3>
            <p
              className="mt-4 text-gray-400
            sm:text-xl
            "
            >
              We aim to bridge the gap between exceptional candidates and
              outstanding companies, fostering growth and success for both.
            </p>
          </motion.div>
        </motion.div>
        <br />
        <br />
        <br />
        {/* Why Choose Us */}
        <motion.div variants={fadeIn} initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} className="mt-16 text-center">
          <h3 className="text-3xl sm:text-4xl font-semibold text-white z-5">
            Why Choose Us?
          </h3>
          <br />
          <div
            ref={carouselRef}
            className="relative flex space-x-6 mt-8 px-4 pb-4 overflow-hidden z-3"
            style={{ whiteSpace: "nowrap", display: "flex" }}
          >
            {[
              "Experienced Team",
              "Proven Track Record",
              "Personalized Service",
              "Commitment to Quality",
              "Customer Satisfaction",
              "Industry Expertise",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative flex-shrink-0 w-[250px] sm:w-[300px] p-6 sm:p-8 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg text-center z-3"
              >
                <h4 className="text-lg sm:text-xl font-medium text-white">
                  {item}
                </h4>
              </motion.div>
            ))}
            {/* Duplicate elements for seamless looping */}
            {[
              "Experienced Team",
              "Proven Track Record",
              "Personalized Service",
              "Commitment to Quality",
              "Customer Satisfaction",
              "Industry Expertise",
            ].map((item, index) => (
              <motion.div
                key={index + 6}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative flex-shrink-0 w-[250px] sm:w-[300px] p-6 sm:p-8 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg text-center"
              >
                <h4 className="text-lg sm:text-xl font-medium text-white">
                  {item}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <br />
        <br />
        <br />
        {/* Our Values - Vertical Animated Timeline */}
        <motion.div 
        variants={fadeIn} 
        className="mt-16 md:px-0 px-8 z-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-3xl sm:text-4xl font-semibold text-white text-center">
            Our Values
          </h3>
          <br />
          <div className="relative mt-8 max-w-4xl mx-auto border-l-4 border-gray-700">
            {[
              {
                title: "Integrity",
                desc: "Upholding honesty and ethics in all dealings.",
              },
              {
                title: "Innovation",
                desc: "Embracing technology to lead the recruitment industry.",
              },
              {
                title: "Client Focus",
                desc: "Our clients' success is our success.",
              },
              {
                title: "Diversity & Inclusion",
                desc: "We champion diversity to drive innovation.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative flex items-center mb-8 pl-6 pr-4 sm:pl-6"
              >
                <div className="absolute left-[-14px] w-5 sm:w-6 h-5 sm:h-6 bg-gray-700 rounded-full"></div>
                <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md w-full">
                  <h4 className="text-lg sm:text-xl font-medium text-white">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 mt-2">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </>
  );
};

export default index;
