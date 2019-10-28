import React from 'react';


const pic = {
	width: '300px'
};

const ProductPics = (props) => {
	return (
		<div>
			<img style={pic} src={this.props.poster()} alt={props.item} />
		</div>
	);
};

export default ProductPics;
