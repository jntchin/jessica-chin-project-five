import React from 'react';


export default class GrammarForm extends React.Component {
    
    render(){
        return(
            <form action="">
                <input 
                    type="text" 
                    onChange={this.props.handleChange}
                    value={this.props.userInput}
                />
                <button onClick={this.props.handleSubmit} type="submit">Check my grammar!</button>
            </form>
        )
    }


}


          //take the results and pull out the results. Store that in a variable called edits
          // const edits = [];
          //replace this console log with a way to print this to the page. Does it need to be here or at the handleSubmit stage??
          // console.log(edits.userInput, edits.errors)