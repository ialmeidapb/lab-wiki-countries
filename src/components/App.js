
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./Navbar"
import CountriesList from "./CountriesList"
import countries from "../countries.json"
import CountryDetails from "./CountryDetails"

function App() {
  return (
    <div className="App">
  <NavBar />
  <div className="container">
    <div className="row">
    <CountriesList countries={countries} />
    <Route exact path="/countries/:countryCode" component={CountryDetails} />
    </div>

    
  </div>
</div>
  );
}

export default App;
