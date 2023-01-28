import React from 'react'

function Card({children, getChild}) {
  return (
    <button className='card' onClick={getChild} >{children}</button>
  )
}

export default Card;