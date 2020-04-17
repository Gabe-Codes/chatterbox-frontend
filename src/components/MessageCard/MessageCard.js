import React from 'react';

export default function MessageCard({ message }) {
	return (
		<div className="row">
			<div className="col s12 m6">
				<div className="card indigo darken-1">
					<div className="card-content white-text">
						<h3 className="card-title">{message.postedBy.displayName}</h3>
						<p>{message.content}</p>
						<p>{message.createdAt}</p>
					</div>
					<div className="card-action">
						<p>edit and delete</p>
					</div>
				</div>
			</div>
		</div>
	);
}
