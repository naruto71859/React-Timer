import React, { Component } from "react";

export default class Timer extends Component {
  humanReadable(number) {
    // this is a classic funtion that take an input in this case is a number
    // and return in the output a text

    let nb_hours = Math.floor(number / 3600);
    let nb_minute = Math.floor((number % 3600) / 60);
    let nb_sec = Math.floor((number % 3600) % 60);

    let time = `${nb_hours.toString().replace(/^(\d)$/, "0$1")}:
                ${nb_minute.toString().replace(/^(\d)$/, "0$1")}:
                ${nb_sec.toString().replace(/^(\d)$/, "0$1")}`;
    return time;
  }

  

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="Timer">
            <h1>{this.humanReadable(this.props.ms)}</h1>
          </div>
          <div className="time-details">
            <span className="Hours">Hours</span>
            <span className="Minutes">Minutes</span>
            <span className="Seconds">Seconds</span>
          </div>
          <div className="lesboutons">
              <button className="btn-start"
                    onClick={this.props.startStop}
              > <strong> {this.props.vector? 'STOP':'START'}</strong></button>
              <button className="btn-reset"
                    onClick={this.props.reset}
              > <strong> RESET</strong></button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
