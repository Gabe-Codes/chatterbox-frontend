import React from 'react';
import './MessageCard.css'

export default function MessageCard({ message, handleDeleteMessage }) {
	return (
		<div className="row">
			<div className="col s8 m6">
				<div className="card indigo darken-1">
					<div className="card-content white-text">
						<h3 className="card-title">{message.postedBy.displayName}</h3>
						<p>{message.content}</p>
						<p>{message.createdAt}</p>
					</div>
					<div className="card-action">
						<button onClick={() => handleDeleteMessage(message._id)}>
							DELETE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
