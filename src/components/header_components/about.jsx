import React from 'react';

/**
 * Functional component that just displays information and capabilities of the chat application
 */
function About() {
  return (
    <div className = "about" >
      <p>This Application is a Real Time Chat application</p>
      <p>This app uses the Pusher Chatkit API</p>
      <p>This app also uses Firebase as a backend for authentication. It helps to make the application secure</p>
      <p>In case you do not want to sign up to create an account to login to the chat application please use the following cerdentials</p>
      <p>Email: dummy_email@gmail.com, Password: 123456789</p>
      <p>In case you want to sign up, you can use any email id and password to signup. Once signed up you will be logged in immediately</p>
      <p>Chatkit is designed to make it as simple as possible to add chat to the application</p>
      <p>This application had react router with protected routes implemented</p>
      <p>Capabilities:</p>
      <p>Ability to create a new Room</p>
      <p>Shows a list of all the chat rooms created</p>
      <p>Highlights the current room you are in. Highlight is in blue</p>
      <p>Ability to type a new message</p>
      <p>Supports Emoticons</p>
      <p>View all the messages</p>
      <p>Ability for the admin to delete rooms from chat application</p>
      <p>Filter/Search for rooms</p>
      <p>Add user to a room</p>
      <p>Delete a user from a room</p>
      <p>Tech used: React.js, Chatkit, Firebase</p>
    </div>

  );
}

export default About;
