import React from 'react';
import PropTypes from 'prop-types';
import { MDBBtn, MDBInput, MDBBtnGroup, MDBIcon } from "mdbreact";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

/**
 * Settings component that allows the current user to add/delete users from a room
 */
class Setting extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalAdd: false,
      modalDelete: false,
      addUser: '',
      deleteUser: ''
    }
  }

  /**
   * Function that toggles the add user modal
   */
  toggleModalAdd = () => {
    this.setState({
      modalAdd: !this.state.modalAdd
    });
  };

  /**
   * Function that toggles the delete user modal
   */
  toggleModalDelete = () => {
    this.setState({
      modalDelete: !this.state.modalDelete
    });
  };

  /**
   * Function that handles the input once the name for addition/deletion of user is entered
   */
  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  /**
   * Function that handles the addition of users to the room
   */
  handleAdd = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.addUser, this.props.roomId)
    this.setState({
      modalAdd: false
    })
  }

  /**
   * Function that handles the deletion of users from the room
   */
  handleDelete = (e) => {
    e.preventDefault();
    this.props.handleDelete(this.state.deleteUser, this.props.roomId)
    this.setState({
      modalDelete: false
    })
  }

  render(){
    if(!this.props.roomId){
      return(
        <div className='app-settings-no-room-selected'></div>
      )
    }
    return (
      <form className = "app-setting">

        <MDBBtnGroup size="sm">
        <MDBContainer>
              <MDBBtn color="green" onClick={this.toggleModalAdd}><MDBIcon icon="user-plus"/></MDBBtn>
              <MDBModal isOpen={this.state.modalAdd} toggle={this.toggleModalAdd}>
                <MDBModalHeader toggle={this.toggleModalAdd}>Add User</MDBModalHeader>
                <MDBModalBody>
                  <MDBInput name="addUser" label="Add User" type="text" validate onChange={this.handleInputChange} />
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={this.toggleModalAdd}>Close</MDBBtn>
                  <MDBBtn color="primary" onClick={this.handleAdd}>Add</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            </MDBContainer>

            <MDBContainer>
              <MDBBtn color="danger" onClick={this.toggleModalDelete}><MDBIcon icon="user-minus"/></MDBBtn>
              <MDBModal isOpen={this.state.modalDelete} toggle={this.toggleModalDelete}>
                <MDBModalHeader toggle={this.toggleModalDelete}>Delete User</MDBModalHeader>
                <MDBModalBody>
                    <MDBInput name="deleteUser" label="Delete User" type="text" validate onChange={this.handleInputChange} />
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={this.toggleModalDelete}>Close</MDBBtn>
                  <MDBBtn color="primary" onClick={this.handleDelete}>Delete</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
        </MDBBtnGroup>

      </form >

    );
  }
}

Setting.propTypes = {
  handleAdd: PropTypes.func,
  handleDelete: PropTypes.func,
  roomId: PropTypes.string,
};

export default Setting;
