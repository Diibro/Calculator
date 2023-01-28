import React from 'react';
import Card from './shared/card';

function Functions({getchildCont}) {
     const functionSigns = ["x2", "x^y", "sqr", "ln", "log", "sin", "cos", "tan"]
  return (
    <div className='functions'>
     {functionSigns.map((sign, index) => <Card key={index} getChild={getchildCont} >{sign}</Card>)}
    </div>
  )
}

export default Functions;