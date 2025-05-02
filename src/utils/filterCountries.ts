import { Country } from "../types/country";

export const filterCountries = (countries: Country[], searchTerm: string): Country[] => {
  const term = searchTerm.toLowerCase();
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(term)
  );
};