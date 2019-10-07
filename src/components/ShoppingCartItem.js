import React, {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';

const Item = props => {

	const cart = useContext(CartContext);
	console.log(cart); 

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button data-testid='remove-button' onClick={()=> cart.removeItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
