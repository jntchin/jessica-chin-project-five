import React from 'react';

export default class GrammarForm extends React.Component {
    render(){
        return(
    <button onClick={this.props.handleReset} type="submit">Hide my shame</button>
        )
    }

}