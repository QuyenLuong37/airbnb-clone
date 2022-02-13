import Image from 'next/image'
import React from 'react'

function LargeCard({img, title, description, btxText}) {
  return (
    <div className='relative py-16'>
        <div className='relative h-96 w-full'>
            <Image className='rounded-xl' src={img} layout="fill" />
        </div>

        <div className='absolute top-32 left-12'>
            <h2 className='font-semibold text-4xl mb-3 w-64'>{title}</h2>
            <p className='font-medium'>{description} </p>
            <button className='px-4 py-2 mt-4 rounded-md bg-black text-white roundeed-lg'>{btxText}</button>
        </div>
    </div>
  )
}

export default LargeCard