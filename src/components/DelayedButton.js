import React, { Component } from 'react';

class DelayedButton extends Component {
    
    handleClick = (event) => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
    
    render() {
        return (
            <div>
                return <button onClick={this.handleClick}>Delayed</button>
            </div>
        );
    }
}

export default DelayedButton;

