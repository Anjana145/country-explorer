import { useNavigate } from 'react-router-dom';
import { CountryList } from '../components/CountryList';
import { useFetchCountries } from '../hooks/useFetchCountries';
import { Country } from '../types/country';
import { RegionSidebar } from '../components/RegionSidebar';
import { useState } from 'react';
import { Pagination } from '../components/Pagination';
import { PopulationChart } from '../components/PopulationChart';

export const CountryInfoLayout = () => {
  const navigate = useNavigate();
  const { countries, loading, error } = useFetchCountries();

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  // Filter by region and search query
  const filteredCountries = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : countries;

  const searchedCountries = searchQuery.trim()
    ? filteredCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredCountries;

  const totalPages = Math.ceil(searchedCountries.length / countriesPerPage);
  const paginatedCountries = searchedCountries.slice(
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
  );

  const handleSelectCountry = (country: Country) => {
    navigate(`/country/${country.name.common}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home-page">
      {/* Main Content Layout */}
      <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <RegionSidebar onSelectRegion={setSelectedRegion} />
        </div>

        {/* Right Side: Main Content */}
        <div className="md:w-3/4 space-y-6">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 border rounded"
            />
          </div>

          {/* Chart Preview */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Population Overview</h2>
            <div className="bg-white p-6 rounded shadow">
              <PopulationChart countries={filteredCountries} />
            </div>
          </section>

          {/* Country List */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              {selectedRegion ? `${selectedRegion} Countries` : 'All Countries'}
            </h2>
            <CountryList countries={paginatedCountries} onSelectCountry={handleSelectCountry} />
          </section>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />

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
    </div>
  );
};