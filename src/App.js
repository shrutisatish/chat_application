import React from 'react';
import './styles/App.css';
import './styles/emoji.css'
import './styles/file_upload.css'

import Login from './components/header_components/login.jsx'
import About from './components/header_components/about.jsx'
import Contact from './components/header_components/contact.jsx'
import Chat from './components/chat.jsx'
import Signup from './components/header_components/signup.jsx'
import { ProtectedRoute } from './components/header_components/protected_route'
import { Route, Switch } from "react-router-dom";
import { MDBNavbar, MDBNavLink} from "mdbreact";
/**
 * Main component that routes to differnt components
 */

function AppRouter() {
	return (
				<div>
					<MDBNavbar color='black' expand="md">
								<MDBNavLink to="/about" className="white-text">About</MDBNavLink>
								<MDBNavLink to="/contact" className="white-text">Contact Me</MDBNavLink>
					</MDBNavbar>
					<div>
						<Switch>

							<Route path="/" exact component={Login} />
							<Route path="/signup" component={Signup} />
							<ProtectedRoute exact path="/chat" component={Chat} />
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route path="*" component={()=>"404 NOT FOUND"}/>
						</Switch>
					</div>
				</div>
	);
}

export default AppRouter;
