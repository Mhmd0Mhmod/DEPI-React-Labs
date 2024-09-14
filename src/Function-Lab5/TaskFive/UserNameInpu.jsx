import React, { useState } from "react";

const UserNameInput = () => {
  const [username, setUsername] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setGreeting(event.target.value);
  };

  return (
    <form className="text-center p-10">
      {greeting && <p> Hello, {greeting}!</p>}
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter your username" />
    </form>
  );
};

export default UserNameInput;
