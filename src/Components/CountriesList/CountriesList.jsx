import { Link } from 'react-router-dom'

const CountriesList = ({ countries }) => {

  return (
  
    <div className='col-5'>
      <div className="list-group">         
        {countries.map(country => {
          return (
            <div key={country.alpha3Code}>
              <Link className='list-group-item list-group-item-action' to={`/${country.alpha3Code}`}><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
              <br></br>{country.name.official}</Link>
            </div>
           )
        })}
      </div>
    </div>
  )
}

export default CountriesList