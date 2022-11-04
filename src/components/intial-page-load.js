import '../styles/loader-styles.css'
import '../global-styles.css'
import '../styles/forecast-weather.css'

export default function initialPageLoad() {
  const mainDiv = document.getElementById('main')
  
  const form = document.createElement('form')
  form.id = 'form'
  mainDiv.appendChild(form)
  
  const locationInput = document.createElement('input')
  locationInput.type = 'text'
  locationInput.id = 'location'
  locationInput.value = 'Berlin'
  locationInput.setAttribute('name', 'location')
  form.appendChild(locationInput)

  const locationSubmitBtn = document.createElement('button')
  locationSubmitBtn.type = 'submit'
  locationSubmitBtn.id = 'submit'
  locationSubmitBtn.innerText = 'Search'
  form.appendChild(locationSubmitBtn)
  
  const locationDiv = document.createElement('div')
  locationDiv.classList.add('locationDiv')
  mainDiv.appendChild(locationDiv)

  const city = document.createElement('h2')
  city.id = 'city'
  locationDiv.appendChild(city)
  
  const country = document.createElement('h2')
  country.id = 'country'
  locationDiv.appendChild(country)

  const currentWeatherDiv = document.createElement('div')
  currentWeatherDiv.id = 'currentWeatherDiv'
  currentWeatherDiv.classList.add('currentWeatherDiv')
  mainDiv.appendChild(currentWeatherDiv)

  const currentWeather = document.createElement('h3')
  currentWeather.classList.add('currentWeather')
  currentWeather.id = 'currentWeather'
  currentWeatherDiv.appendChild(currentWeather)

  const currentTemp = document.createElement('h3')
  currentTemp.classList.add('currentTemp')
  currentTemp.id = 'currentTemp'
  currentWeatherDiv.appendChild(currentTemp)

  const forecastBtn = document.createElement('button')
  forecastBtn.id = 'forecastBtn'
  forecastBtn.innerText = 'Forecast'
  forecastBtn.classList.add('forecastBtn')
  currentWeatherDiv.appendChild(forecastBtn)

  const forecastWeatherDiv = document.createElement('div')
  forecastWeatherDiv.id = 'forecastWeatherDiv'
  forecastWeatherDiv.classList.add('forecastWeatherDiv')
  mainDiv.appendChild(forecastWeatherDiv)

  const dayTwoDiv = document.createElement('div')
  dayTwoDiv.classList.add('forecastDayDiv')
  dayTwoDiv.classList.add('hide')
  dayTwoDiv.id = 'dayTwoDiv'
  forecastWeatherDiv.appendChild(dayTwoDiv)

  const dayThreeDiv = document.createElement('div')
  dayThreeDiv.classList.add('forecastDayDiv')
  dayThreeDiv.classList.add('hide')
  dayThreeDiv.id = 'dayThreeDiv'
  forecastWeatherDiv.appendChild(dayThreeDiv)

  const dayfourDiv = document.createElement('div')
  dayfourDiv.classList.add('forecastDayDiv')
  dayfourDiv.classList.add('hide')
  dayfourDiv.id = 'dayFourDiv'
  forecastWeatherDiv.appendChild(dayfourDiv)
}