import React from 'react';
import { Link } from 'react-router-dom';

export default function UserListItem({ user }) {
	return (
		<div className="row">
			<div className="col s12 m6">
				<div className="card indigo darken-1">
					<div className="card-content white-text">
						<Link
							className="card-title"
							style={{ color: 'white' }}
							to={{ pathname: '/details', state: { user } }}
						>
							{user.displayName}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
