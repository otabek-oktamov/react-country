import React from 'react'
import CountryCard from '../country_card/CountryCard'
import './countrylist.css'

function CountryList({data,onChange}) {
    return (
       <div className="container">
            <ul className='countryList'>
          {data?.map((country)=>(
              <CountryCard onChange={onChange} key={country.name.common} country={country}/>
          ))}
        </ul>
       </div>
    )
}

export default CountryList
