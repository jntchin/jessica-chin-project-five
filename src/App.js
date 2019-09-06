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
      console.log(results);
      this.setState({
        edits: results.data.matches,

        //map over this array of edits (has to go deeper)
        //right now it's an array of objects, but you want the string
      });
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

  render(){
    return (
      <div className="App">
        <h1>Grammarist</h1>
        <p>Type a sentence below</p>
        <GrammarForm run={this.checkMyGrammar} handleChange = {this.handleChange} handleSubmit={this.handleSubmit} myName='Jess'/>
        <div>
          <p>{this.state.userInput}</p>
        </div>
      </div>
    );
  }
}

export default App;
