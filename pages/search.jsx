import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

export default function Search({ searchResults }) {
  const router = useRouter();

  const { location, numberOfGuests, startDate, endDate } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yyyy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yyyy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeHolder={`${location} | ${range} | ${numberOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className=" text-xs">
            300+ Stays - {range} - for {numberOfGuests} guests
          </p>
          <h1 className=" text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden md:inline-flex items-center mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="p-tag-search">Cancellation Flexibility</p>
            <p className="p-tag-search">Type of Place</p>
            <p className="p-tag-search">Price</p>
            <p className="p-tag-search">Rooms and Beds</p>
            <p className="p-tag-search">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
                index,
              }) => (
                <div key={index}>
                  <InfoCard
                    img={img}
                    title={title}
                    description={description}
                    location={location}
                    star={star}
                    price={price}
                    total={total}
                  />
                </div>
              )
            )}
          </div>
        </section>
        <section className="hidden lg:inline-flex lg:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const searchResults = await fetch('http://links.papareact.com/isz').then(
    (result) => result.json()
  );
  return {
    props: {
      searchResults: searchResults,
    },
  };
}
