import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import userAPI from '../../services/user-api';
import lobbyAPI from '../../services/lobby-api';
import channelAPI from '../../services/channel-api';
import messageAPI from '../../services/message-api';
import HomePage from '../../pages/HomePage/HomePage';
import UserListPage from '../../pages/UserListPage/UserListPage';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import EditUserPage from '../../pages/EditUserPage/EditUserPage';
import UserDetailsPage from '../../pages/UserDetailsPage/UserDetailsPage';
import LobbyDetailsPage from '../../pages/LobbyDetailsPage/LobbyDetailsPage';
import AddLobbyPage from '../../pages/AddLobbyPage/AddLobbyPage';
import EditLobbyPage from '../../pages/EditLobbyPage/EditLobbyPage';
import ChannelDetailsPage from '../../pages/ChannelDetailsPage/ChannelDetailsPage';
import AddChannelPage from '../../pages/AddChannelPage/AddChannelPage';
import EditChannelPage from '../../pages/EditChannelPage/EditChannelPage';
import './App.css';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: userAPI.getUser(),
			users: [],
			lobbies: [],
			channels: [],
			messages: [],
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
			this.setState({ currentUser: null });
		} catch (err) {
			console.log(err);
		}
	};

	handleSignupOrLogin = () => {
		try {
			this.setState({ currentUser: userAPI.getUser() });
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
			this.setState({ lobbies: newLobbiesArray }, () =>
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

	handleAddMessage = async (newMessageData) => {
		try {
			const newMessage = await messageAPI.create(newMessageData);
			this.setState(
				(state) => ({
					messages: [...state.messages, newMessage],
				}),
				() => this.props.history.push('/')
			);
		} catch (err) {
			console.log(err);
		}
	};

	handleDeleteMessage = async (id) => {
		try {
			await messageAPI.deleteOne(id);
			this.setState(
				(state) => ({
					messages: state.messages.filter((p) => p._id !== id),
				}),
				() => this.props.history.push('/')
			);
		} catch (err) {
			console.log(err);
		}
	};

	handleUpdateMessage = async (updatedMessageData) => {
		try {
			const updatedMessage = await messageAPI.update(updatedMessageData);
			const newMessagesArray = this.state.messages.map((p) =>
				p._id === updatedMessage._id ? updatedMessage : p
			);
			this.setState({ messages: newMessagesArray }, () =>
				this.props.history.push('/')
			);
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<div className="App">
				<main>
					<Route
						exact
						path="/"
						render={({ history }) => (
							<HomePage
								user={this.state.currentUser}
								handleLogout={this.handleLogout}
								lobbies={this.state.lobbies}
							/>
						)}
					/>
					<Route
						exact
						path="/users"
						render={({ history }) => (
							<UserListPage
								users={this.state.users}
								user={this.state.currentUser}
								handleLogout={this.handleLogout}
								lobbies={this.state.lobbies}
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
								location={location}
								handleUpdateUser={this.handleUpdateUser}
								user={this.state.currentUser}
								handleLogout={this.handleLogout}
								lobbies={this.state.lobbies}
							/>
						)}
					/>
					<Route
						exact
						path="/details"
						render={({ location }) => (
							<UserDetailsPage
								location={location}
								handleDeleteUser={this.handleDeleteUser}
								user={this.state.currentUser}
								handleLogout={this.handleLogout}
								lobbies={this.state.lobbies}
							/>
						)}
					/>
					<Route
						exact
						path="/new-server"
						render={({ history }) => (
							<AddLobbyPage
								user={this.state.currentUser}
								handleAddLobby={this.handleAddLobby}
								handleLogout={this.handleLogout}
								lobbies={this.state.lobbies}
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
								user={this.state.currentUser}
								handleLogout={this.handleLogout}
								lobbies={this.state.lobbies}
							/>
						)}
					/>
					<Route
						exact
						path="/details-server"
						render={({ location }) => (
							<LobbyDetailsPage
								user={this.state.currentUser}
								channels={this.state.channels}
								handleDeleteLobby={this.handleDeleteLobby}
								location={location}
								handleLogout={this.handleLogout}
								lobbies={this.state.lobbies}
							/>
						)}
					/>
					<Route
						exact
						path="/new-channel"
						render={({ history, location }) => (
							<AddChannelPage
								handleAddChannel={this.handleAddChannel}
								location={location}
								channels={this.state.channels}
								user={this.state.currentUser}
								handleLogout={this.handleLogout}
								lobbies={this.state.lobbies}
							/>
						)}
					/>
					<Route
						exact
						path="/edit-channel"
						render={({ history, location }) => (
							<EditChannelPage
								handleUpdateChannel={this.handleUpdateChannel}
								location={location}
								user={this.state.currentUser}
								handleLogout={this.handleLogout}
								lobbies={this.state.lobbies}
							/>
						)}
					/>
					<Route
						exact
						path="/details-channel"
						render={({ location }) => (
							<ChannelDetailsPage
								location={location}
								handleDeleteChannel={this.handleDeleteChannel}
								handleAddMessage={this.handleAddMessage}
								handleDeleteMessage={this.handleDeleteMessage}
								user={this.state.currentUser}
								handleLogout={this.handleLogout}
								lobbies={this.state.lobbies}
							/>
						)}
					/>
				</main>
			</div>
		);
	}
}
