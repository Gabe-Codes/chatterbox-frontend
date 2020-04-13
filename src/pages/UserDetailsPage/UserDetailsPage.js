import React from 'react';
import UserCard from '../../components/UserCard/UserCard';

export default function UserDetailsPage(props) {
	const user = props.location.state.user;
	return (
		<>
			<div className="wrapper">
				<h1>User Details</h1>
				<UserCard key={user._id} user={user} />
			</div>
		</>
	);
}
