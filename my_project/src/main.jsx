import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
// import Abc from './Components/Fndemo'
// import {Abc,Abc2,Abc3} from './Components/Demo'
import username from './Components/Variable'
// import Demo from './Components/Variable'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    Name = {username}
    {/* <Abc/>
    <Abc2/>
    <Abc3/> */}
    {/* <Demo/> */}
  </StrictMode>,
)

// class Abc2 extends React.Component{
//    render()
//   {
//   return(
//     <>
// <h1>Hello World From Class</h1>
//     <h1>Hello class one</h1>
//     <h2>Hello class two</h2>
//     <h3>Hello class Three</h3>
//     </>
  
//   );
// }
// }