import React, { Component } from 'react';

export default class CreateUserPage extends Component {
	state = {
		invalidForm: true,
		formData: {
			username: '',
			password: '',
			email: '',
		},
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleCreateUser(this.state.formData);
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
				<h1>CREATE USER</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Username (required)</label>
						<input
							className="form-control"
							name="username"
							value={this.state.formData.username}
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label>User's Password (required)</label>
						<input
							className="form-control"
							name="password"
							value={this.state.formData.password}
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label>User's Email (required)</label>
						<input
							className="form-control"
							name="email"
							value={this.state.formData.email}
							onChange={this.handleChange}
							required
						/>
					</div>
					<button
						type="submit"
						className="btn"
						disabled={!this.state.invalidForm}
					>
						CREATE USER
					</button>
				</form>
			</>
		);
	}
}
