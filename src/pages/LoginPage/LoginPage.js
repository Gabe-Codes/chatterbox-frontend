import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import userAPI from '../../services/user-api';

export default class LoginPage extends Component {
	state = {
		username: '',
		pw: '',
	};

	handleChange = (e) => {
		this.setState({
			// Using ES2015 Computed Property Names
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await userAPI.login(this.state);
			// Let <App> know a user has signed up!
			this.props.handleSignupOrLogin();
			// Successfully signed up - show GamePage
			this.props.history.push('/');
		} catch (err) {
			// Use a modal or toast in your apps instead of alert
			alert('Invalid Credentials!');
		}
	};

	render() {
		return (
			<div className="row card-container">
				<h2>Login</h2>
				<form className="col s12" onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="input-field col s4">
							<input
								className="input-text"
								type="text"
								placeholder="Username"
								value={this.state.username}
								name="username"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s4">
							<input
								className="input-text"
								type="password"
								placeholder="Password"
								value={this.state.pw}
								name="pw"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div>
						<div>
							<button className="waves-effect waves-blue btn login-btn">
								Login
							</button>
							&nbsp;&nbsp;&nbsp;
							<Link
								className="waves-effect waves-blue btn login-btn"
								to="/"
							>
								Cancel
							</Link>
							&nbsp;&nbsp;&nbsp;
							<Link
								className="waves-effect waves-blue btn login-btn"
								to="/signup"
							>
								SIGNUP
							</Link>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
