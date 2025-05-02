import { useParams } from 'react-router-dom';
import { useFetchCountries } from '../hooks/useFetchCountries';
import { Country } from '../types/country';

export const CountryDetailPage = () => {
  const { name } = useParams<{ name: string }>();
  const { countries, loading, error } = useFetchCountries();

  const country = countries.find(
    (c) => c.name.common.toLowerCase() === name?.toLowerCase()
  );

  if (loading) return <p>Loading country details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!country) return <p>Country not found.</p>;

  const languages = Object.values(country.languages || {}).join(', ') || 'N/A';
  const currencies = Object.values(country.currencies || {})
    .map((c) => `${c.name} (${c.symbol})`)
    .join(', ');

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-4">{country.name.official}</h2>
      <img src={country.flags.svg} alt="Flag" className="w-40 h-auto mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>Capital:</strong> {country.capital?.join(', ') || 'N/A'}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Subregion:</strong> {country.subregion}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
        <p><strong>Languages:</strong> {languages}</p>
        <p><strong>Currencies:</strong> {currencies}</p>
      </div>
    </div>
  );
};