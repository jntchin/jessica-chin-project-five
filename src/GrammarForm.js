import React from 'react';


export default class GrammarForm extends React.Component {
    render(){
        return(
            <div>
                <form action="">
                    <textarea
                        rows="5"
                        onChange={this.props.handleChange}
                        value={this.props.inputField}
                    >
                    </textarea>
                    <button onClick={this.props.handleSubmit} disabled={this.props.charsLeft >= 49975 ? "disabled" : null}  type="submit">Check my grammar!</button>
                </form>
            </div>
        )
    }
}


          //take the results and pull out the results. Store that in a variable called edits
          // const edits = [];
          //replace this console log with a way to print this to the page. Does it need to be here or at the handleSubmit stage??
          // console.log(edits.userInput, edits.errors)