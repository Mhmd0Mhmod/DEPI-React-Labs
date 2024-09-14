import React, { useState, useEffect } from "react";

const WindowResizeComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [buttonClicks, setButtonClicks] = useState(0);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const handleButtonClick = () => {
    setButtonClicks((prevClicks) => prevClicks + 1);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div onMouseMove={handleMouseMove}>
      <div>
        <p>Current Window Width: {windowWidth}px</p>
        <p>
          Mouse Position: X: {mousePosition.x}, Y: {mousePosition.y}
        </p>
        <p>Button Clicks: {buttonClicks}</p>
        <button onClick={handleButtonClick}>Click me</button>
      </div>
    </div>
  );
};

export default WindowResizeComponent;
