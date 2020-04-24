import React from 'react';
import './MessageCard.css';
import { Link } from 'react-router-dom';

export default function MessageCard({
	message,
	handleDeleteMessage,
	channels,
	lobby,
	user,
}) {
	function isOwner() {
		if (user._id === message.postedBy._id) {
			return (
				<div className="card-action">
					<Link
						className="waves-effect waves-blue btn edit-btn"
						to={{
							pathname: '/edit-message',
							state: { lobby, channels, message },
						}}
					>
						EDIT
					</Link>
					<button
						className="waves-effect waves-blue btn delete-btn"
						onClick={() => handleDeleteMessage(message._id)}
					>
						DELETE
					</button>
				</div>
			);
		}
	}

	return (
		<div className="row">
			<div className="col s8 m6">
				<div className="card indigo darken-1">
					<div className="card-content white-text">
						<h3 className="card-title">{message.postedBy.displayName}</h3>
						<p>{message.content}</p>
						<p>{message.createdAt}</p>
					</div>
					{isOwner()}
				</div>
			</div>
		</div>
	);
}
