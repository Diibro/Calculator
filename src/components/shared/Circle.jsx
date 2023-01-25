import React from 'react'

function Circle({cont,children, getValue}) {
  return (
    <button className={cont} onClick={getValue} >{children}</button>
  )
}

export default Circle;

Circle.defaultProps ={
     cont: "number"
}
