import Home from './comp/home'
import About from './comp/add'
import Main from './comp/main'
import {Route} from "react-router-dom"

import React from 'react'

function Rout() {
  return ( 
    <div className='main'>
    <Route path="/about" component={About}/>
    <Route path="/main" component={Main}/>
    <Route path="/home/:id" component={Home}/>
    </div>
  )
}

export default Rout