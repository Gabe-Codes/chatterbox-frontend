import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import userAPI from '../../services/user-api';
import lobbyAPI from '../../services/lobby-api';
import channelAPI from '../../services/channel-api';
import Navbar from '../../components/NavBar/NavBar';
import UserListPage from '../../pages/UserListPage/UserListPage';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import EditUserPage from '../../pages/EditUserPage/EditUserPage';
import UserDetailsPage from '../../pages/UserDetailsPage/UserDetailsPage';
import LobbyDetailsPage from '../../pages/LobbyDetailsPage/LobbyDetailsPage';
import LobbyListPage from '../../pages/LobbyListPage/LobbyListPage';
import AddLobbyPage from '../../pages/AddLobbyPage/AddLobbyPage';
import EditLobbyPage from '../../pages/EditLobbyPage/EditLobbyPage';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import './App.css';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			users: [],
			user: userAPI.getUser(),
			lobbies: [],
			channels: [],
		};
	}

	async componentDidMount() {
		try {
			const users = await userAPI.getAll();
			this.setState({ users });
			const lobbies = await lobbyAPI.getAll();
			this.setState({ lobbies });
			const channels = await channelAPI.getAll();
			this.setState({ channels });
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

	handleAddLobby = async (newLobbyData) => {
		try {
			const newLobby = await lobbyAPI.create(newLobbyData);
			this.setState(
				(state) => ({
					lobbies: [...state.lobbies, newLobby],
				}),
				() => this.props.history.push('/')
			);
		} catch (err) {
			console.log(err);
		}
	};

	handleDeleteLobby = async (id) => {
		try {
			await lobbyAPI.deleteOne(id);
			this.setState(
				(state) => ({
					lobbies: state.lobbies.filter((p) => p._id !== id),
				}),
				() => this.props.history.push('/')
			);
		} catch (err) {
			console.log(err);
		}
	};

	handleUpdateLobby = async (updatedLobbyData) => {
		try {
			const updatedLobby = await lobbyAPI.update(updatedLobbyData);
			const newLobbiesArray = this.state.lobbies.map((p) =>
				p._id === updatedLobby._id ? updatedLobby : p
			);
			this.setState({ channels: newLobbiesArray }, () =>
				this.props.history.push('/')
			);
		} catch (err) {
			console.log(err);
		}
	};

	handleAddChannel = async (newChannelData) => {
		try {
			const newChannel = await channelAPI.create(newChannelData);
			this.setState(
				(state) => ({
					channels: [...state.channels, newChannel],
				}),
				() => this.props.history.push('/')
			);
		} catch (err) {
			console.log(err);
		}
	};

	handleDeleteChannel = async (id) => {
		try {
			await channelAPI.deleteOne(id);
			this.setState(
				(state) => ({
					channels: state.channels.filter((p) => p._id !== id),
				}),
				() => this.props.history.push('/')
			);
		} catch (err) {
			console.log(err);
		}
	};

	handleUpdateChannel = async (updatedChannelData) => {
		try {
			const updatedChannel = await channelAPI.update(updatedChannelData);
			const newChannelsArray = this.state.channels.map((p) =>
				p._id === updatedChannel._id ? updatedChannel : p
			);
			this.setState({ channels: newChannelsArray }, () =>
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
						render={({ location }) => <UserDetailsPage location={location} />}
					/>
					<Route
						exact
						path="/servers"
						render={({ history }) => (
							<LobbyListPage
								lobbies={this.state.lobbies}
								handleDeleteLobby={this.handleDeleteLobby}
							/>
						)}
					/>
					<Route
						exact
						path="/new-server"
						render={({ history }) => (
							<AddLobbyPage
								user={this.state.user}
								handleAddLobby={this.handleAddLobby}
							/>
						)}
					/>
					<Route
						exact
						path="/edit-server"
						render={({ history, location }) => (
							<EditLobbyPage
								handleUpdateLobby={this.handleUpdateLobby}
								location={location}
							/>
						)}
					/>
					<Route
						exact
						path="/details-server"
						render={({ location }) => <LobbyDetailsPage location={location} />}
					/>
				</main>
			</div>
		);
	}
}
