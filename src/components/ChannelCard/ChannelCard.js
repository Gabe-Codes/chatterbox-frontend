import React from 'react';
import { Link } from 'react-router-dom';

export default function ChannelCard({ channel, handleDeleteChannel }) {
	return (
		<div className="row">
			<div className="col s12 m6">
				<div className="card indigo darken-1">
					<div className="card-content white-text">
                        <Link to={{ pathname: '/details-channel', state: { channel } }}>{channel.name}</Link>
					</div>
					<div className="card-action">
						<Link to={{ pathname: '/edit-channel', state: { channel } }}>
							EDIT
						</Link>
						<button onClick={() => handleDeleteChannel(channel._id)}>DELETE</button>
					</div>
				</div>
			</div>
		</div>
	);
}