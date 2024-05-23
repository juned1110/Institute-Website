import { motion } from "framer-motion";
import React from "react";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-[#FFFFFF] pt-1"
    >
      <div className="textstructure mt-40 px-20 ">
        <div className="masker">
          <h1 className=" font-[overpass-extrabold] text-8xl leading-none tracking-tighter font-semibold ml-32">
            Dive into the
          </h1>
        </div>
        {/* animation */}
        <div className="masker relative w-[57vw]">
          <div className="w-[15vw] h-[7vw] flex gap-1 absolute left-[24vw] top-[4vh] ">
            <div className="eye-wrapper">
              <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
                className=" flex items-center justify-center w-[7.5vw] h-[7vw] bg-zinc-400 rounded-full"
              >
                <motion.div
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
                  className=" relative w-2/3 h-2/3 bg-zinc-900 rounded-full"
                >
                  <div className="line absolute top-1/2 left-1/2 w-full h-5 ">
                    <motion.div
                      initial={{ x: -1000 }}
                      animate={{ x: 0 }}
                      transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
                      className="w-5 h-5 bg-zinc-100 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <div className="eye-wrapper">
              <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
                className=" flex items-center justify-center w-[7.5vw] h-[7vw] bg-zinc-400 rounded-full"
              >
                <motion.div
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
                  className=" relative w-2/3 h-2/3 flex items-center justify-center bg-zinc-900 rounded-full"
                >
                  <div className="line absolute top-1/2 left-1/2 w-full h-5 ">
                    <motion.div
                      initial={{ x: -1000 }}
                      animate={{ x: 0 }}
                      transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
                      className="w-5 h-5 bg-zinc-100 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div>
            <h1 className=" font-[overpass-extrabold] text-9xl leading-none font-semibold ">
              Techn<span className="text-transparent pl-2">OO</span>cean
            </h1>
          </div>
        </div>

        {/* end */}
        <div className="masker">
          <h1 className=" font-[overpass-extrabold] text-8xl leading-none tracking-tighter font-semibold ml-24">
            of opportunities!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
