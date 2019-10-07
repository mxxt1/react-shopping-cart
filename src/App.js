import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';
import {useLocalStorage} from './hooks/useLocalStorage';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	const [storedCart, setStoredCart] = useLocalStorage('cart', cart)

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
		setStoredCart([...cart, item]);
	};


	const removeItem = itemID => {
		return setStoredCart(storedCart.filter(item => item.id !== itemID));
	};

	return (
		<div className="App">
		<ProductContext.Provider value={{products, addItem}}>	
		<CartContext.Provider value={{storedCart, removeItem}}>
			<Navigation />
			{/* Routes */}
				<Route
					exact
					path="/"
					component={Products}
				/>
				<Route
					path="/cart"
					component={ShoppingCart}
				/>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
