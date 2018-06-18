import React, { Component } from 'react';

class FindWeather extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: '',
      weather: {}
    };
  }

  fetchWeather = (input) => {
    // When button is clicked, take the input and call the API to return weather
    // Also clear the state of inputText so the input field is reset
    console.log("fetch call parameter: " + input);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=ce2f30aab63d88137a39fc6ba70c3bdc`)
    .then(response => response.json())
    .then(json => {
      let weather = json;
      this.setState({weather: weather});
      console.log(weather);
      console.log(weather.weather[0].main);
      console.log(typeof weather);
    });
    this.setState({inputText: ""})

  }
// update state when the input is changed, nobinding needed bc of arrow function
  onInputChange = (e) => {
    e.preventDefault();
    const inputText = e.target.value;
    this.setState((prevState, props) => {
      return {
        inputText: inputText
      };
    });
  }


  render() {
    return(
      <div>
        <br/>
        <input
          onChange={this.onInputChange}
          value={this.state.inputText} />
        <button onClick={() => this.fetchWeather(this.state.inputText)}>Search</button>
        <h3>Results:</h3>
        <h5>{this.state.weather.base}</h5>

      </div>
    );
  }
}

export default FindWeather;
