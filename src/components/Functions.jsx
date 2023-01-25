import React from 'react';
import Card from './shared/card';

function Functions() {
     const functionSigns = ["x2", "x^y", "sqr", "ln", "log", "sin", "cos", "tan"]
  return (
    <div className='functions'>
     {functionSigns.map((sign, index) => <Card key={index} >{sign}</Card>)}
    </div>
  )
}

export default Functions;