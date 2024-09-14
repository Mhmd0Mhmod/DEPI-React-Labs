import React from "react";
import Login from "./Login";
import Signup from "./SignUp.jsx";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      form: "login",
    };
  }

  handleShownForm = (e) => {
    this.setState((prevState) => ({
      form: prevState.form === "login" ? "signup" : "login",
    }));
  };

  render() {
    return <div className="form">{this.state.form === "login" ? <Login handleShownForm={this.handleShownForm} /> : <Signup handleShownForm={this.handleShownForm} />}</div>;
  }
}

export default Form;
