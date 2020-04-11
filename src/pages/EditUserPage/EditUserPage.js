import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import {  } from 'react-materialize';

export default class EditUserPage extends Component {
	state = {
		invalidForm: false,
		formData: this.props.location.state.user,
	};

	formRef = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleUpdateUser(this.state.formData);
	};

	handleChange = (e) => {
		const formData = {
			...this.state.formData,
			[e.target.name]: e.target.value,
		};
		this.setState({
			formData,
			invalidForm: !this.formRef.current.checkValidity(),
		});
	};

	render() {
		return (
			<>
				<h1>Edit User</h1>
				<form
					ref={this.formRef}
					autoComplete="off"
					onSubmit={this.handleSubmit}
				>
					<div>
						<label>Email: </label>
						<input
							type="email"
							name="email"
							value={this.state.formData.email}
							onChange={this.handleChange}
							required
						/>
					</div>
					<div>
						<label>Username: </label>
						<input
							type="text"
							name="username"
							value={this.state.formData.username}
							onChange={this.handleChange}
							required
						/>
					</div>
					<div>
						<label>Display Name: </label>
						<input
							type="text"
							name="displayName"
							value={this.state.formData.displayName}
							onChange={this.handleChange}
							required
						/>
					</div>
					<button type="submit" disabled={this.state.invalidForm}>
						SAVE USER
					</button>
					&nbsp;&nbsp;
					<Link to="/">CANCEL</Link>
				</form>
			</>
		);
	}
}
