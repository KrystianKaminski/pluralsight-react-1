import React from 'react'

class Button extends React.Component {

    render() {
        return (
            <button
                onClick={() => this.props.onClickFunction(this.props.incrementValue)}
            >+{this.props.incrementValue}
            </button>
        )
    }
}

export default Button