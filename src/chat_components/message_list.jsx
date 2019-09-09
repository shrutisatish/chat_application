import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Message from './message.jsx';

/**
 * Child component that gets passed all the messages with username and the message content.
 * This passes the information through props to its child component, that render the username and the text message
 */
class MessageList extends React.Component{

     UNSAFE_componentWillUpdate = () => {
      const node = ReactDOM.findDOMNode(this);
      this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;
    }
    /**
     * Checks to make sure that the messages scroll only when u are near rto the botton of the chat and not otherwise, in case you are browsing through old messages
     */
    componentDidUpdate = () => {
      if (this.shouldScrollToBottom) {
        const node = ReactDOM.findDOMNode(this);
        node.scrollTop = node.scrollHeight;
      }
    }

    render() {
      if(!this.props.roomId){
        return(
          <div className='message-list'>
              <div className='join-room'>
                  &larr; Join a Room!
              </div>
          </div>
        )
      }
      return (
        <div className="message-list">
          {this.props.messages.map((message, index)=>{
              return(
                <Message
                  color={this.props.color}
                  key={message.id}
                  username={message.senderId}
                  text={message.parts[0].payload.content}
                  />
              )
          })}
        </div>
      );
    }
}

MessageList.propTypes = {
  color: PropTypes.string,
  messages: PropTypes.array
};

export default MessageList;
