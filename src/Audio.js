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

    }

    render(){
        if (this.state.playClicked === true){
            return(
                <div className="audioButton">
                    <audio autoPlay controls src="https://s3.amazonaws.com/mobile.engineering.com/audio/19559.mp3" type="audio/mp3" />
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