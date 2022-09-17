import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  Decrement() {
    if (this.state.counter === 0) {
      this.setState({
        counter: 0,
      });
    } else
      this.setState({
        counter: this.state.counter - 1,
      });
  }

  Reset() {
    this.setState({
      counter: (this.state.counter = 0),
    });
  }

  Increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Counter Application</h1>
        <h2> {this.state.counter} </h2>
        <button onClick={() => this.Decrement()}> Decrement </button>
        <button onClick={() => this.Reset()}> Reset </button>
        <button onClick={() => this.Increment()}> Increment </button>
      </div>
    );
  }
}

export default Counter;
