import React from 'react';

export default class Audio extends React.Component {

    constructor(){
        super()

        this.state = {
            playClicked : false
        }

    }    

    handleClick = (event) => {
        event.preventDefault()
        this.setState({
            playClicked : true,
        })
        console.log('clicked play');

    }

    render(){
        if (this.state.playClicked === true){
            return(
                <div className="audioButton">
                    <audio autoPlay controls>
                        <source src="https://s3.amazonaws.com/mobile.engineering.com/audio/19559.mp3" type="audio/mp3" />
                        Your browser does not support the audio tag.
                    </audio> 
                </div> 
            )
        } else {
            return(
                <div className="initialButton">
                    <button onClick={this.handleClick}>
                        &#9658;  
                    </button>
                    <p> listen to story</p>
                </div>              
            )
        }
    }
}