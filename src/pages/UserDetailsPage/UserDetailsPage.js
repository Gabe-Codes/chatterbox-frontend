import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import { Dropdown } from 'react-materialize';
import { Link } from 'react-router-dom';
import './UserDetailsPage.css';

export default function UserDetailsPage(props) {
	const user = props.location.state.user || props.location.state;

	function isUser() {
		if (user._id === props.user._id) {
			return (
				<>
					<Dropdown
						id="Dropdown_11"
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
						trigger={
							<i className="medium material-icons settings user-settings">
								settings
							</i>
						}
					>
						<Link to={{ pathname: '/edit', state: { user } }}>EDIT</Link>
						<button onClick={() => props.handleDeleteUser(user._id)}>
							DELETE
						</button>
					</Dropdown>
					<Link to="/users">Search a Friend</Link>
				</>
			);
		}
	}

	return (
		<>
			<div>
				<Navbar
					user={props.user}
					handleLogout={props.handleLogout}
					lobbies={props.lobbies}
				/>
			</div>
			<div className="user-container">
				<h1 className="user-title">{user.displayName.toUpperCase()}</h1>
				{isUser()}
			</div>
		</>
	);
}
