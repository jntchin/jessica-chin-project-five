import React from 'react';

export default class RemovableDiv extends React.Component {

    // constructor() {
    //     super();
    //   }

    render(){
        if (this.props.edits.length > 0){
            return(
                <div className="errors"> 
                    {/* if the user writes a perfect sentence
                    <p>{this.props.perfectSentence === true ? `You wrote a good thing` : null}</p> */}
                    
                    {/* error handling messages if necessary */}
                    <p className="errorHandling">{this.props.characterCountMessage()}</p>

                    {/* display the user's submitted sentence on the page */}
                    <p className="savedInput">{this.props.savedInput}</p>

                    {/* map over the axios call results to find the error messages */}
                    <ul>{this.props.edits.map((errorMessages, index) =>{
                        return(
                        <li key={index}>
                            {/* <p className="shortMessage">{errorMessages.shortMessage}</p> */}
                            <p className="message">{errorMessages.message}</p>
                        </li>
                        ) 
                        })}
                    </ul>  
                </div>
            )
        } else if (this.props.edits.length < 0) {
            return(
                <div>
                    <p>you did it</p>
                </div>
            )
        } 
        else {
            return(
                <div>
                    <p>it's not working</p>
                </div> 
            )
        } 
    }
}