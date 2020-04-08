import React from 'react';
import './UserListPage.css';
import UserCard from '../../components/UserCard/UserCard';

export default function UserListPage(props) {
	return (
		<>
			<h1>User List</h1>
			<div className="UserListPage-grid">
				{props.users.map((user) => (
					<UserCard
						key={user._id}
						user={user}
						handleDeleteUser={props.handleDeleteUser}
					/>
				))}
			</div>
		</>
	);
}
