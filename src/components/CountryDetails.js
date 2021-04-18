import React from 'react';
import { Link, Route } from "react-router-dom";
import countries from '../countries.json';


class CountryDetails extends React.Component{
    state = {
        name: "",
        capital: "",
        area: null,
        borders: [],

      };

      componentDidMount() {
        const country = countries.find((country) => {
          return country.cca3 === this.props.match.params.countryCode; // match é um objeto injetado pelo componente Route automaticamente. Ele contém informações sobre essa rota, inclusive os parâmetros de rota. A propriedade se chama 'id' pois esse nome que escolhemos para o parâmetro de rota no App.js. O valor dela é a porção variável da URL
        });
    

    
        if (country) {
          this.setState({
            name: country.name.official,
            capital: country.capital,
            borders: country.borders,
            area: country.area,

          });
        }
      }


render=()=>{
return(
<div className="ml-5">
<h1>{this.state.name}</h1>
<hr/>
<h3>Capital:</h3><p>{this.state.capital}</p>
<hr/>
<h3>Borders:</h3><ul>
                        {this.state.borders.map((border) => {
                            return <li>
                                {border}
                            </li>
                        })}
                    </ul>

<hr/>

<h3>Area:</h3><p>{this.state.area} km²</p>

</div>

)

}

}

export default CountryDetails;