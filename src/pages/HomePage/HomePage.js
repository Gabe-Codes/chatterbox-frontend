import React, { Component } from 'react';
import Navbar from '../../components/NavBar/NavBar';

export default class HomePage extends Component {
    render() {
        return (
			<div>
				<Navbar
					user={this.props.user}
					handleLogout={this.props.handleLogout}
					lobbies={this.props.lobbies}
				/>
			</div>
		);
	}
}
