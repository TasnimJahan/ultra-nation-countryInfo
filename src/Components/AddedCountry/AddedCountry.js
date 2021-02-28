import React from 'react';

const AddedCountry = (props) => {
    console.log(props.cart);

    // let totalAddedPopulation = 0;
    // for (let i = 0; i < props.cart.length; i++) {
    //     const country = props.cart[i];
    //     totalAddedPopulation = totalAddedPopulation + country.population;
    // }
    const totalAddedPopulation= props.cart.reduce((totalAddedPopulation, country) =>totalAddedPopulation + country.population, 0)
    return (
        <div>
            <h3>New added country:{props.cart.length}</h3>
            <h3>Total added Population=:{totalAddedPopulation}</h3>
        </div>
    );
};

export default AddedCountry;