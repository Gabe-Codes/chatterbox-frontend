import React from 'react';
import './UserListPage.css';
import UserListItem from '../../components/UserListItem/UserListItem';
import Navbar from '../../components/NavBar/NavBar';

export default function UserListPage(props) {
	return (
		<>
			<div>
				<Navbar
					user={props.user}
					handleLogout={props.handleLogout}
					lobbies={props.lobbies}
				/>
			</div>
			<h1>User List</h1>
			<div className="wrapper">
				{props.users.map((user) => (
					<UserListItem key={user._id} user={user} />
				))}
			</div>
		</>
	);
}
