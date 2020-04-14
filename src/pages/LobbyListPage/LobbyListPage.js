import React from 'react';
import './LobbyListPage.css';
import LobbyCard from '../../components/LobbyCard/LobbyCard';

export default function LobbyListPage(props) {
	return (
		<>
			<div className="wrapper">
				<h1>Server List</h1>
				<div>
					{props.lobbies.map((lobby) => (
						<LobbyCard
							key={lobby._id}
							lobby={lobby}
							handleDeleteLobby={props.handleDeleteLobby}
						/>
					))}
				</div>
			</div>
		</>
	);
}
