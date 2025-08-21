import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
// import Abc from './Components/Fndemo'
// import {Abc,Abc2,Abc3} from './Components/Demo'
// import username from './Components/Variable'
// import Demo from './Components/Variable'
// import {Greet,Greet2} from './Components/class'
// import Parent from './Components/PropsDemo';
// import Event from './Components/Event_Handle';
// import Display from './Components/Display';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Display/>

    {/* <Event/> */}
    {/* <Parent/> */}
    {/* Name = {username}
    <Abc/>
    <Abc2/>
    <Abc3/>
    <Demo/>
      <Greet/>
      <Greet2/> */}
  </StrictMode>,
)

