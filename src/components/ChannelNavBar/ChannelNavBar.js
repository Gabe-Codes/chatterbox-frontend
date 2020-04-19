import React from 'react';
import { NavLink } from 'react-router-dom';
import { SideNav } from 'react-materialize';
import './ChannelNavBar.css';

export default function ChannelNavBar({ channels, lobby }) {
	function lobbyChild() {
		return channels
			.filter((channel) => channel.lobby._id === lobby._id)
			.map((channel) => (
				<li>
					<NavLink
						className="navitem channel-navitem"
						style={{ color: 'white' }}
						activeStyle={{
							fontWeight: 'bold',
							color: 'blue',
						}}
						exact
						to={{
							pathname: '/details-channel',
							state: { channel, lobby, channels },
						}}
					>
						{channel.name}
					</NavLink>
				</li>
			));
	}

	return (
		<SideNav
			fixed={true}
			options={{
				edge: 'left',
			}}
			className="channelnav"
		>
			<h5>Channels</h5>
			<li>
				<NavLink
					className="navitem channel-navitem"
					style={{ color: 'lightgreen' }}
					exact
					to={{ pathname: '/new-channel', state: { lobby } }}
				>
					ADD CHANNEL
				</NavLink>
			</li>
			{lobbyChild()}
		</SideNav>
	);
}
