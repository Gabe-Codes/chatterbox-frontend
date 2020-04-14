import React from 'react';
import { Link } from 'react-router-dom';

export default function LobbyCard({ lobby, handleDeleteLobby }) {
	return (
		<div className="row">
			<div className="col s12 m6">
				<div className="card indigo darken-1">
					<div className="card-content white-text">
                        <Link to={{ pathname: '/details-server', state: { lobby } }}>{lobby.name}</Link>
					</div>
					<div>
						<dl>
							<dt>Password</dt>
							<dd>{lobby.password}</dd>

						</dl>
					</div>
					<div className="card-action">
						<Link to={{ pathname: '/edit-server', state: { lobby } }}>
							EDIT
						</Link>
						<button onClick={() => handleDeleteLobby(lobby._id)}>DELETE</button>
					</div>
				</div>
			</div>
		</div>
	);
}
