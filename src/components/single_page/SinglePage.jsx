import React from 'react';
import './singlepage.css';
import { Link } from 'react-router-dom';

function SinglePage({country}) {
    let number = new Intl.NumberFormat().format(country.population)
console.log(country);
    return (
      
        <>
          <div className="container"> <Link to='/' className="btnBack boxShadow"><i className="fas fa-arrow-left"></i>Back</Link></div>
        <div className="container singlePageContainer">
          
            <div className="singlePageLeft">

                <img  src={country.flags.svg ? country.flags.svg : country.flags.png} alt={country.name} width={560} height={401} />
            </div>
            <div className="singlePageRight">
                <h2>{country.name}</h2>
                <ul className='singlePageList'>
                    <li className='singlePageItem'>
                        <ul className='singlePageInnerList'>
                            <li className='innerItem'>Native Name:  <span>{country.nativeName}</span></li>
                            <li className='innerItem'>Population:  <span>{number}</span></li>
                            <li className='innerItem'>Region:  <span>{country.region}</span></li>
                            <li className='innerItem'>Sub Region:  <span>{country.subregion}</span></li>
                            <li className='innerItem'>Capital:  <span>{country.capital}</span></li>
                        </ul>
                    </li>
                    <li className='singlePageItem'>
                        <ul className='singlePageInnerList'>
                            <li className='innerItem'>Top Level Domain:  <span>{country.topLevelDomain}</span></li>
                            <li className='innerItem'>Currencies:  <span>{country.currencies[0].name}</span></li>
                            <li className='innerItem'>languages:  {country.languages.map((lang)=>(
                                <span key={lang.name}>{lang.name}</span> 
                            ))}</li>
                            
                        </ul>
                    </li>
                </ul>

                <p className='borderCountries'><b>Border Countries:  </b>   {country?.borders?.map((country)=>(
                       <span className='borderCountry boxShadow'>{country}</span>
                ))}</p>
            </div>
        </div>
        </>
    )
}

export default SinglePage
