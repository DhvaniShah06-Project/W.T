import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import UseState from './Components/UseState.jsx';
import UseEffect from './Components/UseEffect.jsx';
// import Abc from './Components/Fndemo'
// import {Abc,Abc2,Abc3} from './Components/Demo'
// import username from './Components/Variable'
// import Demo from './Components/Variable'
// import {Greet,Greet2} from './Components/class'
// import Parent from './Components/PropsDemo';
// import Event from './Components/Event_Handle';
// import Display from './Components/Display';
// import Mapdemo from './Components/MapDemo';
// import Mapcard from './Components/MapCard';
// import A from './Components/Drilling'
// import One from './Components/CardDrilling';
// import Name from './Components/MapDrilling'
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Layout from './Components/Layout';
 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseEffect/>

{/* // <BrowserRouter>
// <Routes>
//   <Route  path="/" element={<Layout/>}>
//     <Route index element={<Home/>}/>
//   <Route path="/home" element={<Home/>}/>
//   <Route path='/about' element={<About/>}/>
//   <Route path='/contact' element={<Contact/>}/>
//   </Route>
  
// </Routes>
// </BrowserRouter> */}
  </StrictMode>,
    {/* <Display/>
    
      <Mapdemo/>
    <Mapcard/>
    <Event/>
    <Parent/>
    Name = {username}
    <Abc/>
    <Abc2/>
    <Abc3/>
    <Demo/> 
      <Greet/>
      <Greet2/> 
        <One/>
    <A/> 
    <Name/>*/}
 
);