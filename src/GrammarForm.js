import React from 'react';

export default class GrammarForm extends React.Component {

    render(){
        return(
            <div className="form">
                <form action="" label="grammarForm">
                    <textarea
                        rows="4"
                        onChange={this.props.handleChange}
                        value={this.props.inputField}
                        label="text"
                        aria-label="enter your sentence here"
                    >
                    </textarea>
                    <button onClick={this.props.handleSubmit} disabled={this.props.charsLeft > 49975 ? "disabled" : null}  type="submit">Check my grammar!</button>
                </form>
            </div>
        )
    }
}