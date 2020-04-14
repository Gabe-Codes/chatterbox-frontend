import React from 'react';
import { Link } from 'react-router-dom';
import LobbyCard from '../../components/LobbyCard/LobbyCard';
import ChannelCard from '../../components/ChannelCard/ChannelCard';

export default function LobbyDetailsPage(props) {
	const lobby = props.location.state.lobby;

	function lobbyChild() {
		console.log(lobby._id)
		return props.channels.map((channel) =>
			channel.lobby === lobby._id ? (
				<ChannelCard
					key={channel._id}
					channel={channel}
					handleDeleteChannel={props.handleDeleteChannel}
				/>
			) : (
				<div></div>
			)
		);
	}

	return (
		<>
			<div className="wrapper">
				<h1>Lobby Details</h1>
				<LobbyCard key={lobby._id} lobby={lobby} />
			</div>
			<div className="wrapper">
				<h1>Channel List</h1>
				<div>
					<Link
						style={{ color: 'black' }}
						to={{ pathname: '/new-channel', state: { lobby } }}
					>
						ADD CHANNEL
					</Link>
				</div>
				<div>{lobbyChild()}</div>
			</div>
		</>
	);
}
