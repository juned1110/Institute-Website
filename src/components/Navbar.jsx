import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const blurIntensity = Math.min(scrollY / 20, 20);
  return (
    <>
      <div
        className={`fixed w-full flex justify-between items-center top-0 z-10 backdrop-blur-md`}
        style={{ backdropFilter: `blur(${blurIntensity}px)` }}
      >
        <div className="logo ">
          <img
            className="h-16 ml-4 px-20 py-1"
            src="src/components/jpeg.jpeg"
            alt=""
          />
        </div>
        {/* <div className="links flex gap-10 mr-20">
          {["Home", "New Course", "Sign-In", "Contact Us"].map(
            (item, index) => (
              <a
                key={index}
                className={`text-lg capitalize font-light ${
                  index === 3 && "ml-32"
                }`}
              >
                {item}
              </a>
            )
          )}
        </div> */}
        <div className="links flex gap-10 mr-20"></div>
      </div>
    </>
  );
}

export default Navbar;
