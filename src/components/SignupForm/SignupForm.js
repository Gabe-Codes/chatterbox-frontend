import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userAPI from '../../services/user-api';

export default class SignupForm extends Component {
	state = {
		username: '',
		displayName: '',
		email: '',
		password: '',
		passwordConf: '',
	};

	handleChange = (e) => {
		this.props.updateMessage('');
		this.setState({
			// Using ES2015 Computed Property Names
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		await this.setState({ displayName: this.state.username });
		try {
			await userAPI.signup(this.state);
			// Let <App> know a user has signed up!
			this.props.handleSignupOrLogin();
			// Successfully signed up - show GamePage
			this.props.history.push('/');
		} catch (err) {
			// Invalid user data (probably duplicate email)
			this.props.updateMessage(err.message);
		}
	};

	isFormInvalid() {
		return !(
			this.state.username &&
			this.state.email &&
			this.state.password === this.state.passwordConf
		);
	}

	render() {
		return (
			<div className="row">
				<h2>Sign Up</h2>
				<form className="col s12" onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="input-field col s12">
							<input
								className="validate"
								type="email"
								placeholder="Email"
								value={this.state.email}
								name="email"
								onChange={this.handleChange}
							/>
							<span
								className="helper-text"
								data-error="Invalid Email Address"
							></span>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input
								className="validate"
								type="text"
								placeholder="Username"
								value={this.state.username}
								name="username"
								onChange={this.handleChange}
							/>
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
					<div className="row">
						<div className="input-field col s12">
							<input
								type="password"
								placeholder="Confirm Password"
								value={this.state.passwordConf}
								name="passwordConf"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div>
						<div>
							<button
								className="waves-effect waves-light btn"
								disabled={this.isFormInvalid()}
							>
								Sign Up
							</button>
							&nbsp;&nbsp;
							<button className="waves-effect waves-light btn deep-purple darken-1">
								<Link style={{color: 'white'}} to="/">Cancel</Link>
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
