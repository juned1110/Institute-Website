import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#FFCB05]"
    >
      <div className="text border-t-2 border-b-2 border-amber-500 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[22vw] leading-none font-[FoundersGrotesk-Semibold] font-bold uppercase pb-5 pr-10"
        >
          Code your legacy💻
        </motion.h1>

        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[22vw] leading-none font-[FoundersGrotesk-Semibold] font-bold uppercase pb-5 pr-10"
        >
          Code your legacy💻
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
