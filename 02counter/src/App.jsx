
import { useState } from 'react';
import './App.css'

// we can add value upto 20 and remove value upto 0.
function App() {
  // let counter = 5 
  const [counter , setCounter] = useState(5)
 const addvalue = function(){
  // console.log("value added",Math.random());
     if(counter<20){
  setCounter(counter +1);
  
} 
console.log(" clicked",counter);

 }

 const removevalue = () =>{
  if(counter>0){
   setCounter(counter-1);
  }
  console.log("clicked",counter)
 }
  return (
    <>
     <h1>react</h1>
     <h2>Counter value : {counter}</h2>
  
     <button onClick={addvalue}>Add Value</button>
    <br />
    <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
