import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div className="flex items-center justify-center space-x-4">
            <button 
                className="bg-red-500 text-white p-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
                onClick={decrease}
            >
                -
            </button>
            <h1 className="text-3xl font-semibold">{count}</h1>
            <button 
                className="bg-green-500 text-white p-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
                onClick={increase}
            >
                +
            </button>
        </div>
    );
}

export default Count;
