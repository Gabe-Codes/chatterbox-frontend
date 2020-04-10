import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
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
			<div>
				<header>Log In</header>
				<form onSubmit={this.handleSubmit}>
					<div>
						<div>
							<input
								type="text"
								placeholder="Username"
								value={this.state.username}
								name="username"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div>
						<div>
							<input
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
							<button>Log In</button>
							&nbsp;&nbsp;&nbsp;
							<Link to="/">Cancel</Link>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
