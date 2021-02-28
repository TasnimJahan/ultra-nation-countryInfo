import React from "react";

const Country = (props) => {
  // console.log(props.country);
  const { name, population, area, flag } = props.country;
  // console.log(name);
  const countryStyle = {
    border: "1px solid red",
    margin: "10px",
    padding: "10px",
  };
  const flagStyle = {
    height: "50px",
  };
  return (
    <div style={countryStyle}>
      <h3>CountryName = {name}</h3>
      <img style={flagStyle} src={flag} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area} square km..</p>
      <button onClick={() => props.handleAddCountry(props.country)}>Add country</button>
    </div>
  );
};

export default Country;
