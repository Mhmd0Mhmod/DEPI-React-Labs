import React from "react";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";
import ComponentFour from "./ComponentFour";
import ComponentFive from "./ComponentFive";

function ComponentOne() {
  return (
    <div className="all-cards">
      <ComponentTwo />
      <ComponentThree />
      <ComponentFour />
      <ComponentFive />
    </div>
  );
}
export default ComponentOne;
