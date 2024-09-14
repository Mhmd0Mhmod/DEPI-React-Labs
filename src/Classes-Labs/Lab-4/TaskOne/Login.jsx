import React, { createRef } from "react";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedin: false,
      userName: "",
      password: "",
      createdAt: "",
    };
    this.firstInput = createRef();
  }
  componentDidMount(){
    this.firstInput.current.focus();
  }

  handleUserNameChange = (e) => {
    this.setState({ userName: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = () => {
    if (this.state.userName === "" || this.state.password === "") return;
    this.setState({ loggedin: true, createdAt: new Date().toLocaleString() });
  };

  render() {
    const { handleShownForm } = this.props;
    return (
      <>
        {this.state.loggedin ? (
          <>
            <h1>Login Successfully</h1>
            <p>Username: {this.state.userName}</p>
            <p>Logged In At: {this.state.createdAt}</p>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <input type="text" placeholder="Username" value={this.state.userName} ref={this.firstInput} onChange={this.handleUserNameChange} />
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
            <button onClick={this.handleLogin}>Login</button>
            <button onClick={handleShownForm}>I Don't Have an Account</button>
          </>
        )}
      </>
    );
  }
}
export default Login;
