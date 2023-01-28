import React from 'react';
import Circle from './shared/Circle';




function Numbers({getNumeral}) {

     const numbers = [1,2,3,4,5,6,7,8,9,"00",0, "Ans"]
     
  return (
    <div className='numbers'>
         {numbers.map((num, index) => <Circle key={index} getValue={getNumeral} >{num}</Circle>)}
    </div>
  )
}

export default Numbers;