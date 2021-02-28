import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import AddedCountry from './Components/AddedCountry/AddedCountry';

function App() {
  const [countries,setCountries]= useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data=> {
      setCountries(data);
      // console.log(data);
      const countryName= data.map(country=> country.name);
      // console.log(countryName);
    })
    .catch(error => console.log(error))
  },[])

  // console.log(countries);
  const [addedCountry,setAddedCountry]=useState([]);
  const handleAddCountry=(country)=>{
    console.log('added',country);
    const newAdded=[...addedCountry , country]   
    setAddedCountry(newAdded);
}

  return (
    <div className="App">
      <header className="App-header">
      <h1>Total countries: {countries.length}</h1>
        <h2>Added country:{addedCountry.length}</h2>  
        <AddedCountry cart={addedCountry}></AddedCountry>     
        <ul>
          {
            countries.map(country=><Country country= {country} handleAddCountry={handleAddCountry} countryCode={country.alpha3Code}></Country>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
