import React, { useState, useRef, useEffect } from "react";

const SignUp = ({ handleShownForm }) => {
  const [signUp, setSignup] = useState({ userName: "", email: "", password: "" });
  const [isSignUp, setIsSignUp] = useState(false);
  const nameInputRef = useRef();

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleSignUp = () => {
    setSignup({ ...signUp, createdAt: new Date().toISOString() });
    setIsSignUp(true);
  };
  const handleChange = (e) => {
    setSignup({ ...signUp, [e.target.name]: e.target.value });
  };
  return (
    <>
      {isSignUp ? (
        <>
          <h1>Signup Successfully</h1>
          <p>Username: {signUp.userName}</p>
          <p>Email: {signUp.email}</p>
          <p>Created At: {signUp.createdAt}</p>
        </>
      ) : (
        <>
          <h1>Signup</h1>
          <input type="text" placeholder="User Name" name="userName" value={signUp.userName} onChange={handleChange} ref={nameInputRef} />
          <input type="email" placeholder="Email" name="email" value={signUp.email} onChange={handleChange} />
          <input type="password" placeholder="Password" name="password" value={signUp.password} onChange={handleChange} />
          <button onClick={handleSignUp}>Signup</button>
          <button onClick={handleShownForm}>Already have An Account</button>
        </>
      )}
    </>
  );
};
export default SignUp;

