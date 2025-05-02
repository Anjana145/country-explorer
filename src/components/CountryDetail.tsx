import { Country } from "../types/country";

type CountryDetailProps = {
  country: Country | null;
};

export const CountryDetail = ({ country }: CountryDetailProps) => {
  if (!country) return <p className="text-center text-gray-500">Select a country to see details</p>;

  const languages = Object.values(country.languages || {}).join(', ') || 'N/A';
  const currencies = Object.values(country.currencies || {})
    .map((c) => `${c.name} (${c.symbol})`)
    .join(', ');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">{country.name.official}</h2>
      <img src={country.flags.svg} alt="Flag" className="w-full h-40 object-contain mb-4" />
      <div className="space-y-2">
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