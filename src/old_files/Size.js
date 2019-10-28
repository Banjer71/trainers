import React from 'react';

class Size extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			size: null
		};
	}

	componentDidMount() {
		fetch('./trainers.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({
					size: data[0]
				});
			});
	}

	render() {	
		return (
			<div className="App">
				<select>
					{this.state.size &&
						this.state.size.allSizes.map((num) => {
							return <option key={num}>{num}</option>;
						})}
				</select>
			</div>
		);
	}
}

export default Size;
