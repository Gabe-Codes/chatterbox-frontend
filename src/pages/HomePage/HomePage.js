import React, { Component } from 'react';
import Navbar from '../../components/NavBar/NavBar';
import './HomePage.css';

export default class HomePage extends Component {
	isLoggedIn = () => {
		if (this.props.user) {
			return (
				<div className="home-container">
					<h1 className="home-welcome">Welcome to CHATTERBOX!</h1>
				</div>
			);
		}
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
				{this.isLoggedIn()}
			</>
		);
	}
}
