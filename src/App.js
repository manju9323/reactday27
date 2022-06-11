import './App.css';
import Nav from './nav';
import Rout from './rout';
import  React,{ useState } from 'react';
import{BrowserRouter as Router} from 'react-router-dom'
export const Famcontext= React.createContext();



function App() {
let [fam,setFam]=useState([{name:"manju",edu:"be.eee",school:"cms",work:"fsd"},{name:"munusamy",edu:"10th",school:"govt",work:"farmer"},{name:"gopinath",edu:"bsc.maths",school:"cms",work:"film"},{name:"jayanthi",edu:"12th",school:"govt",work:"farmer"},{name:"esai",edu:"11th",school:"christ",work:"house"},{name:"varshini",edu:"good",school:"deeran chinnamalai",work:"happy"}])

  return (
    <div className="App">
      
      <Router >
    <Nav/>
    <Famcontext.Provider value={{fam,setFam}}>
    <Rout/>
    </Famcontext.Provider>
    </Router></div>
    
  );  
}

export default App;
