import { format } from 'date-fns';
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoStay from '../components/InfoStay';

function Search({searchResults}) {
    console.log('searchResults: ', searchResults);

    const router = useRouter();
    const { location, startDate, endDate, noOfGuest } = router.query;
    console.log(router.query);
    const formattedStartDate = format(new Date(startDate), 'dd MMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMM yy')
    const filterList = [
        {type: 'cancel', text: 'Cancellation Flexibility'},
        {type: 'cancel', text: 'Type of place'},
        {type: 'cancel', text: 'Price'},
        {type: 'cancel', text: 'Rcoms and Beds'},
        {type: 'cancel', text: 'More filters'},
    ]
  return (
    <div>
        <Header placeholder={`${location} | ${formattedStartDate} - ${formattedEndDate} | ${noOfGuest} guests`} />

        <main className="py-8 mx-auto max-w-7xl px-8 sm:px-6">
            <section>
                <p className='text-xs'>300+ stays - {formattedStartDate} - {formattedEndDate} - {noOfGuest} guests</p>
                <h1 className='font-bold text-4xl mt-2'>Stays in {location}</h1>

                <div className='hidden lg:flex space-x-4 mt-4'>
                    {filterList.map(({type, text}, index) => (
                        <button key={index} className='px-5 py-2 rounded-full font-semibold border bg-white shadow-md hover:shadow-lg active:scale-95 transition duration-200 transform ease-out'>{text}</button>
                    ))}
                </div>

                {/* Search result */}
                <div className='mt-5 space-y-4'>
                    {searchResults?.map(({location, title, description, img, price, star, total}, index) => (
                        <InfoStay location={location} description={description} img={img} price={price}  total={total} star={star} title={title} key={index} />
                    ))}
                </div>
            </section>
        </main>

        <Footer />
    </div>
  )
}

export default Search


export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json())
    return {
        props: {
            searchResults
        }
    }
}