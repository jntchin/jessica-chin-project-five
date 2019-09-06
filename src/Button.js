import React from 'react';

export default class Button extends React.Component{


  clearThePage = () => {
   

  }

  
  handleClear = (event) =>{
    event.preventDefault();
    this.clearThePage();
  }

  render (){
    return (
      <button onClick={this.clearThePage} type="submit">Hide my shame</button>
      );
  }



  //write variable containing function to clear array of PriorEdits (or whatever variable you settle on) / delete everything off the page
  
  
  
  
}