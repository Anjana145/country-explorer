import { Country } from '../types/country';

type CountryListProps = {
  countries: Country[];
  onSelectCountry: (country: Country) => void;
};

export const CountryList = ({ countries, onSelectCountry }: CountryListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {countries.map((country) => (
        <div
          key={country.name.common}
          onClick={() => onSelectCountry(country)}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{country.name.common}</h3>
            <p>Region: <span className="font-medium">{country.region}</span></p>
            <p>Population: <span className="font-medium">{country.population.toLocaleString()}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};