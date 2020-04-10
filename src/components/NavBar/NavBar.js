import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
	let nav = props.user ? (
		<div>
			<NavLink className="link" exact to="/users">
				USERS LIST
			</NavLink>
			&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
			<NavLink className="link" to="" onClick={props.handleLogout}>
				LOG OUT
			</NavLink>
			&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
			<span>WELCOME,&nbsp;{props.user.username.toUpperCase()}</span>
		</div>
	) : (
		<div>
			<NavLink className="link" exact to="/login">
				LOGIN
			</NavLink>
			&nbsp;&nbsp;|&nbsp;&nbsp;
			<NavLink className="link" exact to="/signup">
				SIGNUP
			</NavLink>
		</div>
	);

	return <div>{nav}</div>;
};

export default NavBar;
