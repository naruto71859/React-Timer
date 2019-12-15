import Timer from "./components/timer";

import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentime: 0,
      reset: 0,
      isrunning: false
    };
  }
  startStop = () => {
    if (this.state.isrunning) {
      clearInterval(interval);
      this.setState({isrunning:false})
    } else {
       const interval = setInterval(() => {
        this.setState({ currentime: this.state.currentime + 1 , isrunning:true});
      }, 1000);
    }
  };
  handelReset = () => {
    clearInterval(interval);
    this.setState({isrunning:false , currentime:0})  };

  render() {
    return (
      <div>
        <Timer
          ms={this.state.currentime}
          reset={this.handelReset}
          startStop={this.startStop}
          vector={this.state.isrunning}
        />
      </div>
    );
  }
}
