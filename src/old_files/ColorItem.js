import React from 'react';
import ProductPics from './ProductPics';


class ColorItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			colours: ''
		};
	}

	componentDidMount() {
		fetch('./trainers.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({
					colours: data[0]
				});
			});
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	film = (post) => {
		let movie = this.state.colours.allImages;
		for (post in movie) {
			if (post === this.state.value) {
				return <img src={movie[post]} alt={post} />;
			}
		}
	};

	render() {
		let movie = this.state.colours.allImages;
		const film = (post) => {
			for (post in movie) {
				if (post === this.state.value) {
					return <img src={movie[post]} alt={post} />;
				}
			}
		};

		return (
			<div className="App">
				<select onChange={(event) => this.handleChange(event)}>
					{this.state.colours &&
						this.state.colours.allColors.map((item) => {
							return (
								<option key={item} value={item}>
									{item}
								</option>
							);
						})}
				</select>
				<ProductPics poster={() => this.film()} />
			</div>
		);
	}
}

export default ColorItem;
