import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
  }
  handleCounterInc = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  handleCounterDec = () => {
    if (this.state.counter === 1) return;
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };
  render() {
    return (
      <div className="counter">
        <button className="btn" onClick={this.handleCounterDec}>
          -
        </button>
        <span>{this.state.counter}</span>
        <button className="btn" onClick={this.handleCounterInc}>
          +
        </button>
      </div>
    );
  }
}
export default Counter;
