import React from "react";
// function EventHanlderClass() {
//     function handleClick(){
//         console.log("Button has been clicked");
//     }
//   return (
//     <>
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   );
// }
// export default EventHanlderClass;
class EventHanlderClass extends React.Component {
    constructor(){
        super();
        this.state={
            welcome:'Gust'
        }
    }
  handleClick() {
    console.log("Button has been clicked");
  }
  render() {
    return <>
        <h1>{this.state.welcome}</h1>
        <button onClick={this.handleClick}>Click Me</button>
    </>;
  }
}
export default EventHanlderClass;
