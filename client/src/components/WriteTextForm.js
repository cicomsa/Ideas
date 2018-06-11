import React, {PureComponent} from 'react'

export default class WriteForm extends PureComponent {
    state = {}

	handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
        [name]: value
        })
    }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="idea"></label>
					<textarea type="text" name="idea" id="text" value={
						this.state.idea || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Submit</button>
			</form>
		)
	}
}
