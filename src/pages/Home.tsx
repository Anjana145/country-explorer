import { useNavigate } from 'react-router-dom';
import { CountryList } from '../components/CountryList';
import { useFetchCountries } from '../hooks/useFetchCountries';
import { Country } from '../types/country';
import { RegionSidebar } from '../components/RegionSidebar';
import { useState } from 'react';
// At the top
import { Pagination } from '../components/Pagination';

// Inside your JSX, replace the old buttons with:

export const Home = () => {
  const navigate = useNavigate();
  const { countries, loading, error } = useFetchCountries();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  // Filter by region
  const filteredCountries = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : countries;

  // Pagination logic
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
      <div className="md:w-3/4">
        <h2 className="text-2xl font-bold mb-4">
          {selectedRegion ? `${selectedRegion} Countries` : 'All Countries'}
        </h2>
        <CountryList countries={paginatedCountries} onSelectCountry={handleSelectCountry} />

        {/* Pagination Controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};