import React, {Component} from 'react';
import './styles/App.scss';
import axios from 'axios';
import Qs from 'qs';
import GrammarForm from './GrammarForm';
import ResetButton from './ResetButton';
import RemovableDiv from './RemovableDiv'


class App extends Component {
  constructor(){
    super();

    this.state = {
      inputField: '',
      userInput: '',
      savedInput: '',
      edits: [],
      charsLeft: 50000,
      newEditState: '',
      wrongWord:'',
    }
  }

  //axios call
  checkMyGrammar = () => {
    axios ({
      method: 'GET',
      url: 'https://proxy.hackeryou.com',
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
        newEditState: this.state.edits,
        wrongWord: results.data.matches.map((misspelling) => {  
          return this.state.userInput.slice(misspelling.context.offset, misspelling.context.offset + misspelling.context.length)
        })
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
    }
  }

  
  //functions for the "hide my shame" button

  reset(){
    this.setState({
      inputField: '',
      userInput: '',
      edits: [],
      savedInput: '',
    })
  }
  
  handleReset = (event) => {
    event.preventDefault();
    this.reset();
  }

  
  render(){
    return (
      <div className="App">
          <div className="wrapper">
            <header>
              <h1>Grammarist</h1>
              <h2>Let me tell you what <span>you're</span> your problem is!</h2>
              <p>Type a sentence below.</p>
            </header>
            
            {/* run the axios call in the form component upon submit */}
            <GrammarForm run={this.checkMyGrammar} handleChange = {this.handleChange} handleSubmit={this.handleSubmit} inputField={this.state.inputField} charsLeft={this.state.charsLeft} userInput={this.state.userInput} handleReset={this.onButtonClick}/>
    
            {/* render the information to the page */}
            <RemovableDiv savedInput={this.state.savedInput} edits={this.state.edits} newEditState={this.state.newEditState} charsLeft={this.state.charsLeft} wrongWord={this.state.wrongWord} />

            {/* reset the form when button is clicked */}
            <ResetButton handleReset={this.handleReset} />
          </div>
          <footer>
            <p>&copy; 2019 Jessica Chin. Grammar by GrammarBot.</p>
          </footer>
      </div>
    );
  }
}

export default App;