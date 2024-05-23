import React, { useState, useEffect } from "react";

const EyeAnimation = () => {
  // State variables for eye movement
  const [eyeX, setEyeX] = useState(0);
  const [eyeY, setEyeY] = useState(0);

  // Update eye position based on mouse movement
  const updateEyePosition = (event) => {
    const eyeContainer = document.getElementById("eye-container");
    const boundingRect = eyeContainer.getBoundingClientRect();
    const eyeCenterX = boundingRect.left + boundingRect.width / 2;
    const eyeCenterY = boundingRect.top + boundingRect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate distance between mouse and eye center
    const deltaX = mouseX - eyeCenterX;
    const deltaY = mouseY - eyeCenterY;

    // Calculate angle for eye movement
    const angle = Math.atan2(deltaY, deltaX);

    // Limit eye movement within the eye container
    const radius = boundingRect.width / 2;
    const maxX = radius * Math.cos(angle);
    const maxY = radius * Math.sin(angle);

    // Update eye position
    setEyeX(maxX);
    setEyeY(maxY);
  };

  useEffect(() => {
    // Add event listener for mouse movement
    document.addEventListener("mousemove", updateEyePosition);

    return () => {
      // Remove event listener on component unmount
      document.removeEventListener("mousemove", updateEyePosition);
    };
  }, []);

  return (
    <div
      id="eye-container"
      className="relative w-screen h-screen flex justify-center items-center bg-gray-200"
    >
      <div className="w-20 h-20 bg-white border border-gray-400 rounded-full relative overflow-hidden">
        <div className="w-4 h-4 bg-black rounded-full absolute"></div>
        <div
          className="w-10 h-10 bg-black rounded-full absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) translate(${eyeX}px, ${eyeY}px)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default EyeAnimation;
