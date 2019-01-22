import React, { Component } from 'react';

import Button from './Button'
import Result from './Result';

class App extends Component {

  state = {
    counter: 0
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    return (
      <div>
        <Button
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
