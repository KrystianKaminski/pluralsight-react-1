import React from 'react'

class Button extends React.Component {

    state = {
        counter: 0
    }

    render() {
        return (
            <button>{this.state.counter}</button>
        )
    }
}

export default Button