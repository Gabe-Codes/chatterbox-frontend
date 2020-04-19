import React from 'react';
import { Link } from 'react-router-dom';
import './LobbyDetailsPage.css';
import ChannelNavBar from '../../components/ChannelNavBar/ChannelNavBar';
import Navbar from '../../components/NavBar/NavBar';
import { Dropdown } from 'react-materialize';

export default function LobbyDetailsPage(props) {
	const lobby = props.location.state.lobby;
	const channels = props.channels;

	function isOwner() {
		if (props.user._id === lobby.owner._id) {
			return (
				<Dropdown
					id="Dropdown_6"
					options={{
						alignment: 'left',
						autoTrigger: true,
						closeOnClick: true,
						constrainWidth: true,
						container: null,
						coverTrigger: true,
						hover: false,
						inDuration: 150,
						onCloseEnd: null,
						onCloseStart: null,
						onOpenEnd: null,
						onOpenStart: null,
						outDuration: 250,
					}}
					trigger={<i className="large material-icons">settings</i>}
				>
					<Link to={{ pathname: '/edit-server', state: { lobby, channels } }}>
						EDIT
					</Link>
					<button onClick={() => props.handleDeleteLobby(lobby._id)}>
						DELETE
					</button>
				</Dropdown>
			);
		}
	}

	return (
		<>
			<div>
				<Navbar
					user={props.user}
					handleLogout={props.handleLogout}
					lobbies={props.lobbies}
				/>
			</div>
			<div>
				<div>
					<ChannelNavBar lobby={lobby} channels={channels} />
				</div>
			</div>
			<div>
				<h1>{lobby.name}</h1>
				{isOwner()}
			</div>
		</>
	);
}
