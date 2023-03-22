import React from 'react';

const Country = (props) => {
    console.log(props.country);
    const {name,region,population,flags} = props.country;
    return (
        <div>
            <h2>The Name of Country: {name.common}</h2>
            <h3>Region is: {region}</h3>
            <p>Population is: {population}</p>
            <img src={flags.png} alt={name.common} />
        </div>
    );
};

export default Country;