import React from "react";
import { useNavigate } from "react-router-dom";

const CountryCard = (props) => {
  const flagPath = props.country.flags.png;
  const router = useNavigate();
  return (
    <div
      className="country-card"
      onClick={() => router(`/countries/${props.country.name.official}`)}
    >
      <img src={flagPath} alt="" />
      <div className="content">
        <h3>{props.country.name.official}</h3>
        <div>
          <p>
            <span>Population:</span> {props.country.population}
          </p>
          <p>
            <span>Region:</span> {props.country.region}
          </p>
          <p>
            <span>Capital:</span> {props.country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
