import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';
import { Dropdown } from 'react-materialize';

const NavBar = (props) => {
	let nav = props.user ? (
		<ul className="mainnav sidenav sidenav-fixed invesible-top" id="mobile-nav">
			<h5 className="title-container">
				<NavLink className="title" style={{ color: 'white' }} exact to="/">
					CHATTERBOX
				</NavLink>
			</h5>
			<h5>Servers</h5>
			<li>
				<NavLink
					className="navitem server-navitem"
					style={{ color: 'lightgreen' }}
					exact
					to="/new-server"
				>
					CREATE SERVER
				</NavLink>
			</li>
			<li>
				{props.lobbies.map((lobby) => (
					<NavLink
						className="navitem server-navitem"
						style={{ color: 'white' }}
						exact
						to={{ pathname: '/details-server', state: { lobby } }}
					>
						{lobby.name}
					</NavLink>
				))}
			</li>
			<div className="logout-container">
				<NavLink
					className="navitem"
					style={{ color: 'white' }}
					exact
					to={{ pathname: '/details', state: props.user }}
				>
					{props.user.username.toUpperCase()}
				</NavLink>
				<br/>
				<Dropdown
					className="dropdown"
					id="Dropdown_10"
					options={{
						alignment: 'left',
						autoTrigger: true,
						closeOnClick: true,
						constrainWidth: true,
						container: null,
						coverTrigger: true,
						hover: false,
						inDuration: 150,
						onCloseEnd: null,
						onCloseStart: null,
						onOpenEnd: null,
						onOpenStart: null,
						outDuration: 250,
					}}
					trigger={<i className="small material-icons settings">settings</i>}
				>
					<Link
						className="dropitem"
						style={{ color: 'white' }}
						to=""
						onClick={props.handleLogout}
					>
						LOGOUT
					</Link>
				</Dropdown>
			</div>
		</ul>
	) : (
		<div className="row card-container">
			<div className="col s12 m6">
				<div className="card login-card z-depth-0">
					<div className="card-content white-text">
						<span className="card-title chatterbox-title">CHATTERBOX</span>
					</div>
					<br />
					<div>
						<NavLink
							className="waves-effect waves-blue btn login-btn"
							style={{ color: 'white' }}
							exact
							to="/login"
						>
							LOGIN
						</NavLink>
					</div>
					<br />
					<br />
					<br />
					<div className="card z-depth-0">
						<div className="card-content white-text">
							<span>
								CHATTERBOX is a Discord like app with less of a focus on gaming
								and more of a focus on music and video integration.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return <div className="parent">{nav}</div>;
};

export default NavBar;
