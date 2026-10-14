import React from 'react'
import { useState } from 'react'

const Increment = () => {
  
    const [first, setfirst] = useState(0)
    const increment = () => {
        setfirst(first + 1)
    }
    const decreamnet = () => {
        setfirst(first - 1)
    }
  return (
    <>
    <h1>{first}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decreamnet}>Decrement</button>
    </>
    )
}

export default Increment