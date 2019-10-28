import React from 'react';

class SelectColour extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            value: props.selectedColour,
           
		};
    }

	handleChange = (e) => {
		const newValue = e.target.value;
		this.setState({
			value: newValue
		});

		if (this.props.onChangeHandler) {
			this.props.onChangeHandler(newValue);
		}
	};

	render() {
		return (
			<div className="parent">
				<select onChange={this.handleChange} value={this.state.value}>
					{this.props.colours && this.props.colours.map((color) => {
						return (
							<option key={color} value={color}>
								{color}
							</option>
						);
					})}
				</select>
             
			</div>
		);
	}
}

export default SelectColour;


