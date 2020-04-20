import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar/NavBar';
import ChannelNavBar from '../../components/ChannelNavBar/ChannelNavBar';
import './EditChannelPage.css';
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
				<div>
					<ChannelNavBar lobby={this.props.location.state.lobby} channels={this.props.channels} />
				</div>
				<div className="row editchannel-container">
					<h1 className="editchannel-title">Edit Channel</h1>
					<form
						className="col s6 editchannel-form"
						ref={this.formRef}
						autoComplete="off"
						onSubmit={this.handleSubmit}
					>
						<div className="input-field col s8">
							<input
								className="input-text"
								placeholder="Name"
								type="text"
								name="name"
								value={this.state.formData.name}
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="editchannel-form-btns">
							<button
								className="waves-effect waves-light btn login-btn"
								type="submit"
								disabled={this.state.invalidForm}
							>
								SAVE
							</button>
							&nbsp;&nbsp;
							<button className="waves-effect waves-light btn login-btn">
								<Link style={{ color: 'white' }} to="/">
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
