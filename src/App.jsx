import Number from './assets/components/Number'
import {useState} from'react'
import React from 'react'
function App(){
   
 
let [counter,setCounter]=useState(15)
  

  const addValue = () => {
    
    setCounter(counter+1)
  }
  const removeValue = ()=>{
    setCounter(counter-1)
  }
  return(
    <>
 <Number counter ={counter}
 addValue={addValue}
 removeValue={removeValue}/>
</>
  
    )
}

export default App
