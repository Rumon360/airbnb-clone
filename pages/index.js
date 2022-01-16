import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import Smallcard from '../components/Smallcard';

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* main */}
      <main className=" max-w-7xl mx-auto px-8 sm:px-16">
        <section className=" pt-6">
          <h2 className=" text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Pull some data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <Smallcard
                key={item.index}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className=" text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item) => (
              <MediumCard key={item.index} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            img="http://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists created by Airbnb."
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('http://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const cardsData = await fetch('http://links.papareact.com/zp1').then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData,
    },
  };
}
