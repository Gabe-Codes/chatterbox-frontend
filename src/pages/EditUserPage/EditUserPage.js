import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar/NavBar';
import './EditUserPage.css'

export default class EditUserPage extends Component {
	state = {
		invalidForm: false,
		formData: this.props.location.state.user,
	};

	formRef = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleUpdateUser(this.state.formData);
	};

	handleChange = (e) => {
		const formData = {
			...this.state.formData,
			[e.target.name]: e.target.value,
		};
		this.setState({
			formData,
			invalidForm: !this.formRef.current.checkValidity(),
		});
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
				<div className="row edituser-container">
					<h1 className="edituser-title">Edit User</h1>
					<form
						className="col s6 edituser-form"
						ref={this.formRef}
						autoComplete="off"
						onSubmit={this.handleSubmit}
					>
						<div className="input-field col s8">
							<input
								className="validate input-text"
								type="email"
								name="email"
								value={this.state.formData.email}
								onChange={this.handleChange}
								required
							/>
							<span
								class="helper-text"
								data-error="Invalid Email Address"
							></span>
						</div>
						<div className="input-field col s8">
							<input
							className="input-text"
								type="text"
								name="username"
								value={this.state.formData.username}
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="input-field col s8">
							<input
							className="input-text"
								type="text"
								name="displayName"
								value={this.state.formData.displayName}
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="edituser-form-btns">
						<button
							className="waves-effect waves-light btn login-btn"
							type="submit"
							disabled={this.state.invalidForm}
							>
							SAVE
						</button>
						&nbsp;&nbsp;
						<button className="waves-effect waves-light btn login-btn">
							<Link style={{ color: 'white' }} to={{ pathname: '/users' }}>
								CANCEL
							</Link>
						</button>
							</div>
					</form>
				</div>
			</>
		);
	}
}
