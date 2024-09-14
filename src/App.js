import "./App.css";
import React from "react";

// import Form from "./Classes-Labs/Lab-4/TaskOne/Form";
// import { MyProvider } from "./Classes-Labs/Lab-4/TaskTwo/Context";
// import ComponentOne from "./Classes-Labs/Lab-4/TaskTwo/ComponentOne";
// import Fetch from "./Classes-Labs/Lab-4/TaskThree/Fetch";
// import POST from "./Classes-Labs/Lab-4/TaskFour/POST";
import Form from "./Function-Lab5/TaskOne/Form";
import Products from "./Function-Lab5/TaskTwo/Products";
import { ComponentProvider } from "./Function-Lab5/TaskThree/ComponentContext";
import ComponentOne from "./Function-Lab5/TaskThree/ComponentOne";
import Counter from "./Function-Lab5/TaskFour/Counter";
import UserNameInput from "./Function-Lab5/TaskFive/UserNameInpu";
import CleanUp from "./Function-Lab5/TaskSix/CleanUp";
import WindowResizeComponent from "./Function-Lab5/TaskSeven/MouseEvents";
import Fetch from "./Function-Lab5/TaskEight/Fetch";
import Search from "./Function-Lab5/TaskNine/Search";
function App() {
  return (
    <div>
      {/* Task One */}
      {/* <Form /> */}
      {/* <MyProvider
        value={{
          name: "Mohamed",
          age: 21,
          BD: "18/11/2002",
          collage: "Computer Science & Info - Menofia Unviersity",
          skills: ["HTML", "CSS", "JS", "React"],
        }}
      >
        <ComponentOne/>
      </MyProvider>
            <POST />

      <Fetch /> */}

      {/* <Form/> */}
      <Products />

      <ComponentProvider
        value={{
          name: "Mohamed",
          age: 21,
          BD: "18/11/2002",
          collage: "Computer Science & Info - Menofia Unviersity",
          skills: ["HTML", "CSS", "JS", "React"],
        }}
      >
        <ComponentOne />
      </ComponentProvider>
      <br />
      <hr />
      <hr />
      <hr />
      <br />
      <Counter />
      <br />
      <hr />
      <hr />
      <hr />
      <br />
      <UserNameInput />
      <br />
      <hr />
      <hr />
      <hr />
      <br />
      <CleanUp />
      <br />
      <hr />
      <hr />
      <hr />
      <br />
      <WindowResizeComponent/>
      <br />
      <hr />
      <hr />
      <hr />
      <br />
      <Search/>
      <br />
      <hr />
      <hr />
      <hr />
      <br />
<Fetch/>
    </div>
  );
}

export default App;
