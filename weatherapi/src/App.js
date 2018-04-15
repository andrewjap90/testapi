import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

const api = "https://api.met.no/weatherapi/locationforecast/1.9/?lat=60.10;lon=9.58;msl=70"

class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  componentDidMount() {
    axios.get(api)
    console.log();
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
