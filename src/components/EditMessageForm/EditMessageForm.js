import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MessageForm extends Component {
    state = {
		invalidForm: false,
		formData: this.props.location.state.message,
	};

	formRef = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleUpdateMessage(this.state.formData);
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
				<div className="row">
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
							SAVE SERVER
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
