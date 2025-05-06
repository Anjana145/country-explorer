import React from 'react';
import type { Country } from '../types/country';

interface CountryOverviewProps {
  country: Country;
}

export const CountryOverview: React.FC<CountryOverviewProps> = ({ country }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">{country.name.common} Overview</h2>

      {/* Flag */}
      <div className="mb-4">
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="h-20" />
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-6">
        {country.description || `A brief description about ${country.name.common} will appear here.`}
      </p>

      {/* Basic Facts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <strong>Official Name:</strong> {country.name.official}
        </div>
        <div>
          <strong>Capital:</strong> {country.capital?.join(', ') || 'N/A'}
        </div>
        <div>
          <strong>Region:</strong> {country.region}
        </div>
        <div>
          <strong>Subregion:</strong> {country.subregion || 'N/A'}
        </div>
        <div>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </div>
        <div>
          <strong>Area:</strong> {country.area.toLocaleString()} km²
        </div>
        <div>
          <strong>Languages:</strong>{' '}
          {Object.values(country.languages).join(', ') || 'N/A'}
        </div>
        <div>
          <strong>Currencies:</strong>{' '}
          {Object.keys(country.currencies).join(', ') || 'N/A'}
        </div>
      </div>

      {/* News Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Latest News</h3>
        <div className="space-y-4">
          <article>
            <h4 className="font-medium">Major Infrastructure Project Announced</h4>
            <p className="text-gray-600 text-sm">
              The government of {country.name.common} announced a new $5B infrastructure project.
            </p>
            <small className="text-gray-400">April 2, 2025</small>
          </article>
          <hr />
          <article>
            <h4 className="font-medium">New Environmental Policies Introduced</h4>
            <p className="text-gray-600 text-sm">
              {country.name.common} passes landmark laws to reduce carbon emissions by 30% in 5 years.
            </p>
            <small className="text-gray-400">March 30, 2025</small>
          </article>
        </div>
      </section>
    </div>
  );
};