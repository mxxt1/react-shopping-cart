import React, {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import { NavLink, BrowserRouter } from 'react-router-dom';

const Navigation = () => {

	const cart = useContext(CartContext);
	console.log(cart);
	return (
		<div className="navigation" data-testid='navigation'>
			<NavLink to="/" data-testid='product-link'>Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.storedCart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
