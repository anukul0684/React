//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a React Component
const App = () => {
  // arrow function or traditional like const App = function() { };
  return (
    /* return returns jsx code */
    <div>
      {/* This is jsx comment */}
      <label for="name" class="label">
        Enter Name
      </label>
      <input id="name" type="text" />
      <button
        style={{
          backgroundColor: "#55f",
          color: "#fff",
          border: "1px solid #000",
        }}
      >
        Submit
      </button>
      {/* first {} states that we want to reference a js variable inside our jsx */}
      {/* second {} states that we want to add a js object having keys and values, 
                and just like js we have css properties written same as in js code*/}
    </div>
  );
  //   <div> Hi there!</div>;
};

//Take the React Component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
