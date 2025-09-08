import React, { useState } from 'react'

function HooksDemo() {
    const [Count,setCount] = useState(0);
  return (
   <>
   Count = {Count}
   <button onClick={()=>{
    setCount(Count+1)
   }}>Increment</button>
   </>
  )
}

export default HooksDemo
