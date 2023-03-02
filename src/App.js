import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import CountriesList from './Components/CountriesList/CountriesList'
import CountryDetails from './Components/CountryDetails/CountryDetails'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => setCountries(data))
  }, [])

  return (
    
    <div className="App">
      <NavBar />
      <div className='container'>
        <div className='row'>

            <Routes>
              <Route path="/" element={<CountriesList countries={countries} />} />  
              <Route path="/:country_id" element={<CountryDetails countries={countries} />} />
            </Routes>

        </div>
      </div>
    </div>
  )
}

export default App