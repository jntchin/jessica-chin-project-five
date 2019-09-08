import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Qs from 'qs';
import GrammarForm from './GrammarForm';
// import firebase from './firebase';


class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: '',
      //this will have the "shortMessage and message"
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
      // console.log(results);
      //Each grammatical error returns an object in array of matches. Two of the keys on each object (message and shortMessage) are to be printed to the page.
        // const objects = [...results.data.matches]
        // const messages = [].push(objects.keys(objects));
        // console.log(messages);
      console.log(results.data.matches);

      this.setState({
        edits: results.data.matches
        // edits: ([]).push((results.data.matches))
        // .map((results.data.matches).keys())        
        // ),
      })
      console.log(this.state);
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
    console.log(this.state);
  }

  render(){
    return (
      <div className="App">
        <h1>Grammarist</h1>
        <h2>Let me tell you what your problem is!</h2>
        <p>Type a sentence below</p>
        <GrammarForm run={this.checkMyGrammar} handleChange = {this.handleChange} handleSubmit={this.handleSubmit} myName='Jess'/>
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
      </div>
    );
  }
}

export default App;
