import Image from 'next/image'
import React from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 md:px-10 shadow-md">
      <div className="relative my-auto flex h-10 items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectPosition="left"
          objectFit="contain"
          alt=''
        />
      </div>
      
      {/* Middle */}
      <div className='flex justify-between items-center border-solid rounded-full md:border-2 md:shadow-md py-2'>
        <input className='outline-none flex-grow pl-5 bg-transparent text-gray-600 placeholder-gray-400' placeholder='Start your search' />
        <SearchIcon className='hidden md:inline-flex cursor-pointer mx-2 h-8 bg-red-400 rounded-full p-2 text-white' />
      </div>

      {/* Right */}
      <div className='flex items-center justify-end space-x-4 text-gray-600'>
        <div className='hidden md:inline font-semibold'>Become a Host</div>
        <GlobeAltIcon className='cursor-pointer h-6' />
        <div className='flex border-2 rounded-full p-2 space-x-2'>
          <MenuIcon className='cursor-pointer h-6' />
          <UserCircleIcon className='cursor-pointer h-6' />
        </div>
      </div>
    </header>
  )
}

export default Header
