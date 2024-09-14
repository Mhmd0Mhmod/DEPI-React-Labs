import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
const Form = () => {
  const [form, setForm] = useState(true);

  function handleShownForm() {
    setForm((form) => !form);
  }
  return (
    <>
      <div className="form">{form ? <Login handleShownForm={handleShownForm} /> : <SignUp handleShownForm={handleShownForm} />}</div>;
    </>
  );
};

export default Form;
