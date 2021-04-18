
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./Navbar"
import CountriesList from "./CountriesList"
import countries from "../countries.json"


function App() {
  return (
    <div className="App">
  <NavBar />

  <div className="container">
    <div className="row">
      <CountriesList countries={countries} />
      {/* React Router Route rendering the CountryDetails should go here */}
    </div>
  </div>
</div>
  );
}

export default App;
