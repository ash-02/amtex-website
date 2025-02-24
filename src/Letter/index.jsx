import { motion } from "framer-motion";
import amtex_logo from "../assets/amtex_logo.png";
import { GlowingDivs } from "../components/GlowingDivs";
import "./index.css";

const index = () => {

  return (
    <>
      <div
        className="gradient-background absolute left-0 w-full h-screen z-1 overflow-hidden"
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
      <div className="letter-main">
        {/* <div className="letter-container bg-[#E5E7EB] shadow-xl rounded-lg p-6 border border-gray-500 z-2"> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
          className="letter-container bg-[#E5E7EB] shadow-xl rounded-lg p-3 md:p-6 border border-gray-500 z-2"
        >

          {/* Letterhead */}
          <div className="letter-header text-center">
            <img src={amtex_logo} alt="Company Logo" />
            <h2 className="text-lg font-semibold text-white">
              A Letter from the President
            </h2>
          </div>

          {/* <div className="letter-content p-6 rounded-md border shadow-md"> */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
            className="letter-content p-3 md:p-6 rounded-md border shadow-md"
          >
            <p className="italic">Dear Valued Customers,</p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
              className="text-lg leading-relaxed mt-4"
              style={{
                textAlign: "justify",
              }}
            >
              Welcome to our website!!! Amtex Enterprises commitment to ensuring
              the success of our clients, the growth of our technical employees
              and support to our local communities has driven our incredible
              growth more than 2 decades. We believe in people and view
              differences in race, gender, age, or religion as non-issues. We
              are firm in our conviction that a person’s individual worth is
              based on what the eye cannot see: ethics, skills, loyalty, and
              values. There is no room for intolerance and hostility in our
              workplace. We believe that for people to really shine, they must
              be comfortable being themselves at work before anything else. We
              recognize that everyone is an equally important piece of a much
              larger picture. Amtex Enterprises is committed to helping local
              community organizations in the training and employment of high
              school graduates interested in technology who are unable to pursue
              a college degree. In this way, we can leverage our expertise at
              matching people with jobs and at the same time provide
              opportunities for our youth who may not have otherwise have such
              access. Amtex Enterprises is also committed to assist not for
              profit organizations fulfil their IT solutions and staffing
              requirements at less than market rates in order to achieve maximum
              utilization of their funding. In keeping with Amtex Enterprises
              core values, we actively encourage and make it possible for our
              employees to give back and support dozens of diverse charities and
              other organizations with contributions of time, energy, financial
              and other forms of support. We are engaged with several
              foundations that support nutrition, wellness, and community. Our
              story is about commitment, expertise and excellence. Earning the
              trust of clients and our employees is a guiding principle of our
              company, and we work hard at it every day. We invite you to take a
              moment to explore Amtex Enterprises and discover our history, the
              core values that we’re built on. Spend some time with our website
              and you’ll understand why Amtex Enterprises is a key player in the
              IT Staffing/Consulting space. for clients and candidates. Looking
              ahead, we are focused on accelerating the execution of our growth
              strategy while continuing to build on the strength of our brand
              helping our clients share knowledge and create innovation and
              bringing positive change to the communities in which we work and
              live. Whether you are a potential client, a business partner, or a
              future employee, we look forward to finding out how we can work
              together to bring service to life. I am incredibly excited about
              this journey and truly believe the best of Amtex Enterprises is
              yet to come.
              <br />
              <br />
              <span className="font-semibold text-center w-full block text-gray-300">
                Wishes & Regards
              </span>
            </motion.div>

            <div className="text-xl mt-4">
              {/* <img
              src="/signature.png"
              alt="Signature"
              className="h-12 mx-auto opacity-80"
            /> */}
              <p className="text-center font-semibold text-white-900">
                Asker Junaid
              </p>
              <p className="text-center text-gray-400">President & CEO</p>
            </div>
          {/* </div> */}
          </motion.div>
        {/* </div> */}
        </motion.div>
      </div>
    </>
  );
};

export default index;
