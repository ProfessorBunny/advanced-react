import React, { useState } from 'react'
const UseStateGotcha = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount((prevState) => {
      return prevState + 1
    })
  }
  console.log(count)
  return (
    <>
      <h2>Count: {count}</h2>
      <button className="btn" onClick={increment}>
        Increase
      </button>
    </>
  )
}

export default UseStateGotcha
