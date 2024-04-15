import fetchCountries from './services.js'
import { renderCountries } from './utils.js' 

let countryData = []

const searchInput = document.querySelector('.app__input')

searchInput.addEventListener('input', (event) => {
  const value = event.target.value 
  const loweredValue = value.toLowerCase()

  const filteredCountries = countryData.filter(country => { 
    const loweredName = country.name.common.toLowerCase()
    
    if (country.capital.length === 0) {
      country.capital[0] = ''
    }
    const loweredCapital = country.capital[0].toLowerCase() 
      
    // TODO: RETO 01 - Adicionalmente necesitamos filtrar los paises por su capital

    return loweredName.includes(loweredValue) || loweredCapital.includes(loweredValue)
  })
  
  renderCountries(filteredCountries)
})

// TODO: RETO 02 - Filtrar los paises por su region usando el select. Usen el evento input también.

const selectedOptionBox = document.querySelector('.app__filter')

selectedOptionBox.addEventListener('input', (event) => {
  const value = event.target.value
  const loweredValue = value.toLowerCase()

  const filteredCountries = countryData.filter(country => { 
    const loweredRegion = country.region.toLowerCase()
  

    return loweredRegion.includes(loweredValue)
  })

  renderCountries(filteredCountries)
})




fetchCountries()
  .then(countries => {
    countryData = countries

    renderCountries(countries)
  })