import React, {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

	const cart = useContext(CartContext);
	console.log(cart);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.storedCart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
