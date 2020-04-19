import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar/NavBar';
import ChannelNavBar from '../../components/ChannelNavBar/ChannelNavBar';
import './AddChannelPage.css'

export default class AddChannelPage extends Component {
	state = {
		invalidForm: true,
		formData: {
			name: '',
			lobby: this.props.location.state.lobby,
		},
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleAddChannel(this.state.formData);
	};

	handleChange = (e) => {
		const formData = {
			...this.state.formData,
			[e.target.name]: e.target.value,
		};
		this.setState({ formData });
	};

	render() {
		return (
			<>
				<div>
					<Navbar
						user={this.props.user}
						handleLogout={this.props.handleLogout}
						lobbies={this.props.lobbies}
					/>
				</div>
				<div>
					<ChannelNavBar
						lobby={this.props.location.state.lobby}
						channels={this.props.channels}
					/>
				</div>
				<div className="row">
					<h2 className="channel-form-title">Create Channel</h2>
					<form className="col s6 channel-form" onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="input-field col s8">
								<form>
									<input
										className="input-text"
										type="text"
										placeholder="Name"
										autoComplete={'off'}
										value={this.state.name}
										name="name"
										onChange={this.handleChange}
										required
									/>
								</form>
							</div>
						</div>
						<div>
							<div className="channel-form-btns">
								<button className="waves-effect waves-blue btn login-btn">
									Create
								</button>
								&nbsp;&nbsp;
								<button className="waves-effect waves-blue btn login-btn">
									<Link style={{ color: 'white' }} to="/">
										Cancel
									</Link>
								</button>
							</div>
						</div>
					</form>
				</div>
			</>
		);
	}
}
