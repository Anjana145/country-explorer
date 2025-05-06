import React, { useEffect, useState } from 'react';
import { useFetchCountries } from '../hooks/useFetchCountries';
import { PopulationChart } from './PopulationChart';
import { RegionSidebar } from './RegionSidebar';
import { Country } from '../types/country';

export const ChartPage = () => {
  const { countries, loading, error } = useFetchCountries();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  // Filter countries based on selected region
  useEffect(() => {
    if (!countries.length) return;

    const filtered = selectedRegion
      ? countries.filter((c: Country) => c.region === selectedRegion)
      : countries;

    setFilteredCountries(filtered);
  }, [selectedRegion, countries]);

  if (loading) {
    return <div className="text-center py-10">Loading chart data...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  return (
    <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <div className="md:w-1/4">
        <RegionSidebar onSelectRegion={setSelectedRegion} />
      </div>

      {/* Main Content */}
      <div className="md:w-3/4">
        <h1 className="text-3xl font-bold mb-6 text-center">Country Population Chart</h1>

        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
          <PopulationChart countries={filteredCountries} />
        </div>
      </div>
    </div>
  );
};

export default ChartPage;