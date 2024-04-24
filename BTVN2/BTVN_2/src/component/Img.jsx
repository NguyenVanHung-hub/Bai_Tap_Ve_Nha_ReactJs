import React from 'react'

const Img = ({item}) => {
  return (
    <div className='img'>
        <img src={item.img} alt="" />
    </div>
  )
}

export default Img