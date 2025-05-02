import { useNavigate } from 'react-router-dom';
import { CountryList } from './CountryList';
import { useFetchCountries } from '../hooks/useFetchCountries';
import { Country } from '../types/country';

export const Home = () => {
  const navigate = useNavigate();
  const { countries, loading, error } = useFetchCountries();

  const handleSelectCountry = (country: Country) => {
    navigate(`/country/${country.name.common}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Countries</h2>
      <CountryList countries={countries} onSelectCountry={handleSelectCountry} />
    </div>
  );
};