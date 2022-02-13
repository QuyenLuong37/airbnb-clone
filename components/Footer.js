import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-100'>
        <div className="mx-auto max-w-7xl px-8 sm:px-6 py-16">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 '>
                <div className='space-y-2'>
                    <h3 className='font-bold'>Support</h3>
                    <ul className='space-y-2 text-gray-800'>
                        <li>Help center</li>
                        <li>Safety information</li>
                        <li>Cancellation options</li>
                    </ul>
                </div>
                <div className='space-y-2'>
                    <h3 className='font-bold'>About</h3>
                    <ul className='space-y-2 text-gray-800'>
                        <li>Support Afghan refugees</li>
                        <li>Combating discrimination</li>
                    </ul>
                </div>
                <div className='space-y-2'>
                    <h3 className='font-bold'>Contact</h3>
                    <ul className='space-y-2 text-gray-800'>
                        <li>Try hosting</li>
                        <li>AirCover: protection for Hosts</li>
                    </ul>
                </div>
                <div className='space-y-2'>
                    <h3 className='font-bold'>Support</h3>
                    <ul className='space-y-2 text-gray-800'>
                        <li>Newsroom</li>
                        <li>Careers</li>
                        <li>Investors</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer