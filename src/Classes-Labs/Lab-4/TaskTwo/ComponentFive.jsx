import React, { Component } from "react";
import { MyConsumer } from "./Context";

class ComponentFive extends Component {
  render() {
    return (
        <>
        <MyConsumer>
          {(value) => (
            <div className="card">
              <h3>My Name : {value.name}</h3>
              <p>age : {value.age}</p>
              <p>birthday : {value.BD}</p>
              <p>Collage : {value.collage}</p>
              <ul>
                {value.skills?.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
        </MyConsumer>
        {this.props.children}
      </>
    );
  }
}

export default ComponentFive;
