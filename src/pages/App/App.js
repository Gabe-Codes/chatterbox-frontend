import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import userAPI from '../../services/user-api';
import Navbar from '../../components/NavBar/NavBar';
import UserListPage from '../../pages/UserListPage/UserListPage';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import EditUserPage from '../../pages/EditUserPage/EditUserPage';
import UserDetailsPage from '../../pages/UserDetailsPage/UserDetailsPage';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
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

	handleUpdateUser = async (updatedUserData) => {
		try {
			const updatedUser = await userAPI.update(updatedUserData);
			const newUsersArray = this.state.users.map((p) =>
				p._id === updatedUser._id ? updatedUser : p
			);
			this.setState({ users: newUsersArray }, () =>
				this.props.history.push('/')
			);
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<div className="App">
				<header>
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
					<Route
						exact
						path="/edit"
						render={({ history, location }) => (
							<EditUserPage
								handleUpdateUser={this.handleUpdateUser}
								location={location}
							/>
						)}
					/>
					<Route
						exact
						path="/details"
						render={({ location }) => (
							<UserDetailsPage location={location} />
						)}
					/>
				</main>
			</div>
		);
	}
}
