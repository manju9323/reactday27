import React from 'react'
import {NavLink} from 'react-router-dom'
function Nav() {
  return (
    <div className="side"> 
    <NavLink activeClassName="mm" className="si" to="/main">MAIN</NavLink>{"  "}
    <NavLink activeClassName="mm" className="si"  to="/about">ADD</NavLink>{" "}
    <NavLink activeClassName="mm"  className="si" to="/home/:id">EDIT</NavLink>
  
   </div>
    
  )
}

export default Nav