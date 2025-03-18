<div className="main-banner">
        <div className="map-container">
          <GoogleMapComponent />
        </div>
        {/* <motion.div
          className="address-container"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div className="address-stamp-container">
            <img src={Stamp} alt="Stamp" className="address-stamp" />
          </motion.div>

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
              <strong className="text-blue-400 font-semibold">Address</strong>
              <br />
              <span className="ml-1 text-gray-200">
                3080 Olcott Street, Unit BBU245 Santa Clara, CA - 95054
              </span>
            </p>

            <p className="text-lg md:text-xl leading-relaxed font-light">
              <strong className="text-blue-400 font-semibold">Email</strong>
              <br />
              <span className="ml-1 text-gray-200">
                {" "}
                info@amtexenterprises.com
              </span>
            </p>

            <p className="text-lg md:text-xl leading-relaxed font-light">
              <strong className="text-blue-400 font-semibold">Phone</strong>
              <br />
              <span className="ml-1 text-gray-200"> +1 (408) 734-4050</span>
            </p>
          </motion.div>
        </motion.div> */}
        <motion.div
          className="address-container"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Center the stamp properly */}
          <motion.div className="address-stamp-container">
            <img src={Stamp} alt="Stamp" className="address-stamp" />
          </motion.div>

          {/* Address details */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="address-content text-gray-300 space-y-3"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase">
              USA Office
            </h3>

            <p className="text-lg md:text-xl leading-relaxed font-light">
              <strong className="text-blue-400 font-semibold">Address</strong>
              <br />
              <span className="ml-1 text-gray-200">
                3080 Olcott Street, Unit BBU245 Santa Clara, CA - 95054
              </span>
            </p>

            <p className="text-lg md:text-xl leading-relaxed font-light">
              <strong className="text-blue-400 font-semibold">Email</strong>
              <br />
              <span className="ml-1 text-gray-200">
                info@amtexenterprises.com
              </span>
            </p>

            <p className="text-lg md:text-xl leading-relaxed font-light">
              <strong className="text-blue-400 font-semibold">Phone</strong>
              <br />
              <span className="ml-1 text-gray-200">+1 (408) 734-4050</span>
            </p>
          </motion.div>
        </motion.div>
      </div>