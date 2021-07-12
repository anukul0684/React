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
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position), //gets the latitude and longitude
      (err) => console.log(err) //gets the error message when unable to find geo location
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
