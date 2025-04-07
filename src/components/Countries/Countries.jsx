import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  const countries = use(countriesPromise);
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    // console.log(newVisitedCountries);
    // console.log("country visited clicked to be added", country);
  };

  // console.log(countries);

  return (
    <div>
      <h1>Traveling Countries: {countries.length}</h1>
      <h2>Traveled so far : {visitedCountries.length}</h2>
      <div className="visited-flag-container">
        {visitedFlags.map((flag,index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
