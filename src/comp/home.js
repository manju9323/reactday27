import React,{useContext,useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import { Famcontext } from '../App'

function Home() {
    let context =useContext(Famcontext)
    const[name, setname] = useState("")
    const[edu, setedu] = useState("")
    const[school, setschool] = useState("")
    const[work, setwork] = useState("")
    


    let use=useParams();
   const getdata=()=>{
    let m=(context.fam[use.id])
    setname(m.name)
    setedu(m.edu)
    setschool(m.school)
    setwork(m.work)
  
  }

    let fast=()=>{
      let arr=[...context.fam];
      //const m=(context.fam[use.id])
      arr.splice([use.id],1,{name,edu,school,work});
     context.setFam(arr)
      
    }
    
   
    useEffect(()=>{
      getdata()
    },[])

   
       return (
           <>
       <div className="pro">
           <Form className="aaa">
           
   
           <Form.Group className="mb-3 aaa" >
             <Form.Label>Name</Form.Label>
             <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e)=>setname(e.target.value)} />
           </Form.Group>
   
           <Form.Group className="mb-3 aaa" >
             <Form.Label>education</Form.Label>
             <Form.Control type="text" value={edu} placeholder="Education" onChange={(e)=>setedu(e.target.value)}/>
           </Form.Group>
   
           <Form.Group className="mb-3 aaa" >
             <Form.Label>school</Form.Label>
             <Form.Control type="text" value={school} placeholder="school" onChange={(e)=>setschool(e.target.value)} />
   
           </Form.Group>
   
           <Form.Group className="mb-3 aaa">
             <Form.Label>work</Form.Label>
             <Form.Control type="text" value={work} placeholder="work" onChange={(e)=>setwork(e.target.value)} />
           </Form.Group>
         
         <Form.Check type="checkbox" label="Check me out"/>
         </Form>
         </div>
         <Link to="/main">  <Button variant="primary" type="submit" onClick={fast} >
             Submit
           </Button></Link>
         
         </>
  )
}
export default Home