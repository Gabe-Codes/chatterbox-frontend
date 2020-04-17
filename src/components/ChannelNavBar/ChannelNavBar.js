import React from 'react';
import { NavLink } from 'react-router-dom';
import { SideNav } from 'react-materialize';
import './ChannelNavBar.css';

export default function ChannelNavBar({ channels, lobby }) {
	function lobbyChild() {
		return channels
			.filter((channel) => channel.lobby === lobby._id)
			.map((channel) => (
				<li>
					<NavLink
						style={{ color: 'white' }}
						activeStyle={{
							fontWeight: 'bold',
							color: 'blue',
						}}
						exact
						to={{ pathname: '/details-channel', state: { channel, lobby, channels } }}
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
			<h5>CHANNELS</h5>
			<li>
				<NavLink
					style={{ color: 'red' }}
					activeStyle={{
						fontWeight: 'bold',
						color: 'blue',
					}}
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
