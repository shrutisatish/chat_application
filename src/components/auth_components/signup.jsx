import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import fire from './../../config/fire';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

/**
 * Component that handles user sign up
 */
class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  /**
   * This function handles changes to the input fields in the form
  */
  handleForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  /**
   * This function handles the signup. It uses firebase to save user credentials and allows the user to login
   */
  goSignup = () => {
    if(!this.state.email || !this.state.password){
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Please enter Username and Password!'
      })
    }
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(a => {
      this.props.history.push('/chat')
      Swal.fire({
        type: 'success',
        title: 'Yaay!',
        text: "Successful login, Please login now",
      })
    })
    .catch((error)=> {
      if(error.code === "auth/weak-password"){
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: `${error.message}`
        })
      }
    })
  }

  /**
   * This function calls the signup function on enter (keyCode 13)
   */
  onKeyPress = (e) => {
    if(e.keyCode === 13){
      this.goSignup();
    }
  }

  /**
   * This function calls the signup function on signup link click
   */
  handleSignUp = (e) => {
    e.preventDefault();
    this.goSignup();
  }

  handleBackToLogin = (e) => {
    e.preventDefault();
    this.props.history.push("/logout");
  }

  render () {
    return (
      <div className='app-signup'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="5">
              <MDBCard>
                <div className="header pt-3 grey lighten-2">
                  <MDBRow className="d-flex justify-content-start">
                    <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                      Sign Up!
                    </h3>
                  </MDBRow>
                </div>
                <MDBCardBody className="mx-4 mt-4">
                  <MDBInput onChange={this.handleForm} name="email" label="Your email" group type="text" validate />
                  <MDBInput
                    onKeyUp={this.onKeyPress}
                    onChange={this.handleForm}
                    name="password"
                    label="Your password"
                    group
                    type="password"
                    validate
                    containerClass="mb-0"
                  />
                  <div className="text-center mb-4 mt-5">
                    <MDBBtn
                      color="danger"
                      type="button"
                      className="btn-block z-depth-2"
                      onClick={this.handleSignUp}
                    >
                      Sign Up
                    </MDBBtn>
                  </div>
                  <p className="font-small grey-text d-flex justify-content-center">
                    Already have an account?
                    <Link
                      to='/'
                      className="dark-grey-text font-weight-bold ml-1"
                    >
                      Back to login
                    </Link>
                  </p>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

Signup.propTypes = {
  history:PropTypes.object
};

export default Signup;
