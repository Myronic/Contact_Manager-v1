import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
  
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
