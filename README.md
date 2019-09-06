This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### npm run build

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Instructions

### Clone the repository

Once you clone the repository you will need to create an account for Chatkit to be able to get the Chatkit tokenURL and the instanceLocator
Instructions can be found here:

https://pusher.com/docs/chatkit/authentication

You will also need to create your own instance of firebase to be able to login to the application. PLease follow the instructions in the link below

https://firebase.google.com/docs/auth/web/start

In the following location /src, create a folder called config
Inside this folder create two filenames:

1. chatkit.js
2. fire.js

the contents of the files is as follows

chatkit.js -->

const tokenUrl = "**********"
const instanceLocator = "**********"

export { tokenUrl, instanceLocator }

Please generate your own tokenUrl and instanceLocator

fire.js -->

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "**********",
    authDomain: "**********",
    databaseURL: "**********",
    projectId: **********",
    storageBucket: "",
    messagingSenderId: **********",
    appId: "**********"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;

Please generate your own firebaseConfig with apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId

### Install the dependencies

npm install

### Start running code in development

npm start

This will open the project at http://localhost:3000 on the web browser
