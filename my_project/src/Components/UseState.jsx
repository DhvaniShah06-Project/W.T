import React, { useState } from 'react'

function UseState() {
    const [count,setCount] = useState(0);
    const [isVisible,setisVisible] = useState(true);
    
  return (
   <>
   <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Increment</button><br/>
   Count : {count}<br/>
   <button className='btn btn-primary' onClick={()=> setisVisible(!isVisible)}>
    {isVisible ? "Hide" : "Show"}
   </button>
   {isVisible && <h1>I am Visible</h1>}
   </>
  )
}

export default UseState
