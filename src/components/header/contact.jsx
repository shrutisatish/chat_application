import React from 'react';
import ReactCardFlip from 'react-card-flip';

import Front from './../card_front';
import Back from './../card_back';

/**
 * Component that displays contact information
 */
class Contact extends React.Component {
  constructor() {
     super();
       this.state = {
       isFlipped: false
     };
   }
   /**
    * This function handles the click on the contact's page and flips the component showing different information
    */
   handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

   render() {
     return (
     <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div key="front" onClick={this.handleClick}>
          <Front key="front"></Front>
        </div>
        <div key="back" onClick={this.handleClick}>
          <Back key="back"></Back>
        </div>
    </ReactCardFlip>
     )
   }
}

export default Contact;
