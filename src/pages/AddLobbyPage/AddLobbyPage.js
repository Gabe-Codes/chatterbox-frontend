import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
				<div className="row wrapper">
					<h2>Create Lobby</h2>
					<form className="col s12" onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="input-field col s12">
								<form>
									<input
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
							<div className="input-field col s12">
								<input
									type="password"
									placeholder="Password"
									value={this.state.password}
									name="password"
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div>
							<div>
								<button className="waves-effect waves-light btn deep-purple darken-1">Create</button>
								&nbsp;&nbsp;
								<button className="waves-effect waves-light btn deep-purple darken-1">
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