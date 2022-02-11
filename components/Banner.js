import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image priority="true" src="https://links.papareact.com/0fm" layout='fill' objectFit='cover' alt='' />
        <div className='absolute top-1/2 w-full  text-center'>
            <p className='text-gray-800 font-semibold text-sm sm:text-2xl'>Not sure where to go? Perfect.</p>
            <button className='text-purple-500 font-medium bg-white px-10 py-4 my-3 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-300'>I&apos;m flexible</button>
        </div>
    </div>
  )
}

export default Banner