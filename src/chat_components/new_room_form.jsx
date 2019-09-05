import React from 'react';

/**
 * Component that provides the ability to create new chat rooms
 */
class NewRoomForm extends React.Component {
    constructor(props){
      super(props);
      this.state= {
        roomName: ''
      }
    }

    /**
     * This function handles changes to the input field
    */
    handleChange = (e) => {
      this.setState({
        roomName: e.target.value
      })
    }

    /**
     * This function handles the submission of the name of the newly created chat room
    */
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.createRoom(this.state.roomName)
      this.setState({ roomName: '' })
    }

    render(){
      return (
        <div className="new-room-form">
          <form onSubmit={this.handleSubmit}>
             <input
                 value={this.state.roomName}
                 onChange={this.handleChange}
                 type="text"
                 placeholder="Create New Room"
                 required />
             <button id="create-room-btn" type="submit">+</button>
          </form>
        </div>
      );
    }
}
export default NewRoomForm;
