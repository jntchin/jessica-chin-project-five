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
          dataResponse: 'JSONP',
          params: {
            reqUrl: 'http://api.grammarbot.io/',
            paramsSerializer: function(params) {
              return Qs.stringify(params, {arrayFormat: 'brackets'})
            },
            xmlToJSON: false,
            proxyHeaders: {
              'header_params': 'value',
              key: 'KS9C5N3Y',
              format: 'JSON',
              text: this.state.userInput,
              language: 'en-CA'
            }
          }
        }).then((results) => {
        //   this.setState({
        //     edits: [results.sentence]
        //   })
        console.log(results);
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
            </form>
        )
    }


}