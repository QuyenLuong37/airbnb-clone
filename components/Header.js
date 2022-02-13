import Image from 'next/image'
import React, { useState } from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRouter } from 'next/router';
function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberGuest, setNumberGuest] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };
  const router = useRouter();
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const resetInput = () => {
    setSearchInput(null)
  }

  const search = () => {
    setSearchInput(null);
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest: numberGuest
      }
    });
  }
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 md:px-10 shadow-md">
      <div className="relative my-auto flex h-10 items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectPosition="left"
          objectFit="contain"
          alt=''
          onClick={() => router.push('/')}
        />
      </div>
      
      {/* Middle */}
      <div className='flex justify-between items-center border-solid rounded-full md:border-2 md:shadow-md py-2'>
        <input  value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='outline-none flex-grow pl-5 bg-transparent text-gray-600 placeholder-gray-400' placeholder={placeholder} />
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

      {
        searchInput && (
          <div className='flex flex-col col-span-3 mx-auto mt-4'>
            <DateRangePicker
              minDate={new Date()}
              ranges={[selectionRange]}
              onChange={handleSelect}
              rangeColors={['#fd5b61']}
            />

            <div className='flex items-center border-b mb-4'>
              <h2 className=' flex-grow font-semibold'>Number of Guests</h2>

              <UsersIcon className='h-5' />
              <input value={numberGuest} min="1" onChange={e => setNumberGuest(e.target.value)} type="number"  className='pl-2 text-red-400 outline-none w-12' />
            </div>

            <div className='flex'>
              <button onClick={resetInput} className='flex-grow text-gray-400'>Cancel</button>
              <button onClick={search} className='flex-grow text-red-400'>Search</button>
            </div>
          </div>
        )
      }
    </header>
  )
}

export default Header
