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

import { Route, Switch } from "react-router-dom";
import { MDBNavbar, MDBNavLink} from "mdbreact";
/**
 * Main component that routes to differnt components
 */

function AppRouter() {
	return (
				<div>
					<MDBNavbar color='black' expand="md">
								<MDBNavLink to="/" className="white-text">Home</MDBNavLink>
								<MDBNavLink to="/chat" className="white-text">Login</MDBNavLink>
								<MDBNavLink to="/about" className="white-text">About</MDBNavLink>
								<MDBNavLink to="/contact" className="white-text">Contact Me</MDBNavLink>
					</MDBNavbar>
					<div>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/login" component={Login} />
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route path="/chat" component={Chat} />
							<Route path="/signup" component={Signup} />
							<Route path="/logout" component={Logout} />
						</Switch>
					</div>
				</div>
	);
}

export default AppRouter;
