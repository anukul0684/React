import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position), //gets the latitude and longitude
//     (err) => console.log(err) //gets the error message when unable to find geo location
//   );
//   return <div>Latitude: </div>;
// };

class App extends React.Component {
  //another special function with a special name that we can define inside the class component.
  //this function is not required by React. It is more of a function that belongs to JS language itself as supposed to a React specific thing.
  //particular to JS language, not specific to React.`
  //in a js class the constructor is the very first function anytime the instance of this class is created.
  //so whenever we will create an instance of this App component, this function will be called first automatically.
  //A magic function that is automatically and instantly called before anything else when ever the instance of this class is created.
  //constructor() is automatically called with props object. The same object that we saw in our functional component.
  constructor(props) {
    //we can use this function to initialize 'state'. There are another ways as well to initialize 'state'
    //before we do anything inside this function, we have to do one ceremonial step. As it is required because we have to do this.
    //we have to call a function called super() with props as its argument.

    super(props);

    this.state = {
      latitude: null, //default it to a sensible value which is here is a number
    };
    // this.state ={} is our state object that is going to eventually contain some different pieces of data and some different property that are very imp and relevant to our component that we are putting together
  }

  //React says we have to define render!! to return jsx
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position), //gets the latitude and longitude
      (err) => console.log(err) //gets the error message when unable to find geo location
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
