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
                    <button onClick={this.props.handleSubmit} disabled={this.props.charsLeft > 49975 ? "disabled" : null}  type="submit">Check my grammar!</button>
                </form>
            </div>
        )
    }
}