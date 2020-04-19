import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar/NavBar';
export default class EditChannelPage extends Component {
	state = {
		invalidForm: false,
		formData: this.props.location.state,
	};

	formRef = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleUpdateChannel(this.state.formData);
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
				<div className="wrapper row">
					<h1>Edit Channel</h1>
					<form
						className="col s12"
						ref={this.formRef}
						autoComplete="off"
						onSubmit={this.handleSubmit}
					>
						<div className="input-field col s12">
							<label>Name: </label>
							<input
								className="validate"
								type="text"
								name="name"
								value={this.state.formData.name}
								onChange={this.handleChange}
								required
							/>
						</div>
						<button
							className="waves-effect waves-light btn"
							type="submit"
							disabled={this.state.invalidForm}
						>
							SAVE CHANNEL
						</button>
						&nbsp;&nbsp;
						<button className="waves-effect waves-light btn deep-purple darken-1">
							<Link style={{ color: 'white' }} to="/">
								CANCEL
							</Link>
						</button>
					</form>
				</div>
			</>
		);
	}
}
