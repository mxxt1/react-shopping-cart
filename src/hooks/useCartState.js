import {useEffect} from 'react';
import {CartContext} from '../contexts/CartContext';
import useLocalStorage from './useLocalStorage';

export default const useCartState = initialValue => {

    const [cart, setCart] = useLocalStorage('cart',initialValue);

    useEffect(() => {



    }, [cart]);

    return [cart. setCart];
}