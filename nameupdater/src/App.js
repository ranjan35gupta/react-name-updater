import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { dropRight } from 'lodash';
import { hover } from '@testing-library/user-event/dist/hover';
 
function App() {
     
        const [name,setName]= useState(" ")
        const [dummyName,setDummyName]=useState(" ")
      function displayName(){
         setName(dummyName)
         setDummyName('')
         }
       function namechange(e){
      setDummyName(e.target.value)
    }
    return (
    <div style={{border:"2px solid blue",
    width:"50vh",
    marginRight:"37px",
    height:"50vh",
    background:"aqua"}}>
    
      <input  value={dummyName}  onChange={namechange} placeholder="Add your name" style={{width:"250px",
      height:"35px",
      marginTop:"50px",
      marginLeft:"20px",
      marginRight:"35px",
    }} ></input>
      
      <button onClick= {displayName} style={{width:"90px",
    height:"30px",
    border:"3px solid red",
    cursor:"pointer",
     borderRadius:"5px",
     
     }}>Submit</button>
    
    <h2 style={{textAlign:"center",
  color:"brown"}}>Hi my name is:{name}</h2>
    </div>
  );
}
export default App;