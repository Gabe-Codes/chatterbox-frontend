import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import * as userAPI from '../../services/user-api';
import UserListPage from '../../pages/UserListPage/UserListPage';
import CreateUserPage from '../../pages/CreateUserPage/CreateUserPage';
import './App.css';

export default class App extends Component {
	state = {
		users: [],
	};

	async componentDidMount() {
		try {
			const users = await userAPI.getAll();
			this.setState({ users });
		} catch (err) {
			console.log(err);
		}
	}

	handleCreateUser = async (newUserData) => {
		try {
			const newUser = await userAPI.create(newUserData);
			this.setState(
				(state) => ({
					users: [...state.users, newUser],
				}),
				() => this.props.history.push('/')
			);
		} catch (err) {
			console.log(err);
		}
	};

	handleDeletePuppy = async (id) => {
		try {
			await userAPI.deleteOne(id);
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
					CHATTERBOX
					<nav>
						<NavLink exact to="/users">
							USERS LIST
						</NavLink>
						&nbsp;&nbsp;&nbsp;
						<NavLink exact to="/user-create">
							CREATE USER
						</NavLink>
					</nav>
				</header>
				<main>
					<Route
						exact
						path="/"
						render={({ history }) => (
							<UserListPage
								users={this.state.users}
								handleDeleteUser={this.handleDeleteUser}
							/>
						)}
					/>
					<Route
						exact
						path="/user-create"
						render={({ history }) => (
							<CreateUserPage handleCreateUser={this.handleCreateUser} />
						)}
					/>
				</main>
			</div>
		);
	}
}
