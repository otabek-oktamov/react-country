import React from "react";
import "./countrycard.css";
import { Link } from "react-router-dom";

function CountryCard({country,onChange}) {
let number = new Intl.NumberFormat().format(country.population)

const handleChange=()=>{
  onChange(country)
}
  return (
    <li className="countryCard boxShadow">
      <Link className="link" to='/about' >
      <img
        src={country?.flags?.png}
        alt={country?.name}
        width={264}
        height={160}
      />
     <div>
     <h2 onClick={handleChange}>{country?.name}</h2>
      <ul className="countryCardList">
          <li className="countryCardItem">Capital: <span>{country?.capital}</span></li>
      <li className="countryCardItem">Population: <span>{number}</span></li>
          <li className="countryCardItem">Region: <span>{country?.region}</span></li>
      </ul>
     </div>
      </Link>
    </li>
  );
}

export default CountryCard;
