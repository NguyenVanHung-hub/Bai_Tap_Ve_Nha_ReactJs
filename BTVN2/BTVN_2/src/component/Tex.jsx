import React from 'react'

const Tex = ({item}) => {
  return (
    <div className='tex'>
        <h3>{item.title}</h3>
        <p>{item.tex}</p>
    </div>
  )
}

export default Tex