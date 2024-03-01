import React, {useEffect, useState} from 'react';

export default function App() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Hello world')
    },[])
    return (
        <div>
            <h1>Hello world</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Plus</button>
            <button onClick={() => setCount(count - 1)}>Minus</button>
        </div>
    );
};