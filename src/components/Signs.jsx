import React from 'react'
import Circle from './shared/Circle';

function Signs({getSignal}) {
     const signs = ["+", "-", "x", "/", "=" ]
  return (
    <div className='Signs'>
          {signs.map((sign, index) => <Circle key={index} cont="sign" getValue={getSignal}>{sign}</Circle>)}
    </div>
  )
}

export default Signs;