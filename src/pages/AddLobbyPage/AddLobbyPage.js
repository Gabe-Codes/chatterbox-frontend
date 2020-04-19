import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar/NavBar';
import './AddLobbyPage.css';

export default class AddLobbyPage extends Component {
	state = {
		invalidForm: true,
		formData: {
			name: '',
			password: '',
			owner: this.props.user,
		},
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleAddLobby(this.state.formData);
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
				<div className="row lobby-add-container">
					<h2 className="server-form-title">Create Lobby</h2>
					<form className="col s6 server-form" onSubmit={this.handleSubmit}>
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
						<div className="row">
							<div className="input-field col s8">
								<input
									className="input-text"
									type="password"
									placeholder="Password"
									value={this.state.password}
									name="password"
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div>
							<div className="server-form-btns">
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
