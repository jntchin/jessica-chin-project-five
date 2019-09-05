import React from 'react';

export default class GrammarForm extends React.Component {

    constructor(){
        super();
    
        this.state = {
          userInput: '',
          edits: '',
        }
      }

    handleChange = event => {
        this.setState({
          userInput: event.target.value,
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        this.props.grammarFunction();
      }

    render(){
        return(
            <form action="" onSubmit={this.handleSubmit}>
                <p>{this.props.myName}</p>
                <input 
                    type="text" 
                    onChange={this.handleChange}
                    value={this.state.userInput}
                />
            </form>
        )
    }


}