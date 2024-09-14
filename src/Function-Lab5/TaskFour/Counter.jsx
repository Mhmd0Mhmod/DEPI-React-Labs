import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
  });

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter w-10">
      <button className="btn" onClick={increment}>
        +
      </button>
      <span>{count}</span>
    </div>
  );
};

export default Counter;
