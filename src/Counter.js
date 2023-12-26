import React from 'react'
import { useState, useRef } from 'react'
export default function Counter() {
    const [counter, setCounter] = useState(0)
    const counterRef = useRef(null)
    const handleIncrease = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    const handleReset = () => {
        setCounter(0)
    }
    const handleDecrease = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        } else {
            alert("Counter can not go below zero")
        }
    }
    const handleInput = () => {
        const enterNumber = Number(counterRef.current.value)
        setCounter(enterNumber)
        counterRef.current.value = null
    }
  return (
    <div>
        Counter: {counter} <br/>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
        <br/>
        <input type='number' ref={counterRef}/>
        <button onClick={handleInput}>Set custom value</button>
    </div>
  )
}
