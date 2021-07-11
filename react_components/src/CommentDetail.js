import React from "react";
//import faker
//import faker from "faker";

const CommentDetail = (props) => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.authorImage} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

//make it available to use as a component by rest of the project
export default CommentDetail;
