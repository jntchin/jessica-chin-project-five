import React, {Component} from 'react';
import './App.css';
// import axios from 'axios';
// import Qs from 'qs';
import GrammarForm from './GrammarForm';
// import Button from './Button';

class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: '',
      edits: '',
    }
  }

  // checkMyGrammar = () => {
  //   console.log(this.state)
  //   axios ({
  //     method: 'GET',
  //     url: 'http://proxy.hackeryou.com',
  //     dataResponse: 'JSON',
  //     params: {
  //       reqUrl: 'http://api.grammarbot.io/v2/check?',
  //       paramsSerializer: function(params) {
  //         return Qs.stringify(params, {arrayFormat: 'brackets'})
  //       },
  //       xmlToJSON: false,
  //       proxyHeaders: {
  //         'header_params': 'value',
  //         key: 'KS9C5N3Y',
  //         format: 'JSON',
  //         text: this.state.userInput,
  //         language: '=en-CA'
  //       }
  //     }
  //   }).then((results) => {
  //     this.setState({
  //       edits: [results.sentence]
  //     })
  //   })
  // }

    

  render(){
    return (
      <div className="App">
        <h1>Grammarist</h1>
        <p>Type a sentence below</p>
        <GrammarForm grammarFunction={this.checkMyGrammar} myName='Jess' />
        {/* <Button /> */}
        <button>Hide my shame</button>
        <div>
          <p></p>
        </div>
      </div>
    );
  }
}



export default App;
