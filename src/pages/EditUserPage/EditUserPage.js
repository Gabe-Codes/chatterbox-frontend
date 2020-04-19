import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar/NavBar';

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
				<div>
					<Navbar
						user={this.props.user}
						handleLogout={this.props.handleLogout}
						lobbies={this.props.lobbies}
					/>
				</div>
				<div className="wrapper row">
					<h1>Edit User</h1>
					<form
						className="col s12"
						ref={this.formRef}
						autoComplete="off"
						onSubmit={this.handleSubmit}
					>
						<div className="input-field col s12">
							<label>Email: </label>
							<input
								className="validate"
								type="email"
								name="email"
								value={this.state.formData.email}
								onChange={this.handleChange}
								required
							/>
							<span
								class="helper-text"
								data-error="Invalid Email Address"
							></span>
						</div>
						<div className="input-field col s12">
							<label>Username: </label>
							<input
								type="text"
								name="username"
								value={this.state.formData.username}
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="input-field col s12">
							<label>Display Name: </label>
							<input
								type="text"
								name="displayName"
								value={this.state.formData.displayName}
								onChange={this.handleChange}
								required
							/>
						</div>
						<button
							className="waves-effect waves-light btn"
							type="submit"
							disabled={this.state.invalidForm}
						>
							SAVE USER
						</button>
						&nbsp;&nbsp;
						<button className="waves-effect waves-light btn deep-purple darken-1">
							<Link style={{ color: 'white' }} to={{ pathname: '/users' }}>
								CANCEL
							</Link>
						</button>
					</form>
				</div>
			</>
		);
	}
}
