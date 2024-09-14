import { useEffect, useRef, useState } from "react";

const Login = ({ handleShownForm }) => {
  const [login, setLogin] = useState({ userName: "", password: "" });
  const [isLogin, setIsLogin] = useState(false);
  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    setLogin({ ...login, createdAt: new Date().toISOString() });

    setIsLogin(true);
  };

  return (
    <>
      {isLogin ? (
        <>
          <h1>Login Successfully</h1>
          <p>Username: {login.userName}</p>
          <p>Logged In At: {login.createdAt}</p>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <input type="text" placeholder="User Name " name="userName" value={login.userName} onChange={handleChange} ref={emailInputRef} />
          <input type="password" placeholder="Password" name="password" value={login.password} onChange={handleChange} />
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleShownForm}>I Don't Have an Account</button>
        </>
      )}
    </>
  );
};
export default Login;
