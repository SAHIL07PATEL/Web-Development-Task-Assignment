import React from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(9)
  return (
    <div>
      <h2 className='mb-7 text-2xl font-bold'>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={{background:"green"}}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{background:"red",marginLeft:"30px"}}>Decrement</button>
    </div>
  )
}

export default Counter
