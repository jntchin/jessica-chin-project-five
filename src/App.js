import React, {Component} from 'react';
import './App.css';
import axios from 'axios';



class App extends Component {

  constructor(){
    super();

    this.state = {
      priorEdits: [],
    }
  }

  componentDidMount (){
    //make AJAX request
    axios ({
      method: 'GET',
      url: 'http://api.grammarbot.io/v2/check?api_key=KS9C5N3Y&text=&language=en-CA',
      dataResponse: 'JSON',
      params: {
        key: 'KS9C5N3Y',
        format: 'JSON'
      }
    }).then((results) =>{
      console.log('sup');
      results = results.data.sentences
      this.setState({
        priorEdits: results,
      })
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Grammarist</h1>
        <p>Type a sentence below</p>
        <form action="">
          <input type="text"/>
        </form>
        <button>Check my grammar!</button>
        <button>Hide my shame</button>
      </div>
    );
  }
}



export default App;
