import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    // const name = " myronic";
    // const num1 = 23;
    // const num2 = 43;
    // const flag = false;
    // let math;
    // if (flag) {
    //   math = (
    //     <h4>
    //       {num1}+{num2}= {num1 + num2}
    //     </h4>
    //   );
    // } else {
    //   math = null;
    // }

    //with jsx
    /*
      NOTE: ALL SCRIPTING IS DONE OUTSIDE THE RETURN FN.
    */
    return (
      <div className="App">
        <h1>The app component hello</h1>
        {/* {math} */}
      </div>
    );

    //without jsx the same part above will be written this way in react.
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "The app component")
    // );
  }
}

export default App;
