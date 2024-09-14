import axios from "axios";
import React, { Component } from "react";

class Fetch extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => this.setState({ data: [...response.data] }))
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <div className="all-cards">
        {this.state.data.map((card) => (
          <div className="card" key={card.id}>
            <h3>{card.name}</h3>
            <span>{card.email}</span>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Fetch;
