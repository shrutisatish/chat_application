import React from "react";
import PropTypes from 'prop-types';
import fire from './../../config/fire';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput  } from 'mdbreact';

//import Chat from './../../components/chat.jsx'
//import Signup from './../../components/signup.jsx'

/**
 * Component that handles user logout and displays the login screen
 */
class Logout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      isSignUp:false,

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
   * This function calls the login function on login button click
   */
  handleLogin = (e) => {
    e.preventDefault();
    this.goLogin()

  }

  /**
   * This function calls the login function on enter (keyCode 13)
   */
  onKeyPress = (e) => {
    if(e.keyCode === 13){
      this.goLogin()
    }
  }

  /**
   * This function handles the login. It uses firebase to check if user is valid and created in the database and login only if user has already signed up
   */
  goLogin = () => {
    if(!this.state.email || !this.state.password){
      alert('User not registered, please signup')
    }
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(a => {
      this.props.history.push('/chat')
      this.setState({
        isLoggedIn: true
      })
    })
    .catch((error)=> {
      if(error.code === "auth/user-not-found")
      alert('User not found in database! Please signup')
      this.setState({
        email:'',
        password:''
      });
    });

  }

  /**
   * This function sets's the state so that the app knows that the user wants to sign up and not login
   */
  handleSignUp = (e) => {
    e.preventDefault();
    this.setState({
      isSignUp: true
    })
  }


  render(){
    if(this.state.isSignUp) {
      this.props.history.push("/signup");
    }
    return (
      <div className="app-login">
          <MDBContainer className="align-middle">
            <MDBRow>
              <MDBCol md="5">
                <MDBCard>
                  <div className="header pt-3 grey lighten-2">
                    <MDBRow className="d-flex justify-content-start">
                      <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                        Log in
                      </h3>
                    </MDBRow>
                  </div>
                  <MDBCardBody className="mx-4 mt-4">
                    <MDBInput name="email" label="Your email" group type="text" validate onChange={this.handleForm} />
                    <MDBInput
                      onChange={this.handleForm}
                      onKeyUp={this.onKeyPress}
                      name="password"
                      label="Your password"
                      group
                      type="password"
                      validate
                      containerClass="mb-0"
                    />
                    <div className="text-center mb-4 mt-5">

                      <MDBBtn
                        onClick={this.handleLogin}
                        color="danger"
                        type="button"
                        className="btn-block z-depth-2"
                      >
                        Login
                      </MDBBtn>
                    </div>
                    <p className="font-small grey-text d-flex justify-content-center">
                      Don't have an account?
                      <a
                        href="#!"
                        className="dark-grey-text font-weight-bold ml-1"
                        onClick={this.handleSignUp}
                      >
                        Sign up
                      </a>
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
      </div>
    );
  }
};

Logout.propTypes = {
  history: PropTypes.object.isRequired,
}

export default Logout;
