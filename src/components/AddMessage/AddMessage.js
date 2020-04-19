import React, { Component } from 'react';
import './AddMessage.css';

export default class AddMessage extends Component {
	state = {
		invalidForm: true,
		formData: {
			postedBy: this.props.user,
			content: '',
			id: this.props.channel._id,
		},
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleAddMessage(this.state.formData);
	};

	handleChange = (e) => {
		const formData = {
			...this.state.formData,
			[e.target.name]: e.target.value,
		};
		this.setState({ formData });
	};

	render() {
		return (
			<>
				<div className="row message-container">
					<form className="col s12" onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="input-field col s8 message-wrapper">
								<form className="message-form">
									<input
										className="input-text message-input"
										type="text"
										placeholder="Message"
										autoComplete={'off'}
										value={this.state.name}
										name="content"
										onChange={this.handleChange}
										required
									/>
									<button className="waves-effect waves-blue btn login-btn message-btn">
										<i className="material-icons">send</i>
									</button>
								</form>
							</div>
						</div>
					</form>
				</div>
			</>
		);
	}
}
