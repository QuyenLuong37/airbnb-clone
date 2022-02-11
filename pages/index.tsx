import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-6">
        <section className="pt-6">
          <h1 className="text-4xl font-semibold">Explore Nearby</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4'>
            {exploreData?.map((item, index) => {
              return (
                <SmallCard
                  key={index}
                  img={item.img}
                  distance={item.distance}
                  location={item.location}
                />
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch(`https://links.papareact.com/pyp`).then(
    (res) => res.json()
  )
  console.log('exploreData: ', exploreData)
  return {
    props: {
      exploreData,
    },
  }
}
