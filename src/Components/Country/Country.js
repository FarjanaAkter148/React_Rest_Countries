import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, region, capital, population } = props.country;
    // console.log(props.country);
    
    return (
        <div className='country'>
            <h3> Country Name : {name.common}</h3> 
            <img src={flags.png} alt="" />
            <p>Region:  {region}</p>
            <h5>Capital :{capital}</h5>
            <p>Population :{population}</p>
          
        </div>
    );
};

export default Country;