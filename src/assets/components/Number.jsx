import React from 'react'

const Number = ({counter,addValue,removeValue}) => {


  return (
    <>
   <h1 class="heading"> Here is the number</h1>
   <h2>Counter value :{counter}</h2>
<button onClick={addValue}> Increment</button>
<button onClick={removeValue}>DECREMENT</button>


    </>
  )
}

export default Number