import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

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

  //constructor(props) { //**********************We don't need the constructor anymore********************

  //we can use this function to initialize 'state'. There are another ways as well to initialize 'state'
  //before we do anything inside this function, we have to do one ceremonial step. As it is required because we have to do this.
  //we have to call a function called super() with props as its argument.
  //super(props); //********************We don't need the constructor anymore********************

  //this is the only time we do direct assignment to this.state. After this use setState() to do the change, update or manipulate our this.state object's property.
  // this.state = { //*************************We don't need the constructor anymore********************
  //   latitude: null, //default it to a sensible value which is here is a number
  //   longitude: null,
  //   errorMessage: "",
  // };

  // this.state = {} is our state object that is going to eventually contain some different pieces of data and some different property that are very imp and relevant to our component that we are putting together
  // Note - componentDidMount() - putting below code in there instead of here.
  // Note - constructor(props) putting this function here instead of render() to avoid multiple times calling as render is called many times.
  // window.navigator.geolocation.getCurrentPosition(
  //   (position) => {
  //     //console.log(position)
  //     //we call setState
  //     this.setState({ latitude: position.coords.latitude });
  //     this.setState({ longitude: position.coords.longitude });
  //     //never ever do this below thing
  //     //this.state.latitude = position.coords.latitude;
  //   }, //gets the latitude and longitude
  //   (err) => {
  //     console.log(err); //gets the error message when unable to find geo location
  //     this.setState({
  //       errorMessage:
  //         err.message +
  //         " Some Error Occurred. We are sorry. We are unable to provide Latitude and Longitude this moment.",
  //     });
  //   }
  // );
  //}

  // ************* We don't need the constructor anymore. Below is the condensed code equivalent to constructor function and initializing state  ********************
  state = { latitude: null, longitude: null, errorMessage: "" };

  //componentDidMount() is called one time immediately after the render() method is called when the component instance is created
  componentDidMount() {
    console.log("My component was rendered to the screen");
    // putting this function here instead of render() to avoid multiple times calling as render is called many times.
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }), //gets the latitude and longitude
      (err) =>
        this.setState({
          errorMessage:
            err.message +
            " Some Error Occurred. We are sorry. We are unable to provide Latitude and Longitude this moment.",
        }) //gets the error message or we say handling errors gracefully
    );
  }

  //componentDidUpdate() is called everytime after the re-render occurs. So technically render() method is called before this method.
  // componentDidUpdate() {
  //   console.log("My component got updated - it re-rendered");
  // }

  //React says we have to define render!! to return jsx
  render() {
    // return (
    //   <div>
    //     <h1>Latitude: {this.state.latitude}</h1>
    //     <h2>Longitude: {this.state.longitude}</h2>

    //     <h3 style={{ color: "#f00" }}>Error: {this.state.errorMessage}</h3>
    //   </div>
    // );
    if (
      this.state.errorMessage &&
      !(this.state.latitude || this.state.longitude)
    ) {
      return (
        <div>
          <h3 style={{ color: "#f00" }}>Error: {this.state.errorMessage}</h3>
        </div>
      );
    }
    if (
      !this.state.errorMessage &&
      (this.state.latitude || this.state.longitude)
    ) {
      return (
        <SeasonDisplay
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
        // <div>
        //   <h1>Latitude: {this.state.latitude}</h1>
        //   <h1>Longitude: {this.state.longitude}</h1>
        // </div>
      );
    }

    return (
      <Spinner />
      // <div>
      //   <h1>Page is Loading. Please wait...</h1>
      // </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
