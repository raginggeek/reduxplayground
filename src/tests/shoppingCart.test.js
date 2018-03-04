import shoppingCart from "../reducers/shoppingCart";
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes';

describe('shoppingCart', () => {
    it('can add new products', () => {
        expect(shoppingCart([], {type: ADD_TO_CART, payload: { id: 22 }})).toEqual([22]);
    });

    it('can remove products', () => {
        expect(shoppingCart([22,11,33],
            {type: REMOVE_FROM_CART,
                payload: { id: 22 }})).toEqual([11,33]);
    });

    it('default actions return same state', () => {
        expect(shoppingCart([22], {type: 'foo', payload: {id: 22}})).toEqual([22]);
    });
});
