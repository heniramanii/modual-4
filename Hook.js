import React, { useEffect, useState } from 'react'

const Hook = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        document.title = `  ${count} `;
        return () => {
            document.title = 'React App';
        };
    }, [count]);
    return (
        <>
            <div>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </>
    )
}

export default Hook


