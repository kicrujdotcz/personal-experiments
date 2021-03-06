import React, { Component } from 'react';

export class Counter extends Component {
  displayName = Counter.name

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.incrementCounterBy10 = this.incrementCounterBy10.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }
  incrementCounterBy10() {
    this.setState({
      currentCount: this.state.currentCount + 10
    });
  }
  decrementCounter() {
    this.setState({
      currentCount: this.state.currentCount - 1
    });
  }
  


  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p>Current count: <strong>{this.state.currentCount}</strong></p>

        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.incrementCounterBy10}>Increment +10</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }
}
