import React from 'react'
import { Outlet } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'

function Layout() {
  return (
    <div>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
