import { useFetchCountries } from '../hooks/useFetchCountries';
import { RandomPopulationChart } from '../components/RandomPopulationChart';
import { NewsPage } from '../components/CountryNewsSection';
export const Home = () => {
  const { countries, loading, error } = useFetchCountries();
  // Calculate stats
  const totalCountries = countries.length;
  const totalPopulation = countries.reduce((sum, c) => sum + c.population, 0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Explore World Countries</h1>
            <p className="text-lg max-w-md mx-auto md:mx-0">
              Discover population stats, regions, languages, and more about every country in the world.
            </p>
          </div>

          {/* Image / Globe Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/assests/images/globe.webp"
              alt="World Map or Globe"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold">Total Countries</h3>
            <p className="text-2xl font-bold">{totalCountries}</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold">Total Population</h3>
            <p className="text-2xl font-bold">{(totalPopulation / 1e9).toFixed(2)} Billion</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold">Most Populous</h3>
            <p className="text-2xl font-bold">China</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold">Largest Area</h3>
            <p className="text-2xl font-bold">Russia</p>
          </div>
        </div>
      </section>

      <RandomPopulationChart allCountries={countries} />
      <NewsPage/>

      {/* Main Content Layout */}
      <div className="container justify-center mx-auto py-6 px-4 flex flex-col md:flex-row gap-8">
        {/* CTA Section */}
        <section className="text-center my-10">
          <h2 className="text-2xl font-bold mb-4">Want More Info?</h2>
          <p className="mb-4">Browse all countries or dive into detailed charts.</p>
          <a href="/about" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Learn About This Site
          </a>
        </section>
      </div>
    </div>
  );
};