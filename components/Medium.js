import Image from 'next/image'
import React from 'react'

function Medium({img, title}) {
  return (
      <div className='p-2 cursor-pointer transition duration-200 hover:scale-105 transform ease-out'>
        <div className='relative h-80 w-80'>
            <Image className=' rounded-lg' src={img} layout="fill" />
        </div>
        <h3 className='font-semibold text-lg mt-3'>{title}</h3>
      </div>
  )
}

export default Medium