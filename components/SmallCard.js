import Image from 'next/image'
import React from 'react'

function SmallCard({ img, location, distance }) {
  return (
    <div className="m-2 mt-5 flex cursor-pointer items-center space-x-4 rounded-lg transition duration-200 hover:scale-105 hover:bg-gray-100 ease-linear">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className=" rounded-lg"  alt=''/>
      </div>

      <div>
        <div className="font-semibold">{location}</div>
        <div className='text-gray-500'>{distance}</div>
      </div>
    </div>
  )
}

export default SmallCard
