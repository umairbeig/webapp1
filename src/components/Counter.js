import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    const getBackgroundColor = () => {
        const level = Math.min(count * 10, 255);
        return `rgba(${level}, ${level}, 255, 0.5)`;
    };

    return (
        <div className="counter" style={{ backgroundColor: getBackgroundColor() }}>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;