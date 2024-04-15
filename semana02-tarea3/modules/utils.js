export const renderCountries = (countries = []) => {
  // console.log('Estoy en la función renderCountries')

  const countryListElement = document.querySelector('.app__list')

  let countryList = ''

  countries.forEach(country => {
    countryList += `
      <div class="country">
        <img class="country__flag" src="${country.flags.png}" alt="${country.flags.alt}" />
        <div class="country__wrapper">
          <h2>${country.name.common}</h2>
          <div class="country__description">
            <strong>Population:</strong> ${country.population}
          </div>
          <div class="country__description">
            <strong>Region:</strong> ${country.region}
          </div>
          <div class="country__description">
            <strong>Capital:</strong> ${country.capital[0]}
          </div>
        </div>
      </div>
    `
  })

  countryListElement.innerHTML = countryList
}