import React from 'react';

export default function UserCard({ user, handleDeleteUser, handleLogout }) {
	return (
		<div>
			<div>
				<h3>{user.username}</h3>
			</div>
			<div>
				<dl>
					<dt>Display Name</dt>
					<dd>{user.displayName}</dd>
					<dt>Email</dt>
					<dd>{user.email}</dd>
				</dl>
			</div>
			<div>
				<button onClick={() => handleDeleteUser(user._id)}>DELETE</button>
			</div>
		</div>
	);
}
