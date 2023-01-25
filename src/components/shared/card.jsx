import React from 'react'

function Card({children}) {
  return (
    <button className='card'>{children}</button>
  )
}

export default Card;