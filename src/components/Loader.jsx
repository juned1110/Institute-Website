import React, { useState, useEffect } from "react";
import { gsap, Expo } from "gsap";

const Loader = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        } else {
          clearInterval(count);
          return 100;
        }
      });
    }, 20);

    const reveal = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          console.log("completed");
        },
      });

      tl.to(".follow", {
        width: "100%",
        duration: 1.2,
        delay: 0.7,
        ease: Expo.easeInOut,
      })
        .to(".hide", {
          opacity: 0,
          duration: 0.3,
        })
        .to(".hide", {
          display: "none",
          duration: 0.3,
        })
        .to(".follow", {
          height: "100%",
          duration: 0.7,
          delay: 0.5,
          ease: Expo.easeInOut,
        })
        .to(".content", {
          width: "100%",
          ease: Expo.easeInOut,
          duration: 0.3,
        })
        .to(".title-lines", {
          display: "block",
          duration: 0.1,
        })
        .to(".title-lines", {
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: Expo.easeInOut,
        })
        .to(".appContainer", {
          display: "none",
          opacity: 0,
          duration: 1,
        });
    };

    reveal();

    return () => clearInterval(count); // Cleanup function to clear interval on component unmount
  }, []); // Empty dependency array to run the effect only once after initial render

  return (
    <div className="appContainer w-full h-screen text-[#000000] relative z-50">
      <div className="loading w-full h-screen bg-zinc-900 flex justify-center items-center absolute top-0">
        <div className="follow absolute bg-[#f48049] h-0.5 w-0 left-0 z-2"></div>
        <div
          className="progressBar hide absolute left-0 h-0.5 bg-[#fff] ease-out duration-75 w-0"
          style={{ width: counter + "%" }}
        ></div>
        <p className="count hide absolute text-9xl text-[#fff] font-medium translate-y-4">
          {counter}%
        </p>
      </div>

      <div className="content h-screen w-0 absolute left-0 top-0 bg-[#121212] z-3 flex items-center justify-center flex-col overflow-hidden text-[#fff] text-6xl ">
        <p className="title-lines opacity-0 hidden ">Success is not</p>
        <p className="title-lines opacity-0 hidden ">
          just achieving your goals,
        </p>
        <p className="title-lines opacity-0 hidden ">but surpassing</p>
        <p className="title-lines opacity-0 hidden ">them with humility."</p>
        <p className="title-lines opacity-0 hidden ">- Mukesh Ambani</p>
      </div>
    </div>
  );
};

export default Loader;
