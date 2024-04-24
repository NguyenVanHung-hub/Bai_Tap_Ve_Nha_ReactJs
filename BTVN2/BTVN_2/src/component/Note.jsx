import React from 'react'

const Note = ({item}) => {
  return (
    <div className='note'>
        <div className="icon">
            <i class="fa-regular fa-eye"></i>
            <span>{item.view}</span>
        </div>
        <div className="date">
            <p>{item.date}</p>
        </div>
    </div>
  )
}

export default Note