import React from 'react';
import PropTypes from 'prop-types';
import Chatkit from '@pusher/chatkit-client';
import Swal from 'sweetalert2';
import fire from './../../config/fire';
import { tokenUrl,instanceLocator } from './../../config/chatkit';

import RoomList from './../chat_components/room_list.jsx'
import MessageList from './../chat_components/message_list.jsx'
import NewRoomForm from './../chat_components/new_room_form.jsx'
import SendMessageForm from './../chat_components/send_message_form.jsx'
import Setting from './../chat_components/setting.jsx'

/**
 * Main component for the chat application. It is the brain of the app. Most logic happens in the component
 */
class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages:[],
      joinableRooms:[],
      joinedRooms:[],
      roomId: null,
      user: {},
      isLoggedIn:false,
    }
  }

  componentDidMount = () => {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId:'maryjane',
        tokenProvider: new Chatkit.TokenProvider({
          url: tokenUrl
        })
    })

    chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser
      this.getRooms();
    })
    .catch(error => console.log('error on connecting: ', error))
  }


  /**
   * Function that gets all the rooms that the current user has joined as well as all the joinable rooms.
   */
  getRooms = () => {
    this.currentUser.getJoinableRooms()
    .then(joinableRooms =>{
      this.setState({
        joinableRooms,
        joinedRooms: this.currentUser.rooms
      })
    })
    .catch(error => console.log('error on joinable rooms: ', error))
  }

  /**
   * Function that subscribes to a roon such that you can list to new messages as and when the message are sent.
   */
  subscribeToRoom = (roomId) => {
    this.setState({ messages: [] })
    this.currentUser.subscribeToRoomMultipart({
      roomId:roomId,
      hooks: {
        onMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
          })
        }
      }
    })
    .then(room => {
      this.setState({
        roomId: room.id
      })
      this.getRooms()
    })
    .catch(error => console.log('error on subscription: ', error))
  }

  /**
   * Function to send a new message in the room that the user is current in.
   */
  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text,
      roomId:this.state.roomId
    })
  }

  /**
   * Function to create new rooms through the application
   */
  createRoom = (name) => {
    this.currentUser.createRoom({
      name
    })
    .then(room =>this.subscribeToRoom(room.id))
    .catch(error => console.log('error with create room: ', error))
  }

  /**
   * Function to delete  rooms through the application. Only an admin as the privilege to do so, else throws an error
   */
  deleteRoom = (roomId) => {
    this.currentUser.deleteRoom({
      roomId
    })
    .then(this.getRooms)
    .catch(err => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: `Error deleting room ${roomId}. You are not an admin. You cannot delete a room`
      })
    })
  }

  /**
   * Function to logout of the app
   */
  logout = () => {
    fire.auth().signOut().then(a=>{
      this.props.history.push("/");
    });
  }

  /**
   * Function to personalize text message color
   */
  setColor = (color) => {
    this.setState({ color })
  }

  /**
   * Function that handles the addition of users to the current room
   */
  handleAddUser = (user_name, roomId) => {
    this.currentUser.addUserToRoom({
      userId: user_name,
      roomId: roomId
    })
    .then(user => {
      Swal.fire({
        type: 'success',
        title: 'Yaay!',
        text: `Added user ${user_name} successfully `,
      })
    })
    .catch(err => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: `Error adding user ${user_name} to room`,
        })
    })
  }

  /**
   * Function that handles the deletion of users from the current room
   */
  handleDeleteUser = (user_name, roomId) => {
    this.currentUser.removeUserFromRoom({
      userId: user_name,
      roomId: roomId
    })
    .then(() => {
      Swal.fire({
        type: 'success',
        title: 'Yaay!',
        text: `Deleted user ${user_name} successfully `,
      })
    })
    .catch(err => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: `Error deleteing user ${user_name} to room`,
      })
    })
  }

  render() {
    return (
      <div>
          <div className="chat_application">
            <button className='app-logout' color="red" onClick={this.logout}>Logout</button>
            <Setting
                roomId={this.state.roomId}
                handleAdd={this.handleAddUser}
                handleDelete={this.handleDeleteUser} />
            <RoomList
                roomId={this.state.roomId}
                rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                subscribeToRoom={this.subscribeToRoom}
                deleteRoom={this.deleteRoom}/>
            <MessageList
                color={this.state.color}
                roomId={this.state.roomId}
                messages={this.state.messages}/>
            <NewRoomForm createRoom={this.createRoom}/>
            <SendMessageForm
                choosenColor={this.setColor}
                disabled={!this.state.roomId}
                sendMessage={this.sendMessage}/>
          </div>
      </div>

    );
  }
}

Chat.propTypes ={
  history: PropTypes.object
};
export default Chat;
