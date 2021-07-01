//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Click on Me!";
}

//Create a React Component
const App = () => {
  // arrow function or traditional like const App = function() { };

  /* Diff between HTML and JSX 3: JSX referencing js variables */
  /* Limitations in referencing js variables:
       We are not allowed to use a js object and reference it in JSX as js objects are not valid as a React child 
       React child means showing js object inside a React component and React does not know how to handle it*/

  //object
  const buttonText = { text: "Click Me" };

  /*
    const style = {
    backgroundColor: "#55f",
    color: "#fff",
    border: "1px solid #000",
  };
  */

  //text
  //const buttonText = [10, 20];
  //const buttonText = ["Hi", "There"];
  //const buttonText = "Click Me";
  //const buttonText = 123456;

  const labelText = "Enter Name: ";

  return (
    /* return returns jsx code */
    <div>
      {/* This is jsx comment */}
      {/* Diff between HTML and JSX 1: Instead of 'class' in JSX we write 'className' as class is a js keyword. 
          To avoid confusion, we use className since old times */}
      {/* Diff between HTML and JSX 4: Instead of 'for' in JSX we write 'htmlFor' as for could be read as for loop*/}

      <label htmlFor="name" className="label">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button
        style={{
          backgroundColor: "#55f",
          color: "#fff",
          border: "1px solid #000",
        }}
      >
        {/* {getButtonText()} */}
        {/* {} not indicating js object, instead it means we want to reference a js variable here.  */}
        {buttonText.text}{" "}
        {/** correct way to get js object by calling its property */}
        {/* Submit */}
      </button>

      {/* Diff between HTML and JSX 2:Converting inline style to JSX format
          first {} states that we want to reference a js variable inside our jsx */}
      {/* second {} states that we want to add a js object having keys and values, 
                and just like js we have css properties written same as in js code*/}

      {/* half community convention and half jsx convention. put non-jsx in '' and jsx in "" */}
    </div>
  );
  //   <div> Hi there!</div>;
};

//Take the React Component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
