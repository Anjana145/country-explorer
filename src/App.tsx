import React, { useState } from 'react';
import './index.css';
import { useFetchCountries } from './hooks/useFetchCountries';
import { CountryList } from './components/CountryList';
import { CountryDetail } from './components/CountryDetail';
import { SearchBar } from './components/SearchBar';
import { filterCountries } from './utils/filterCountries';

function App() {
  const { countries, loading, error } = useFetchCountries();
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = filterCountries(countries, searchTerm);

  if (loading) return <div className="text-center p-8 text-xl">Loading countries...</div>;
  if (error) return <div className="text-center text-red-500 p-8">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">🌍 Country Info Dashboard</h1>

        <div className="mb-6">
          <SearchBar onSearch={setSearchTerm} />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <CountryList countries={filteredCountries} onSelectCountry={setSelectedCountry} />
          </div>
          <div className="md:w-1/3">
            <CountryDetail country={selectedCountry} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;