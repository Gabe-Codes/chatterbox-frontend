import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import userAPI from '../../services/user-api';
import Navbar from '../../components/NavBar/NavBar';
import UserListPage from '../../pages/UserListPage/UserListPage';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import './App.css';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			users: [],
			user: userAPI.getUser(),
		};
	}

	async componentDidMount() {
		try {
			const users = await userAPI.getAll();
			this.setState({ users });
		} catch (err) {
			console.log(err);
		}
	}

	handleLogout = () => {
		try {
			userAPI.logout();
			this.setState({ user: null });
		} catch (err) {
			console.log(err);
		}
	};

	handleSignupOrLogin = () => {
		try {
			this.setState({ user: userAPI.getUser() });
		} catch (err) {
			console.log(err);
		}
	};

	handleDeleteUser = async (id) => {
		try {
			await userAPI.deleteOne(id);
			await this.handleLogout;
			this.setState(
				(state) => ({
					users: state.users.filter((p) => p._id !== id),
				}),
				() => this.props.history.push('/users')
			);
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<span className="brand-logo">CHATTERBOX</span>
					<Navbar user={this.state.user} handleLogout={this.handleLogout} />
				</header>
				<main>
					<Route
						exact
						path="/users"
						render={({ history }) => (
							<UserListPage
								users={this.state.users}
								handleDeleteUser={this.handleDeleteUser}
							/>
						)}
					/>
					<Route
						exact
						path="/signup"
						render={({ history }) => (
							<SignupPage
								history={history}
								handleSignupOrLogin={this.handleSignupOrLogin}
							/>
						)}
					/>
					<Route
						exact
						path="/login"
						render={({ history }) => (
							<LoginPage
								history={history}
								handleSignupOrLogin={this.handleSignupOrLogin}
							/>
						)}
					/>
				</main>
			</div>
		);
	}
}
