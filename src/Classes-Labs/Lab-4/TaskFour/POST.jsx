import axios from "axios";
import React, { Component } from "react";

class POST extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      body: "",
      looding: false,
    };
  }
  handleChanging = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmitting = (e) => {
    e.preventDefault();
    this.setState({ looding: true });
    const { name, email, body } = this.state;
    axios.post("https://jsonplaceholder.typicode.com/comments", { name, email, body }).then((res) => {
      console.log(res);
      this.setState({
        name: "",
        email: "",
        body: "",
        looding: false,
      });
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmitting} disabled={true}>
        <div className="form form--POST">
          <input type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChanging} />
          <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChanging} />
          <textarea name="body" placeholder="Enter Body" value={this.state.body} onChange={this.handleChanging}></textarea>
          <button type="submit" disabled={this.state.looding}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default POST;
