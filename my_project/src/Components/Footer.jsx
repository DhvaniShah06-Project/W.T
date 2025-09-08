import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
   <div className="card" style={{textAlign:"center"}}>
  <div className="card-header">
  Footer
  </div>
  <div className="card-body">
    <h5 className="card-title">Footer</h5>
   
    <Link to="/home" className="btn btn-primary">Go Home</Link>
  </div>
</div>
  )
}

export default Footer
