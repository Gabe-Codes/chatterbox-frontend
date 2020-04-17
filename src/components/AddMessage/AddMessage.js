import React, { Component } from 'react';

export default class AddMessage extends Component {
	state = {
		invalidForm: true,
		formData: {
			postedBy: this.props.user,
			content: '',
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
				<div className="row wrapper">
					<form className="col s12" onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="input-field col s12">
								<form>
									<input
										type="text"
										placeholder="Content"
										autoComplete={'off'}
										value={this.state.name}
										name="content"
										onChange={this.handleChange}
										required
									/>
								</form>
							</div>
						</div>
						<div>
							<div>
								<button className="waves-effect waves-light btn deep-purple darken-1">POST</button>
							</div>
						</div>
					</form>
				</div>
			</>
		);
	}
}