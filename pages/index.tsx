import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import Medium from '../components/Medium'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://airbnb-clone-merjthckq-quyenluong37.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="This is title?"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />
        <meta property="og:image" content="https://links.papareact.com/0fm" />
      </Head>

      <Header placeholder='Start your search' />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-6">
        <section className="pt-6">
          <h2 className="text-2xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
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
        <section className="pt-6">
          <h2 className="text-2xl font-semibold">Live Anywhere</h2>
          <div className="flex mt-4 overflow-auto overflow-y-hidden scrollbar-hide">
            {cardsData?.map((item, index) => (
              <Medium key={index} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard img='https://links.papareact.com/4cj' title='The Greatest Outdoors' description='Wilish curated by AirBnb.' btxText='Get started' />
      </main>
          <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch(`https://links.papareact.com/pyp`).then(
    (res) => res.json()
  )

  const cardsData = await fetch(`https://links.papareact.com/zp1`).then((res) =>
    res.json()
  )
  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
