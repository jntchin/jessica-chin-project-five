import React from 'react';


export default class GrammarForm extends React.Component {
    
    // constructor(){
    //     super();    
    //     this.state = {
    //       userInput: '',
    //       errors: '',
    //     }
    //   }

    render(){
        return(
            <form action="">
                <p>{this.props.myName}</p>
                <input 
                    type="text" 
                    onChange={this.props.handleChange}
                    value={this.props.userInput}
                />
                <button onClick={this.props.handleSubmit} type="submit">Check my grammar!</button>
                <button>Hide my shame</button>
            </form>
        )
    }


}


          //take the results and pull out the results. Store that in a variable called edits
          // const edits = [];
          //replace this console log with a way to print this to the page. Does it need to be here or at the handleSubmit stage??
          // console.log(edits.userInput, edits.errors)