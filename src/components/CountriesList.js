import React from 'react';
import {Link} from "react-router-dom";
import countries from "../countries.json"


function CountriesList(){
return(
<div className="list-group">
        {countries.map((country) => {
            <Link
              to={`/country/${country.cca3}`}
              key={countries.cca3}
              className="list-group-item list-group-item-action"
            //   onClick={() => {
            //     setNewCountry(country.cca3);
            //   }}
            >
              {country.flag} {country.name.official}
            </Link>
          
        })}
      </div>


)

}

export default CountriesList;