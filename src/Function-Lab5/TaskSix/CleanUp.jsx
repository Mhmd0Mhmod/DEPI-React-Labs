import React, { useState, useEffect } from "react";

const CleanUp = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Component unmounted");
    };
  }, []);
  
  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default CleanUp;
