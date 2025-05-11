import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setcounter]=useState(0)

  //let counter=15
  const addvalue=()=>{
    //console.log("clicked",counter);
    //counter=counter+1
    if(counter>=20){
      alert("Can't Add further")
    }
    else{
      setcounter(counter+1)
    }
    
  }
  const removeValue=()=>{
    if(counter<=0){
      alert("Can't remove further")
    }
    else{
      setcounter(counter-1)
    }
  }
  return (
    <>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addvalue}>Add Value</button>
     <br />
     <button onClick={removeValue}>Remove Value</button>
     <p></p>
    </>
  )
}

export default App
