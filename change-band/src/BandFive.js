import React, { useState } from 'react';
import SimpleComp from './SubCompFive/SimpleComp';

const BandFive = () => {

  const [firstState, secondState] = useState({
    easyProperty: 'Simple Comp'
  })

  const buttonHandler = () => {

    secondState({
      easyProperty: 'Not So Simple Comp'
    })
  }


  return (
    <div className="py-3">
      <h1>New Component</h1>
      <SimpleComp easyProperty={firstState.easyProperty} />
      <button onClick={buttonHandler}>Submit</button>
    </div>
  )
}


export default BandFive;