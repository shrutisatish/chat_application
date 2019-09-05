import React from 'react';
import { Smile, Settings, Paperclip } from 'react-feather';
import { Picker } from 'emoji-mart';
import { SketchPicker, TwitterPicker } from 'react-color';
import FileUploadDialogue from './file_upload_dialogue.jsx'

/**
 * Component the allows current user to send new messages. The compoenent also supports emoticons to be sent as messages.
 */
class SendMessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
      showEmojiPicker: false,
      showSketchPicker: false,
      showPaperClip: false
    }
  }

  /**
   * This function handles changes to the input field when the users starts to type a message to be sent
  */
  handleTextChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  /**
   * This function handles the submission of the message and clears the state of message onces the message is sent
  */
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.sendMessage(this.state.message)
    this.setState({
      message: ''
    })
  }

  /**
   * This function toggles the emoji button to show/hide the emoticons
  */
  toggleEmojiPicker = () => {
      this.setState({
        showEmojiPicker: !this.state.showEmojiPicker,
      });
  }

  /**
   * This function toggles the paperclip button to show/hide the attachment dialogue
  */
  togglePaperClip = () => {
      this.setState({
        showPaperClip: !this.state.showPaperClip,
      });
  }

  /**
   * This function toggles the settings button to show/hide the color options
  */
  toggleSketchPicker = () => {
    this.setState({
      showSketchPicker: !this.state.showSketchPicker,
    });
  }

  /**
   * Function that handles the selection of the emoticon that needs to be sent as a message
   */
  addEmoji = (emoji) => {
      const text = `${this.state.message}${emoji.native}`;
      this.setState({
        message: text,
        showEmojiPicker: false,
      });
      this.nameInput.focus();
  }

  /**
   * Function that handles the selection of colors for the text being typed
   */
  handleColorChange = (color, e) => {
    this.setState({
      color: color.hex,
      showSketchPicker:false
    },()=>{ this.props.choosenColor(this.state.color) })
  }

  /**
   * Function that that sets the style for the input text field
   */
  changeColor = () => {
    return {
      'color': this.state.color
    }
  }

  render(){
    const { showEmojiPicker, showSketchPicker, showPaperClip } = this.state
    return (
      <form
        onSubmit={this.handleSubmit}
        className="send-message-form" >
        <button
          disabled={this.props.disabled}
          type="button"
          className="toggle-emoji"
          onClick={this.toggleEmojiPicker}
        >
          <Smile />
        </button>
        {/*<button
          disabled={this.props.disabled}
          type="button"
          className="toggle-color-palette"
          onClick={this.toggleSketchPicker}
        >
          <Settings />
        </button>*/}
        <button
          disabled={this.props.disabled}
          type="button"
          className="toggle-paperclip"
          onClick={this.togglePaperClip}
        >
          <Paperclip />
        </button>
        <ul className="chat-emojis">
          {showEmojiPicker ? (
            <Picker set="emojione" onSelect={this.addEmoji} />
          ) : null}
        </ul>
        {/*<ul className="color-picker">
          {showSketchPicker ? (
            <TwitterPicker onChange={this.handleColorChange } />
          ) : null}
        </ul>*/}
        <ul className="chat-paperclip">
          {showPaperClip ? (
            <FileUploadDialogue
              fileMessage={this.fileMessage}
              handleInput={this.handleInput}
              uploadAttachment={this.uploadAttachment}
              fileAttachment={this.fileAttachment}/>
          ) : null}
        </ul>
        <input
            //style={this.changeColor()}
            ref={(input) => { this.nameInput = input; }}
            disabled={this.props.disabled}
            placeholder="Enter your Message and hit Enter"
            type='text'
            value={this.state.message}
            onChange={this.handleTextChange}
        />
      </form>
    );
  }


}

export default SendMessageForm;
