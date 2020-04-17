import React from 'react';
import { Link } from 'react-router-dom';
import ChannelNavBar from '../../components/ChannelNavBar/ChannelNavBar';
import AddMessage from '../../components/AddMessage/AddMessage';
import { Dropdown } from 'react-materialize';

export default function ChannelDetailsPage(props) {
	const path = props.location.state;
	return (
		<div>
			<div>
				<ChannelNavBar lobby={path.lobby} channels={path.channels} />
			</div>
			<div>
				<h1>{path.channel.name}</h1>
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
					trigger={<i className="large material-icons">settings</i>}
				>
					<Link to={{ pathname: '/edit-channel', state: path.channel }}>
						EDIT
					</Link>
					<button onClick={() => props.handleDeleteChannel(path.channel._id)}>
						DELETE
					</button>
				</Dropdown>
			</div>
            <div>
                <h3>{path.channel.messages}</h3>
                <AddMessage user={props.user} handleAddMessage={props.handleAddMessage}/>
            </div>
		</div>
	);
}
