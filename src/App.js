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
      userInput: '',
      edits: [],
      chars_left: 50000,
    }
  }


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

  handleChange = (event) => {
    const charCount = event.target.value.length;
    const charLeft = 50000 - charCount;
    this.setState({
      userInput: event.target.value,
      chars_left: charLeft
    }) 
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.checkMyGrammar();
  }

  reset(){
    this.setState({
      userInput: '',
      edits: [],
    })
  }
  
  handleReset = (event) => {
    event.preventDefault();
    this.reset();
  }

  render(){
    return (
      <div className="App">
        <h1>Grammarist</h1>
        <h2>Here's what <span>you're</span> your problem is!</h2>
        <p>Type a sentence below.</p>
        <GrammarForm run={this.checkMyGrammar} handleChange = {this.handleChange} handleSubmit={this.handleSubmit} />


{/* 
{this.state.edits.map((errorMessages) => (errorMessages.shortMessage = "")) ? null : <span className="shortMessageSpan">You've got a</span>}
 */}
{/* 
{(errorMessages.shortMessage = "") ? null : <span className="shortMessageSpan">You've got a</span>}{errorMessages.shortMessage} */}

        <div className="errors">
          {this.state.userInput.length === 0 ? <p>Go ahead, type something</p> : null}
          {/* {this.state.userInput.length.range(...1, 25) ? <p>Must be at least 25 characters</p> : null } */}
          {/* {50000 > this.state.userInput.length > 25 ? <p>{this.state.userInput}</p> : <p>Must be less than 50,000 characters</p>} */}
          {/* <p>{this.state.userInput}</p> */}
          <ul>{this.state.edits.map((errorMessages, index) =>{
            return(
              <li key={index}>
                <p className="shortMessage"></p>
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
