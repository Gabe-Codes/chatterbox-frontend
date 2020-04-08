import React from 'react';
import { Link } from 'react-router-dom';

export default function UserCard({ user, handleDeleteUser }) {
	return (
		<div className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">{user.username}</h3>
			</div>
			<div>
				<dl>
					<dt>Password</dt>
					<dd>{user.password}</dd>
					<dt>Email</dt>
					<dd>{user.email}</dd>
				</dl>
			</div>
			<div className="panel-footer">
				<button
					className="btn btn-xs btn-danger margin-left-10"
					onClick={() => handleDeleteUser(user._id)}
				>
					DELETE
				</button>
			</div>
		</div>
	);
}