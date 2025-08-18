import React, { useState } from 'react'

export const CounterComponent = () => {

    // let count = 0;

    const [isCount, setCount] = useState(0);


    const increment= ()=>{
        setCount(isCount+1);
        console.log('Increment Call',isCount)
    }


  return (
    <>
    <div className="container">
    <h1>Counter Componenet</h1>
    <p>{isCount}</p>
    <button onClick={increment}>Increment</button>
    </div>
    
    </>
  )
}
