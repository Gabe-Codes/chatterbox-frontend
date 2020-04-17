import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
	let nav = props.user ? (
		<ul
			className="mainnav sidenav sidenav-fixed invesible-top"
			id="mobile-nav"
		>
			<h5>
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
			</h5>
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
					to="/new-server"
				>
					CREATE SERVER
				</NavLink>
			</li>
			<li>
				{props.lobbies.map((lobby) => (
					<NavLink
						style={{ color: 'white' }}
						exact
						to={{ pathname: '/details-server', state: { lobby } }}
					>
						{lobby.name}
					</NavLink>
				))}
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
		<ul
			className="mainnav sidenav sidenav-fixed invesible-top cyan lighten-2"
			id="mobile-nav"
		>
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
