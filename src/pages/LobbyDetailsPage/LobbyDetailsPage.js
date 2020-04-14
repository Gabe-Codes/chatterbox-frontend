import React from 'react';
import LobbyCard from '../../components/LobbyCard/LobbyCard';

export default function LobbyDetailsPage(props) {
	const lobby = props.location.state.lobby;
	return (
		<>
			<div className="wrapper">
				<h1>Lobby Details</h1>
				<LobbyCard key={lobby._id} lobby={lobby} />
			</div>
		</>
	);
}