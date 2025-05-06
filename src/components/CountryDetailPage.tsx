import { useEffect, useState } from "react";
import { CountryDetail } from "./CountryDetail";
import { Navbar } from "./NavBar";
import { Footer } from "./Footer";

// Define types
type Country = {
  name: { common: string };
  population: number;
};

export const CountryDetailPage = () => {
  const [country, setCountry] = useState<Country | null>(null);
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Replace 'united states' with dynamic route param if needed
  const selectedCountryName = "united states";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch current country
        const countryRes = await fetch(
          `https://restcountries.com/v3.1/name/${selectedCountryName}`
        );
        const countryData = await countryRes.json();
        const currentCountry: Country = {
          name: { common: countryData[0].name.common },
          population: countryData[0].population,
        };
        setCountry(currentCountry);

        // Fetch all countries
        const allCountriesRes = await fetch("https://restcountries.com/v3.1/all");
        const allCountriesData = await allCountriesRes.json();

        const countriesList: Country[] = allCountriesData
          .filter((c: any) => c.population > 0)
          .map((c: any) => ({
            name: { common: c.name.common },
            population: c.population,
          }));

        setAllCountries(countriesList);
        setLoading(false);
      } catch (err) {
        setError("Failed to load country data.");
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCountryName]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  return (
    <div className="country-detail-page">
      <Navbar />
      <main className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Country Info Card */}
          <div className="md:w-1/2">
            <CountryDetail />
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};