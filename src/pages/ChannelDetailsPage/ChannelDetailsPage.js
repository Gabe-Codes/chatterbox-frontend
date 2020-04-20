import React from 'react';
import { Link } from 'react-router-dom';
import ChannelNavBar from '../../components/ChannelNavBar/ChannelNavBar';
import AddMessage from '../../components/AddMessage/AddMessage';
import MessageCard from '../../components/MessageCard/MessageCard';
import Navbar from '../../components/NavBar/NavBar';
import { Dropdown } from 'react-materialize';
import './ChannelDetailsPage.css';

export default function ChannelDetailsPage(props) {
	const path = props.location.state;

	function isOwner() {
		if (props.user._id === path.lobby.owner._id) {
			return (
				<Dropdown
					id="Dropdown_7"
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
					trigger={
						<i className="medium material-icons settings channel-settings">
							settings
						</i>
					}
				>
					<Link
						className="waves-effect waves-blue btn edit-btn"
						to={{ pathname: '/edit-channel', state: path.channel }}
					>
						EDIT
					</Link>
					<button
						className="waves-effect waves-blue btn delete-btn"
						onClick={() => props.handleDeleteChannel(path.channel._id)}
					>
						DELETE
					</button>
				</Dropdown>
			);
		}
	}

	return (
		<div>
			<div>
				<Navbar
					user={props.user}
					handleLogout={props.handleLogout}
					lobbies={props.lobbies}
				/>
			</div>
			<div>
				<ChannelNavBar lobby={path.lobby} channels={props.channels} />
			</div>
			<div className="channel-container">
				<h1 className="channel-title">{path.channel.name}</h1>
				{isOwner()}
				<div>
					<div className="message-feed">
						{path.channel.messages.map((message) => (
							<MessageCard
								message={message}
								handleDeleteMessage={props.handleDeleteMessage}
							/>
						))}
					</div>
					<AddMessage
						user={props.user}
						handleAddMessage={props.handleAddMessage}
						channel={path.channel}
					/>
				</div>
			</div>
		</div>
	);
}
