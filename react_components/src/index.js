//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
//import faker
import faker from "faker";
//import CommentDetail
import CommentDetail from "./CommentDetail"; // done by webpack to search file ending the .js for you

//Create a React Component
const App = () => {
  //Parent Component
  //Props/properties - System for passing data from a PARENT Component to a CHILD Component to customize/configure a CHILD Component
  // customize how the component look or how the user interacts with them
  return (
    <div className="ui container comments">
      {/* if using component inside a component, it has to be called as JSX tag like HTML element tag. */}
      {/* Child/Nested components: */}
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

//Take the React Component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
