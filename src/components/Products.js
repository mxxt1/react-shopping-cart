import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext';

// Components
import Product from './Product';


const Products = () => {

	const products = useContext(ProductContext);


	return (
		<div className="products-container">
			{products.products.map((product, index) => {
				return <Product
					key={index}
					product={product}
					addItem={products.addItem}
				/>
			})}
		
		</div>
	);
};

export default Products;
