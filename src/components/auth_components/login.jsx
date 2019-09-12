import React from "react";
import { Link } from 'react-router-dom'
import fire from './../../config/fire';
import Swal from 'sweetalert2';
import auth from './../auth_components/auth'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput  } from 'mdbreact';

/**
 * Component that handles user login
 */
class Login extends React.Component {
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
  handleLogin = () => {
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
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Please enter Username and Password!'
      })
    }
    auth.login(() => {
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(a => {
        this.props.history.push('/chat')
      })
      .catch((error)=> {
        if(error.code === "auth/user-not-found")
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'User not found in database! Please signup'
        })
        this.setState({
          email:'',
          password:''
        });
      });
    })
  }

  render(){
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
                      <Link
                        to='/signup'
                        className="dark-grey-text font-weight-bold ml-1"
                      >
                        Sign up
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
};

export default Login;
