import React from 'react';
import UserCard from '../../components/UserCard/UserCard';
import Navbar from '../../components/NavBar/NavBar';

export default function UserDetailsPage(props) {
	const user = props.location.state.user || props.location.state;
	return (
		<>
			<div>
				<Navbar
					user={props.user}
					handleLogout={props.handleLogout}
					lobbies={props.lobbies}
				/>
			</div>
			<div className="wrapper">
				<h1>User Details</h1>
				<UserCard
					key={user._id}
					user={user}
					handleDeleteUser={props.handleDeleteUser}
				/>
			</div>
		</>
	);
}
