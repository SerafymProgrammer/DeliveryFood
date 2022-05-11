import React, {useState} from 'react';

const CounterComponent = () => {
    const [counter, set_counter] = useState(0)

    const increment_counter = () => {
        set_counter(counter=>counter+1);
    }

    const decrement_counter = () => {
        set_counter(counter=>counter-1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment_counter}>increment</button>
            <button onClick={decrement_counter}>decrement</button>

        </div>
    );
};

export default CounterComponent;