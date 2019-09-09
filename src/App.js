import React from 'react';
import './styles/App.css';
import './styles/emoji.css'
import './styles/file_upload.css'

import Home from './components/header/home.jsx'
import Login from './components/header/login.jsx'
import Logout from './components/header/logout.jsx'
import About from './components/header/about.jsx'
import Contact from './components/header/contact.jsx'
import Chat from './components/chat.jsx'
import Signup from './components/signup.jsx'

import { BrowserRouter as Router, Route } from "react-router-dom";
import { MDBNavbar, MDBNavLink} from "mdbreact";
/**
 * Main component that routes to differnt components
 */

function AppRouter() {
	return (
		<Router>
				<div>
					<MDBNavbar color='black' expand="md">
								<MDBNavLink to="/" className="white-text">Home</MDBNavLink>
								<MDBNavLink to="/chat" className="white-text">Login</MDBNavLink>
								<MDBNavLink to="/about" className="white-text">About</MDBNavLink>
								<MDBNavLink to="/contact" className="white-text">Contact Me</MDBNavLink>
					</MDBNavbar>
					<div>
							<Route path="/" exact component={Home} />
							<Route path="/login" exact component={Login} />
							<Route path="/about" exact component={About} />
							<Route path="/contact" exact component={Contact} />
							<Route path="/chat" exact component={Chat} />
							<Route path="/signup" exact component={Signup} />
							<Route path="/logout" exact component={Logout} />
					</div>
				</div>
		</Router>
	);
}

export default AppRouter;
