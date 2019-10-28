import React from 'react';
import ColorItem from './ColorItem';
import ProductPics from './ProductPics';
import Size from './Size';

class Product extends React.Component {

    getPoster(term) {
        console.log(term)
    }

    render() {
        return (
            <div className="product">
                <ProductPics getImage={this.getPoster}/>
                <ColorItem />
                <Size />
            </div>
        );
    }
	
};

export default Product;
