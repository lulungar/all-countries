import { useState, useEffect, useMemo } from "react";
import "../styles/App.css";
import CountryCard from "../components/CountryCard";
import Search from "../components/UI/Search/Search";
import { useCountry } from "../hooks/useCountry";
import CountryService from "../API/CountryService";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState({ sort: "", search: "" });

  const searchAndSortedCountries = useCountry(
    countries,
    filter.sort,
    filter.search
  );

  const fetchCountries = async () => {
    const responce = await CountryService.getAll();
    setCountries(responce.data);
    console.log(responce.data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      <Search
        value={filter}
        onChangeSearch={(selectedSearch) =>
          setFilter({ ...filter, search: selectedSearch })
        }
        onChangeSort={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />

      <div className="countries-grid">
        {searchAndSortedCountries.length
          ? searchAndSortedCountries.map((country) => (
              <CountryCard country={country} key={country.name.official} />
            ))
          : countries.map((country) => (
              <CountryCard country={country} key={country.name.official} />
            ))}
        {/* {searchAndSortedCountries.map((country) => (
          <CountryCard country={country} key={country.name.official} />
        ))} */}
      </div>
    </>
  );
}

export default Countries;
