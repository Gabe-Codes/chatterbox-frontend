import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
	let nav = props.user ? (
		<ul className="sidenav sidenav-fixed invesible-top cyan lighten-2" id="mobile-nav">
			<li>
				<NavLink
					style={{ color: 'white' }}
					activeStyle={{
						fontWeight: 'bold',
						color: 'blue',
					}}
					exact
					to="/"
				>
					CHATTERBOX
				</NavLink>
			</li>
			<li>
				<NavLink
					style={{ color: 'white' }}
					activeStyle={{
						fontWeight: 'bold',
						color: 'blue',
					}}
					exact
					to={{ pathname: '/details', state: props.user }}
				>
					WELCOME,&nbsp;{props.user.username.toUpperCase()}
				</NavLink>
			</li>
			<li>
				<NavLink
					style={{ color: 'white' }}
					activeStyle={{
						fontWeight: 'bold',
						color: 'blue',
					}}
					exact
					to="/users"
				>
					USERS LIST
				</NavLink>
			</li>
			<li>
				<NavLink
					style={{ color: 'white' }}
					activeStyle={{
						fontWeight: 'bold',
						color: 'blue',
					}}
					exact
					to="/servers"
				>
					SERVERS LIST
				</NavLink>
			</li>
			<li>
				<NavLink
					style={{ color: 'white' }}
					activeStyle={{
						fontWeight: 'bold',
						color: 'blue',
					}}
					exact
					to="/new-server"
				>
					CREATE SERVER
				</NavLink>
			</li>
			<li>
				<NavLink
					style={{ color: 'white' }}
					activeStyle={{
						fontWeight: 'bold',
						color: 'red',
					}}
					to=""
					onClick={props.handleLogout}
				>
					LOG OUT
				</NavLink>
			</li>
		</ul>
	) : (
		<ul className="sidenav sidenav-fixed invesible-top cyan lighten-2" id="mobile-nav">
			<li>
				<NavLink
					style={{ color: 'white' }}
					activeStyle={{
						fontWeight: 'bold',
						color: 'blue',
					}}
					exact
					to="/login"
				>
					LOGIN
				</NavLink>
			</li>
			<li>
				<NavLink
					style={{ color: 'white' }}
					activeStyle={{
						fontWeight: 'bold',
						color: 'blue',
					}}
					exact
					to="/signup"
				>
					SIGNUP
				</NavLink>
			</li>
		</ul>
	);

	return <div>{nav}</div>;
};

export default NavBar;
