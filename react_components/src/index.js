//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
//import faker
import faker from "faker";

//Create a React Component
const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00 PM</span>
          </div>
          <div className="text">Nice Blog Post!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00 PM</span>
          </div>
          <div className="text">Nice Blog Post!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00 PM</span>
          </div>
          <div className="text">Nice Blog Post!</div>
        </div>
      </div>
    </div>
  );
};

//Take the React Component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
