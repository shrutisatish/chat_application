import React from 'react';
import PropTypes from 'prop-types';
/**
 * Functional component that displays the username and the message content
 */
class Message extends React.Component {

   getTextColor = (color) => {
      return {
        'backgroundColor': 'black',
        'color': color
      }
    }

    render(){
      return (
        <div className="message">
          <div className='message-username'>{this.props.username}</div>
          <div
            style={this.getTextColor(this.props.color)}
            className='message-text'
            >
            {this.props.text}
          </div>
        </div>
      );
    }
}
Message.propTypes ={
  username: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Message;
