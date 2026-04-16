import React from 'react'

const Card = ({ image, title, description }) => {
  return (
    <div className='p-4 flex flex-col gap-4'>
      {/* Image */}
      <div>
        <img src={image}  alt="" />
      </div>
      {/* Contet */}
      <div className='flex flex-col justify-center items-center gap-2'>
        <h3 className='text-2xl'>{title}</h3>
        <p className='text-lightGray'>{description}</p>
      </div>
    </div>
  )
}

export default Card