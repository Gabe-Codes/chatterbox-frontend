import React from 'react';
import { Link } from 'react-router-dom';

export default function UserCard({ user, handleDeleteUser }) {
	return (
		<div className="row">
			<div className="col s12 m6">
				<div className="card indigo darken-1">
					<div className="card-content white-text">
						<h3 className="card-title">{user.displayName}</h3>
					</div>
					<div className="card-action">
						<Link to="/users">RETURN TO LIST</Link>
						<Link to={{ pathname: '/edit', state: { user } }}>EDIT</Link>
						<button onClick={() => handleDeleteUser(user._id)}>DELETE</button>
					</div>
				</div>
			</div>
		</div>
	);
}
