import React from 'react'

function Tasks(props) {
  return (
    <div className='Tasks'>
    <div className='Text'>
    <p>{props.Title}</p>
    <span>{props.Description}</span>
    
    </div>
    <button onClick={()=>props.func(props.i)}>-</button>
    </div>
  )
}

export default Tasks