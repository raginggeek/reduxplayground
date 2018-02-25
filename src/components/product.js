import React from 'react';

let Product = ({id, name, cost, category, handleClick}) => (
    <div>
        {name} ${cost} <button onClick={() => handleClick(id)}>Add to cart</button>
    </div>
);

export default Product;