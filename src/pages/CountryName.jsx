import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CountryService from "../API/CountryService";

const CountryName = () => {
  const params = useParams();
  const [country, setCountry] = useState(null);
  const [flagPath, setFlagPath] = useState(null);
  const router = useNavigate();

  const fetchCountry = async () => {
    const responce = await CountryService.getByName(params.id);
    setCountry(responce.data[0]);
    setFlagPath(responce.data[0].flags.png);
    console.log(responce.data[0]);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  if (!country) {
    return <div style={{ marginTop: "100px" }}>Loading ...</div>;
  }

  return (
    <>
      <div className="btns">
        <button className="btn_back" onClick={() => router(`/countries`)}>
          Back
        </button>
      </div>
      <div className="info_container">
        <div className="left">
          <img src={flagPath} alt="" />
        </div>
        <div className="right">
          <h1>{country.name.official}</h1>
          <div className="info_container_detailed">
            <div className="info_left">
              <p>
                <span>Native Name:</span>
                {country.name.common}
              </p>
              <p>
                <span>Population:</span>
                {country.population}
              </p>
              <p>
                <span>Region:</span>
                {country.region}
              </p>
              <p>
                <span>Sub Region:</span>
                {country.subregion}
              </p>
              <p>
                <span>Capital:</span>
                {country.capital}
              </p>
            </div>
            <div className="info_right">
              <p>
                <span>Top Level Domain:</span>
                {country.tld}
              </p>
              <p>
                <span>Currencies:</span>
                {Object.values(country.currencies)[0].name}
              </p>
              <p>
                <span>Languages:</span>
                {Object.values(country.languages).join(", ")}
              </p>
            </div>
          </div>
          <div className="info_borders"></div>
        </div>
      </div>
    </>
  );
};

export default CountryName;
