import React from 'react'

const BrandBox = ({image}) => {
    return (
        <div className='px-8 py-4 rounded-2xl border border-borderGray flex justify-center items-center '>
            <img src={image} className='w-20 h-20 object-contain' />
        </div>
    )
}

export default BrandBox