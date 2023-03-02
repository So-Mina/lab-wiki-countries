import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CountryDetails = () => {
  const { country_id } = useParams()
  const [countryData, setCountryData] = useState(null)

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${country_id}`)
        const data = await response.json()
        setCountryData(data)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCountryData()
  }, [country_id])

  return (
    
    <div className="col-7">
      {countryData ? (
        <>
          <img src={`https://flagcdn.com/w320/${countryData[0].cca2?.toLowerCase()}.png`} alt={countryData[0].flag?.[0]}/>
          <h1>{countryData[0].name?.common}</h1>
          <table className="table">
              <thead></thead>
            
              <tbody>
              <tr>
                <td>Capital:</td>
                <td>{countryData[0].capital?.[0] || 'N/A'}</td>
              </tr>
              <tr>
                <td>Area:</td>
                <td>{countryData[0].area} km²</td>
              </tr>
              <tr>
                <td>Borders:</td>
                <td>
                  <ul>
                    {countryData[0].borders?.map((border) => (
                      <li key={border}>
                        <Link to={`/${border}`}>{border}</Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default CountryDetails