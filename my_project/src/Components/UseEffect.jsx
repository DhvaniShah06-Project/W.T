import React, {useState, useEffect, use } from 'react'

function UseEffect() {

   const [count,setCount] = useState(0);
      const [isVisible,setisVisible] = useState(true);
      const [seconds,setSeconds] = useState(0);
      useEffect(()=>{
        setTimeout(() => {
          setSeconds(seconds + 1)
        }, 1000);
      },[seconds])
      // useEffect (()=>{
      //   console.log("Default Called");
      // })
      // useEffect(()=>{
      //   console.log("Count called");
      // },[count])
      // useEffect(()=>{
      //   console.log("Visible called");
      // },[isVisible])
      // useEffect(()=>{
      //   console.log("Any of them is called")
      // },[count,isVisible])
    return (
     <>
     <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Increment</button><br/>
     Count : {count}<br/>
     <button className='btn btn-primary' onClick={()=> setisVisible(!isVisible)}>
      {isVisible ? "Hide" : "Show"}
     </button>
     {isVisible && <h1>I am Visible</h1>}
     <br/>
     Seconds : {seconds}
     </>
    )
    
  return (
   <>
   </>
  )
}

export default UseEffect
