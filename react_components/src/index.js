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
      <CommentDetail
        authorImage={faker.image.avatar()}
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice Blog Post"
      />
      <CommentDetail
        authorImage={faker.image.avatar()}
        author="Alex"
        timeAgo="Yesterday at 2:00PM"
        content="Well said!"
      />
      <CommentDetail
        authorImage={faker.image.avatar()}
        author="Jane"
        timeAgo="On Dec 12, 2020 at 1:00PM"
        content="Totally agree..."
      />
      <CommentDetail
        authorImage={faker.image.avatar()}
        author="Simon"
        timeAgo="On Monday Jul 05, 2021 at 2:00PM"
        content="Keep sharing"
      />
      <CommentDetail
        authorImage={faker.image.avatar()}
        author="Rose"
        timeAgo="On Tuesday Jul 06, 2021 at 2:00PM"
        content="Keep it up!"
      />
      <CommentDetail
        authorImage={faker.image.avatar()}
        author="Jasmine"
        timeAgo="On Thursday Jul 08, 2021 at 2:00PM"
        content="I love your ideas"
      />
    </div>
  );
};

//Take the React Component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
