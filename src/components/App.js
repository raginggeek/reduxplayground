import React, { Component } from 'react';
import '../App.css';
import Products from "../containers/products";
import ShoppingCart from "../containers/shoppingCart"

class App extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to our shop</h1>
                <Products/>
                <ShoppingCart/>
            </div>
        );
    }
}

export default App;
