import React from 'react'

function LayoutCover({styleClass, removeCover}) {
  return (
    <div className={`layoutCover ${styleClass}`}>
     <div className='layout-welcome'>
          <h1>Welcome Welcome</h1>
          <p>This is a Calculator developed by <br/> <span>Dev Dushime Brother</span> </p>
          <p>Click the button below to use the calculator</p>
     </div>
     <button className='control-btn' onClick={removeCover}>OPEN</button>
    </div>
  )
}

export default LayoutCover;