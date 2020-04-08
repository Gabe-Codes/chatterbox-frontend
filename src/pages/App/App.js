import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import * as chatterboxAPI from '../../services/chatterbox-api';
import './App.css';

export default class App extends Component {
  state = {
    users: []
  }
  
	render() {
		return (
			<div className="App">
				<header className="App-header"></header>
			</div>
		);
	}
}

