
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./Navbar"
import CountriesList from "./CountriesList"
import countries from "../countries.json"


function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <div className="container row col-5" >
      <Route exact path="/">
      <CountriesList /></Route>
      {/* <Route path="/:countryName" component={CountryDetails}></Route> */}
      </div>


    </div>
  );
}

export default App;
