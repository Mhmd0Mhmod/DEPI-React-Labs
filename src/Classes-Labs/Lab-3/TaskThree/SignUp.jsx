import React from "react";
class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      signedUp: false,
      userName: "",
      email: "",
      password: "",
      createdAt: "",
    };
  }

  handleUserNameChange = (e) => {
    this.setState({ userName: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSignup = () => {
    if (this.state.userName === "" || this.state.email === "" || this.state.password === "") return;
    this.setState({ signedUp: true, createdAt: new Date().toLocaleString() });
  };

  render() {
    const { handleShownForm } = this.props;
    return (
      <>
        {this.state.signedUp ? (
          <>
            <h1>Signup Successfully</h1>
            <p>Username: {this.state.userName}</p>
            <p>Email: {this.state.email}</p>
            <p>Created At: {this.state.createdAt}</p>
          </>
        ) : (
          <>
            <h1>Signup</h1>
            <input type="text" placeholder="Username" value={this.state.userName} onChange={this.handleUserNameChange} />
            <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
            <button onClick={this.handleSignup}>Signup</button>
            <button onClick={handleShownForm}>Already have An Account</button>
          </>
        )}
      </>
    );
  }
}
export default Signup;
