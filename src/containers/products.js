import React from 'react';
import { connect } from 'react-redux';
import Products from '../components/products';

function mapDispatchToProps(dispatch) {
    return {
        handleClick(id){
            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    id
                }
            })
        }
    }

}

function mapStateToProps(state) {
    return {
        products: state.products
    }

}

let ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer