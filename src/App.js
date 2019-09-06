import React, {Component} from 'react';
import './App.css';
import GrammarForm from './GrammarForm';
// import firebase from './firebase';


class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: '',
      edits: '',
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Grammarist</h1>
        <p>Type a sentence below</p>
        <GrammarForm grammarFunction={this.checkMyGrammar} myName='Jess' />
      </div>
    );
  }
}

export default App;
