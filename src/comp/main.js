import React,{useContext} from 'react'
import Table from 'react-bootstrap/Table' 
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import { Famcontext } from '../App'


function Main() {
  let context =useContext(Famcontext)

function del(i){
 let arr=[...context.fam];
  arr.splice(i,1);
  context.setFam(arr)
}



  return (
    
    <div>
      <h1 className='h1'>context method with using CRUD operation</h1>
    <Table bordered className='tab'>
    <thead >
      <tr className='th'>
        <th>NAME</th>
        <th>EDUCATION</th>
        <th>SCHOOL</th>
        <th>WORK</th>
        <th>EDIT</th>
      </tr>
    </thead>
    <tbody >
     {context.fam.map((x,i)=>{return <tr className='td'>
        <td>{x.name}</td>
        <td>{x.edu}</td>
        <td>{x.school}</td>
        <td>{x.work}</td>
        <td><Link to={`/home/${i}`}><Button variant="primary">EDIT</Button></Link>{' '}
        <Button variant="danger" onClick={()=>del(i)}>DELETE</Button>{' '}</td>
        
      </tr>})
       }
    </tbody>
  </Table></div>
  )
}

export default Main