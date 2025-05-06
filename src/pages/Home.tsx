import { useNavigate } from 'react-router-dom';
import { CountryList } from '../components/CountryList';
import { useFetchCountries } from '../hooks/useFetchCountries';
import { Country } from '../types/country';
import { RegionSidebar } from '../components/RegionSidebar';
import { useState, useEffect } from 'react';
import { Pagination } from '../components/Pagination';
import { PopulationChart } from '../components/PopulationChart';// Import chart component directly

export const Home = () => {
  const navigate = useNavigate();
  const { countries, loading, error } = useFetchCountries();

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  // Filtered countries for both list and chart
  const filteredCountries = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : countries;

  // Pagination
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
  );

  const handleSelectCountry = (country: Country) => {
    navigate(`/country/${country.name.common}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <div className="md:w-1/4">
        <RegionSidebar onSelectRegion={setSelectedRegion} />
      </div>

      {/* Main Content */}
      <div className="md:w-3/4 space-y-8">
        {/* Chart Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Population Chart</h2>
          <div className="bg-white p-6 rounded shadow">
            <PopulationChart countries={filteredCountries} />
          </div>
        </section>

        {/* Country List Section */}
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
      </div>
    </div>
  );
};