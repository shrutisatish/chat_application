import React from 'react';
import PropTypes from 'prop-types';
/**
 * Component that displays all the rooms created. It also provides the ability for the admin to delete the chat rooms.
 */
class RoomList extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        filteredRooms:[]
      }
    }

    /**
     * Function that handles the deletion of a room
     */
    handleDelete = (e) => {
      e.preventDefault();
      this.props.deleteRoom(e.target.id)
    }

    /**
     * Function that searches for a room and sets the filtered rooms
     */
    onSearch = (event) => {
      let search = event.target.value.toLowerCase()
      let displayRooms = this.props.rooms.filter((el) => {
          let searchedRoom = el.name.toLowerCase();
          return searchedRoom.indexOf(search) !== -1;
        })
        this.setState({
          filteredRooms: displayRooms
        })

    }

    render(){
      const orderedRooms = [...this.props.rooms].sort((a,b) => a.id - b.id)
      return (
        <div className="rooms-list">
          <ul>
            <input type="text" placeholder="Search Room" className="search-room" onChange={this.onSearch}/>
            <h3 style={{color:'red'}}>Rooms:</h3>
               {(this.state.filteredRooms) && (
                 this.state.filteredRooms.map((room, idx) => {
                   var active = this.props.roomId === room.id ? "active": "";
                   return(
                     <li key={room.id} className={'room'+ active}>
                        <button className="room-button-link" onClick={() => {this.props.subscribeToRoom(room.id)}}>
                             {room.name}
                        </button>
                        <button
                          title="Click to delete room"
                          className="delete-btn"
                          id={room.id}
                          type="submit"
                          onClick={this.handleDelete}>
                          --
                          </button>
                     </li>
                   )
                 })
               )}
               {(this.state.filteredRooms.length === 0) && orderedRooms.map((room, index) => {
                 var active = this.props.roomId === room.id ? "active": "";
                 return(
                   <li key={room.id} className={'room' +active}>
                      <button className="room-button-link" onClick={() => {this.props.subscribeToRoom(room.id)}}>
                           {room.name}
                      </button>
                      <button
                        title="Click to delete room"
                        className="delete-btn"
                        id={room.id}
                        type="submit"
                        onClick={this.handleDelete}>
                        --
                        </button>
                   </li>
                 )
               })}
           </ul>
        </div>
      );
    }
}
RoomList.propTypes = {
  roomId: PropTypes.string,
  subscribeToRoom: PropTypes.func,
  rooms: PropTypes.array,
  deleteRoom: PropTypes.func,
};

export default RoomList;
