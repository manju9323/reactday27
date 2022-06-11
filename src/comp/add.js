import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import { Famcontext } from '../App'


function About() {
  let context =useContext(Famcontext)
 const[name, setname] = useState("")
 const[edu, setedu] = useState("")
 const[school, setschool] = useState("")
 const[work, setwork] = useState("")

let sub=()=>{
let newdata=[...context.fam]
newdata.push({name,edu,school,work})
context.setFam(newdata)
}

    return (
        <>
    <div className="pro">
        <Form className="aaa">
        

        <Form.Group className="mb-3 aaa" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setname(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 aaa" >
          <Form.Label>education</Form.Label>
          <Form.Control type="text" placeholder="Esucation" onChange={(e)=>setedu(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3 aaa" >
          <Form.Label>school</Form.Label>
          <Form.Control type="text" placeholder="school" onChange={(e)=>setschool(e.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3 aaa">
          <Form.Label>wor</Form.Label>
          <Form.Control type="text" placeholder="work" onChange={(e)=>setwork(e.target.value)} />
        </Form.Group>
      
      <Form.Check type="checkbox" label="Check me out"/>
      </Form>
      </div>
      <Link to="/main">  <Button variant="primary" type="submit" onClick={sub}>
          Submit
        </Button></Link>
      
      </>
    );
}

export default About