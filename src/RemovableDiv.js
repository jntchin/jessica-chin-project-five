import React from 'react';

export default class RemovableDiv extends React.Component {

    characterCountMessage = () => {
        //if the number of characters left is 50,000 return "go ahead and write something", don't print anything
      if (this.props.charsLeft === 50000) {
        return null
      //if the number of characters left is 49,975-49,999 print "must be at least 25 characters"
      } else if (this.props.charsLeft <= 49999 && this.props.charsLeft > 49975){
        return 'Must be at least 25 characters'
        //if the number of characters left is 49,974 or less, don't print an error message
      } else if (this.props.charsLeft <= 49975){
        return null 
        //if the number of characters left is 0, write limit of 50,000 characters, don't render userInput
      } else if (this.props.charsLeft === 0){
        return (`You've hit the character limit!`)
      }
    }

    render(){
        if (this.props.edits.length > 0){
            return(
                <div className="errors"> 
                    {/* display the user's submitted sentence on the page */}
                    <div className="userInput">
                        <p className="savedInput">{this.props.savedInput}</p>
                    </div>

                    {/* display the user's misspelled or incorrectly used words */}
                    <p className="errorMessage">Error(s) found:</p>
                    <ol>
                        {this.props.wrongWord.map((word, index) =>{
                            return(
                                <li key={index} className="wrongWordListItem">{word}</li>
                            )
                        })}
                    </ol>
                    {/* map over the array resulting from the axios call in order to find the error messages */}
                    <ul className="errorMessages">{this.props.edits.map((errorMessages, index) =>{
                        return(
                            <li key={index}>
                                {/* display the error message(s) on the page */}
                                <p className="message">{errorMessages.message}</p>
                            </li>
                        ) 
                        })}
                    </ul>  
                </div>
            )
            // if the resulting array has a length of less than 0, meaning it doesn't return any messages, print a message to the user
        } else {
            return(
                <div>
                    {/* error handling messages if necessary */}
                    <p className="errorHandling">{this.characterCountMessage()}</p>
                </div> 
            )
        } 
    }
}

