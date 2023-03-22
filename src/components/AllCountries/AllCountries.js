import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const AllCountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);
    return (
        <div>
            <h1>Hello Welcome</h1>
            <p>Our Total Country Is: {countries.length} </p>
            {
                countries.map(country=><Country country= {country}></Country>)
            }
        </div>
    );
};

export default AllCountries;