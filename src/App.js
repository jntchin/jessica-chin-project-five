import React, {Component} from 'react';
import './styles/App.scss';
import axios from 'axios';
import Qs from 'qs';
import GrammarForm from './GrammarForm';
import ResetButton from './ResetButton';
// import firebase from './firebase';


// const dbRef = firebase.database().ref();




class App extends Component {
  constructor(){
    super();

    this.state = {
      inputField: '',
      userInput: '',
      savedInput: '',
      edits: [],
      charsLeft: 50000,
      perfectSentence: '',
    }
  }

  //axios call
  checkMyGrammar = () => {
    axios ({
      method: 'GET',
      url: 'http://proxy.hackeryou.com',
      dataResponse: 'JSON',
      paramsSerializer: function(params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
      },
      params: {
        reqUrl: 'http://api.grammarbot.io/v2/check',
        params: {
            queryParam: this.state.userInput,
            key: 'KS9C5N3Y',
            format: 'JSON',
            text: this.state.userInput,
            language: 'en-CA',
        }, 
        proxyHeaders: {
          'header_params': 'value',
        },
        xmlToJSON: false,
      }
    }).then((results) => {
      this.setState({
        edits: results.data.matches
      })
      if (results.data.matches === []){
        this.setState({
          perfectSentence: 'You wrote a perfect sentence',
        })
      } 
    }) 
    console.log(this.state);
  }

  //when the user types in the form
  handleChange = (event) => {
    const charCount = event.target.value.length;
    const charLeft = 50000 - charCount;
    this.setState({
      inputField: event.target.value,
      userInput: event.target.value,
      charsLeft: charLeft,
    })
  }

//when the user clicks the submit button
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      savedInput: this.state.inputField,
      inputField: '',
    })
    if (this.state.charsLeft <= 49975){
      this.checkMyGrammar();
      this.setState({
        userInput: event.target.value,
      })
    }
    else {
      this.setState({
        userInput: 'Try a different sentence!',
      })
    }
  }

  

  //functions for the "hide my shame" button
  reset(){
    this.setState({
      inputField: '',
      userInput: '',
      edits: [],
    })
  }
  
  handleReset = (event) => {
    event.preventDefault();
    this.reset();
  }

  characterCountMessage = () => {
      //if the number of characters left is 50,000 return go ahead and write something, don't print userInput
    if (this.state.charsLeft === 50000) {
      return 'Go ahead and write something!'
    //if the number of characters left is 49,975-49,999 print must be at least 25 characters
    } else if (this.state.charsLeft <= 49999 && this.state.charsLeft > 49975){
      return 'Must be at least 25 characters'
      //if the number of characters left is 49,974 or less, print the userInput
    } else if (this.state.charsLeft <= 49975){
      return null 
      //if the number of characters left is 0, write limit of 50,000 characters, don't render userInput
    } else if (this.state.charsLeft === 0){
      return (`You've hit the character limit!`)
    }
  }

 
  render(){
    // const perfectSentence = 'You wrote a perfect sentence! Good job!'
    return (
      <div className="App">
        <header>
          <h1>Grammarist</h1>
          <h2>Let me tell you what <span>you're</span> your problem is!</h2>
          <p>Type a sentence below.</p>
        </header>
        
        {/* run the axios call in the form component */}
        <GrammarForm run={this.checkMyGrammar} handleChange = {this.handleChange} handleSubmit={this.handleSubmit} inputField={this.state.inputField} charsLeft={this.state.charsLeft} userInput={this.state.userInput} />

        <div className="errors"> 
           {/* if the user writes a perfect sentence */}
    
          {/* add error handling messages if necessary */}
          <p className="errorHandling">{this.characterCountMessage()}</p>

          {/* map over the axios call results to find the error messages */}
          <ul>{this.state.edits.map((errorMessages, index) =>{
            return(
              <li key={index}>
                <p className="savedInput">{this.state.savedInput}</p>
                {/* <p className="shortMessage">{errorMessages.shortMessage}</p> */}
                <p className="message">{errorMessages.message}</p>
              </li>
              ) 
            })}
          </ul>
          
        </div>
        
        {/* reset the form */}
        <ResetButton handleReset={this.handleReset} />

      </div>
    );
  }
}

export default App;