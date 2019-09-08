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
    this.setState({
      userInput: event.target.value,
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
        <h2>Let me tell you what <span>you're</span> your problem is!</h2>
        <p>Type a sentence below</p>
        <GrammarForm run={this.checkMyGrammar} handleChange = {this.handleChange} handleSubmit={this.handleSubmit} />
        <div>
          <p>{this.state.userInput}</p>
          <ul>{this.state.edits.map((errorMessages, index) =>{
            return(
              <li key={index}>
                <p>{errorMessages.shortMessage}</p>
                <p>{errorMessages.message}</p>
              </li>
            ) 
          })}</ul>
        </div>
        <ResetButton handleReset={this.handleReset} />
      </div>
    );
  }
}

export default App;
