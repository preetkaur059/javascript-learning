import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1);
    const increment = () =>{
        setCount(prev => prev + 1);
    }
    const decrement = () =>{
        setCount(prev => prev - 1);
    }

  return (
    <div className='flex'>
        <button onClick={decrement}>-</button>
        <h1 >{count}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter
