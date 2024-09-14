import React, { Component } from "react";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";
import ComponentFour from "./ComponentFour";
import ComponentFive from "./ComponentFive";

class ComponentOne extends Component {
  render() {
    return (
      <div className="all-cards">
        <ComponentTwo />
        <ComponentThree />
        <ComponentFour />
        <ComponentFive />
      </div>
    );
  }
}

export default ComponentOne;
