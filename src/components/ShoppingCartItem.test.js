import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCart from '../components/ShoppingCart';
import Navigation from '../components/Navigation';
import Products from '../components/Products';
import Product from '../components/Product';
import App from '../App';
import Item from '../components/ShoppingCartItem';
import {getByTestId, 
    getByText, 
    wait, 
    await, 
    expect, 
    waitForElement, 
    async, 
    render, 
    fireEvent} from '@testing-library/react';



// test('remove button clicks ', () => {
//     const wrapper = getByTestId('navigation');
//     // rtl.fireEvent.click(getByTestId("remove-button"));
// })

// it('renders the nav', async () => {

//     const {getByTestId} = await render(<Navigation />);
//     fireEvent.
    
// });

// const result = rtl.render(<ShoppingCart />);


// test('shopping cart renders', async () => {
//     // expect(() => getByTestId('navigation'))

//     // await wait(() => {
//     //     expect(rtl.getByTestId('navigation')).toBeTruthy()
//     // })

//     // await waitForElement(() => getByTestId('navigation'))

//    await wait(() => getByTestId('navigation')); 

// })


test('Navigation renders', async () => {
    expect(() => getByText('Products')).toThrow()

    await wait(() => {
        expect(getByText('Products')).toBeTruthy()
    })

    await waitForElement(() => getByText('Products'))

});