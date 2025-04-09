import { useMemo } from "react";

export const useSortedCountries = (countries, sort) => {
  const sortedCountries = useMemo(() => {
    if (sort) {
      return countries.sort((a, b) => {
        const aIsSelected = a.region === sort ? 0 : 1;
        const bIsSelected = b.region === sort ? 0 : 1;
        return aIsSelected - bIsSelected;
      });
    }
    return countries;
  }, [sort]);

  return sortedCountries;
};

export const useCountry = (countries, sort, search) => {
  const sortedCountries = useSortedCountries(countries, sort);

  const searchAndSortedCountries = useMemo(() => {
    return sortedCountries.filter((country) =>
      country.name.official.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sortedCountries]);

  return searchAndSortedCountries;
};
