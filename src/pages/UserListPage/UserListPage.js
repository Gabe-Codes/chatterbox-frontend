import React from 'react';
import './UserListPage.css';
import UserListItem from '../../components/UserListItem/UserListItem';

export default function UserListPage(props) {
	return (
		<>
			<h1>User List</h1>
			<div className="wrapper">
				{props.users.map((user) => (
					<UserListItem
						key={user._id}
						user={user}
						handleDeleteUser={props.handleDeleteUser}
					/>
				))}
			</div>
		</>
	);
}
