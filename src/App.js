import React, {Component} from 'react';
import './styles/App.scss';
import axios from 'axios';
import Qs from 'qs';
import GrammarForm from './GrammarForm';
import ResetButton from './ResetButton';
// import firebase from './firebase';


class App extends Component {
  constructor(){
    super();

    this.state = {
      inputField: '',
      userInput: '',
      edits: [],
      chars_left: 50000,
    }
  }


  //axios call
  checkMyGrammar = () => {
    console.log(this.state)
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
    })
  }

  //when the user types in the form
  handleChange = (event) => {
    const charCount = event.target.value.length;
    const charLeft = 50000 - charCount;
    this.setState({
      inputField: event.target.value,
      userInput: event.target.value,
      chars_left: charLeft,
    })
  }

//when the user clicks the submit button
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      inputField: '',
    })
    if (this.state.chars_left <= 49975){
      this.checkMyGrammar();
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
      //if charCount is 50,000 return go ahead and write something, don't print userInput
    if (this.state.chars_left === 50000) {
      return 'Go ahead and write something'
    //if charCount is 49,975-49,999 print must be at least 25 characters
    } else if (this.state.chars_left <= 49999 && this.state.chars_left > 49975){
      return 'Must be at least 25 characters'
      //if charCount is 49,974 or less, print the userInput
    } else if (this.state.chars_left <= 49975){
      return null
      //if charCount is 0, write limit of 50,000 characters, don't render userInput
    } else if (this.state.chars_left === 0){
      return (`You've hit your character limit`)
    }
  }

 
  render(){
    return (
      <div className="App">
        <h1>Grammarist</h1>
        <h2>Let me tell you what <span>you're</span> your problem is!</h2>
        <p>Type a sentence below.</p>
        <GrammarForm run={this.checkMyGrammar} handleChange = {this.handleChange} handleSubmit={this.handleSubmit} inputField={this.state.inputField} chars_left={this.state.chars_left}/>
        <div className="errors"> 
          <p>{this.characterCountMessage()}</p>
          <ul>{this.state.edits.map((errorMessages, index) =>{
            return(
              <li key={index}>
                <p className="shortMessage">{errorMessages.shortMessage}</p>
                <p className="message">{errorMessages.message}</p>
              </li>
              ) 
            })}
          </ul>
        </div>
        <ResetButton handleReset={this.handleReset} />
      </div>
    );
  }
}

export default App;


{/* 
{this.state.edits.map((errorMessages) => (errorMessages.shortMessage = "")) ? null : <span className="shortMessageSpan">You've got a</span>}
 */}

 {/* 
{(errorMessages.shortMessage = "") ? null : <span className="shortMessageSpan">You've got a</span>}{errorMessages.shortMessage} */}