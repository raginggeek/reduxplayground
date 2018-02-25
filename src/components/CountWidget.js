import React from 'react'

let CountWidget = ({count, handleClick}) => (
    <div className="App">
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment count</button>
    </div>
);


export default CountWidget;