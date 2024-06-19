import React,{useState} from 'react' 
import '../style/counter.css'
const Counter = () => {
    const [counter, setCounter]=useState(0)
  return (
    <div className='lawda'>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter+1)}>add lawda</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounter(counter-1)}>Remove</button>
    </div>
  )
}

export default Counter