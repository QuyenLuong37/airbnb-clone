import React from 'react'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'


function InfoStay({location, title, description, img, price, total, star}) {
  return (
    <div className='flex py-7 px-2 first:border-t transition duration-200 cursor-pointer border-b hover:opacity-80 hover:shadow-lg'>
      <div className="relative h-36 w-48 md:h-52 md:w-80 flex-shrink-0">
        <Image className='rounded-lg w-full' src={img} layout='fill' objectFit='cover' />
      </div>

      <div className='flex flex-col flex-grow justify-between pl-5'>
        <div>
          <div className='flex justify-between items-center'>
            <p className='text-gray-400 text-sm md:text-base'>{location}</p>
            <HeartIcon className="h-5" />
          </div>
          <h3 className='font-semibold text-lg md:text-xl'>{title}</h3>
          <p className='text-gray-400 text-sm'>{description}</p>
        </div>
        <div>
          <p className="font-semibold text-right">{price}</p>
          <div className='flex justify-between  items-center'>
            <div className='flex items-end'>
              <StarIcon className='h-5 text-yellow-500' />
              <span className='ml-1  font-medium'>{star}</span>
            </div>
            <div className='text-gray-400'>{total}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoStay