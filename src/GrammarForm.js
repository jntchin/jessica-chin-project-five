import React from 'react';
import axios from 'axios';
import Qs from 'qs';

export default class GrammarForm extends React.Component {
    
    constructor(){
        super();
    
        this.state = {
          userInput: '',
          edits: '',
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
          //take the results and pull out the results. Store that in a variable called edits
          const edits = [];
          //replace this console log with a way to print this to the page. Does it need to be here or at the handleSubmit stage??
          console.log(edits);
        })
      }

    handleChange = event => {
        this.setState({
          userInput: event.target.value,
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        this.checkMyGrammar();
        console.log('handleSubmit')
      }

    render(){
        return(
            <form action="">
                <p>{this.props.myName}</p>
                <input 
                    type="text" 
                    onChange={this.handleChange}
                    value={this.state.userInput}
                />
                <button onClick={this.handleSubmit} type="submit">Check my grammar!</button>
                <button>Hide my shame</button>
            </form>
        )
    }


}