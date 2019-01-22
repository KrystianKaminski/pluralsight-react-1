import React, { Component } from 'react';

import Button from './Button'
import Result from './Result';

class App extends Component {

  state = {
    counter: 0
  }

  incrementCounter = (incrementValue) => {
    this.setState({
      counter: this.state.counter + incrementValue
    })
  }
  render() {
    return (
      <div>
        <Button
          incrementValue={1}
          onClickFunction={this.incrementCounter}
        />
        <Button
          incrementValue={5}
          onClickFunction={this.incrementCounter}
        />
        <Button
          incrementValue={10}
          onClickFunction={this.incrementCounter}
        />
        <Button
          incrementValue={100}
          onClickFunction={this.incrementCounter}
        />
        <Result
          counter={this.state.counter}
        />
      </div>
    );
  }
}

export default App;
