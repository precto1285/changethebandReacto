import React, { useState } from 'react';
import Compy from './SubCompFive/Compy';

const BandSix = () => {
  const [firstState, secondState] = useState({
    name: 'Eklok'
  })

  const buttonHandler = () => {
    secondState({
      name: 'Pongpleng'
    })
  }

  return (
    <div>
      <Compy name={firstState.name} />
      <button onClick={buttonHandler}>Pongpleng</button>
    </div>
  )
}
export default BandSix;