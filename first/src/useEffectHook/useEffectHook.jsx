import React, { useEffect, useState } from 'react'

export const useEffectHook = () => {

    const [isCount, setCount] = useState(1);
    const [isAnotherCount, setAnotherCount] = useState(0);

    const incrementHandler = () => {
        setCount(isCount + 1);
        //  console.log(isCount)
    }
    const decrementHandler = () => {
        setAnotherCount(isAnotherCount - 10);
        //  console.log(isCount)
    }

    const TodosApi = ()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${isCount}`)
      .then(response => response.json())
      .then(json => console.log(json))
    }
    
    useEffect(() => {
        console.log('counter: ',isCount)
        TodosApi();
    },[isCount])
    
    useEffect(()=>{
        console.log('Decrement: ',isAnotherCount)
    },[isAnotherCount])

    return (<>
        <h1 className='text-center'>Counter APP with useEffect:</h1>
        <div className="container">
            <p>Count: {isCount}</p>

            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>

    </>)
}
