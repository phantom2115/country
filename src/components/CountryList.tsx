import { useEffect, useState } from "react";
import Country from "../types/country";
import getCountries from "../api/country";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter((selectedCountry: Country) => {
          return selectedCountry.name.common !== country.name.common;
        })
      );
    }
  };

  return (
    <>
      <div className="continer mx-auto p-6">
        <h1 className="text-2xl font-semibold text-center mt-12">
          favorite country
        </h1>
        <div className="grid grid-cols-1 sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {selectedCountries.map((country: Country) => {
            return (
              <CountryCard
                key={country.cca3}
                country={country}
                handleSelectCountry={handleSelectCountry}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-center mt-12">Country</h1>
        <div className="grid grid-cols-1 sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country: Country) => {
            return (
              <CountryCard
                key={country.cca3}
                country={country}
                handleSelectCountry={handleSelectCountry}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CountryList;
