import React from 'react';

export default class ResetButton extends React.Component {
    render(){
        return(
    <button onClick={this.props.handleReset} className="resetButton" type="submit">Check a new sentence!</button>
        )
    }
}