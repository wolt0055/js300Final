import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FindWeather from './FindWeather.js';

class App extends Component {
  
// button onclick that calls the API?
// input field that is used
  // componentDidMount() {
    // fetch('http://api.openweathermap.org/data/2.5/weather?q=Frankfurt&APPID=ce2f30aab63d88137a39fc6ba70c3bdc')
    // .then(response => response.json())
    // .then(json => {
    //   let weather = json;
    //
    //   this.setState({weather: weather});
    // });
  // }
// have an app gif that rotates between sun, snowflake, cloud, rain?
// components: weather type / image, return current weather, 5 day forecast
// figure out how to get today's date call
// get ip address from user? ha
// Will I need to include my API key for the open weather app, or should I build a prompt into the app?
// need to be deployed, for free by github pages, can also use firebase hosting (6/5 lecture discusses)
// create repo in github and/or firebase?
// in my repo i can type create-react-app ./

//   fetchWeather = (input) => {
//     // When button is clicked, take the input and call the API to return weather
//     // Also clear the state of inputText so the input field is reset
//     console.log("fetch call parameter: " + input);
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=ce2f30aab63d88137a39fc6ba70c3bdc`)
//     .then(response => response.json())
//     .then(json => {
//       let weather = json;
//       this.setState({weather: weather});
//       console.log(weather);
//       console.log(weather.weather[0].main);
//     });
//     this.setState({inputText: ""})
//   }
// // update state when the input is changed, nobinding needed bc of arrow function
//   onInputChange = (e) => {
//     e.preventDefault();
//     const inputText = e.target.value;
//     this.setState((prevState, props) => {
//       return {
//         inputText: inputText
//       };
//     });
//   }

  render() {
    // console.log("Weather is " + this.state.weather.name);
    // console.log(this.state.inputText);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WEATHER NOTIFICATION SYSTEM</h1>
        </header>

        <FindWeather />

      </div>
    );
  }
}

export default App;
