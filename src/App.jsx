import React from "react";
import Navbar from "../src/components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import LocomotiveScroll from "locomotive-scroll";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Loader />
      <Navbar />
      <LandingPage />
      <Marquee />
      <Course />
      <Footer />
    </>
  );
};

export default App;
