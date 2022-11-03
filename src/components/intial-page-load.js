import '../styles/loader-styles.css'
import '../global-styles.css'
import '../styles/forecast-weather.css'

export default function initialPageLoad() {
  const mainDiv = document.getElementById('main')
  
  const form = document.createElement('form')
  form.id = 'form'
  mainDiv.appendChild(form)
  
  const locationLabel = document.createElement('label')
  locationLabel.setAttribute('for', 'location')
  locationLabel.innerHTML = 'Location:'
  form.appendChild(locationLabel)
  
  const locationInput = document.createElement('input')
  locationInput.type = 'text'
  locationInput.id = 'location'
  locationInput.value = 'Berlin'
  locationInput.setAttribute('name', 'location')
  form.appendChild(locationInput)

  const locationSubmitBtn = document.createElement('button')
  locationSubmitBtn.type = 'submit'
  locationSubmitBtn.innerHTML = 'Go'
  form.appendChild(locationSubmitBtn)

  const forecastBtn = document.createElement('button')
  forecastBtn.id = 'forecastBtn'
  forecastBtn.innerHTML = '4 day forecast'
  mainDiv.appendChild(forecastBtn)

  const locationDiv = document.createElement('div')
  mainDiv.appendChild(locationDiv)

  const city = document.createElement('h2')
  city.id = 'city'
  locationDiv.appendChild(city)
  
  const country = document.createElement('h2')
  country.id = 'country'
  locationDiv.appendChild(country)

  const currentWeatherDiv = document.createElement('div')
  currentWeatherDiv.id = 'currentWeatherDiv'
  mainDiv.appendChild(currentWeatherDiv)

  const currentWeather = document.createElement('h3')
  currentWeather.classList.add('currentWeather')
  currentWeather.id = 'currentWeather'
  currentWeatherDiv.appendChild(currentWeather)

  const currentTemp = document.createElement('h3')
  currentTemp.classList.add('currentTemp')
  currentTemp.id = 'currentTemp'
  currentWeatherDiv.appendChild(currentTemp)

  const forecastWeatherDiv = document.createElement('div')
  forecastWeatherDiv.id = 'forecastWeatherDiv'
  mainDiv.appendChild(forecastWeatherDiv)

  const dayOneDiv = document.createElement('div')
  dayOneDiv.classList.add('dayOneDiv')
  dayOneDiv.id = 'dayOneDiv'
  forecastWeatherDiv.appendChild(dayOneDiv)

  const dayOneAverage = document.createElement('h2')
  dayOneAverage.classList.add('averageTemp')
  dayOneAverage.id = 'dayOneAverage'
  dayOneDiv.appendChild(dayOneAverage)

  const dayTwoDiv = document.createElement('div')
  dayTwoDiv.classList.add('dayTwoDiv')
  dayTwoDiv.id = 'dayTwoDiv'
  forecastWeatherDiv.appendChild(dayTwoDiv)

  const dayThreeDiv = document.createElement('div')
  dayThreeDiv.classList.add('dayThreeDiv')
  dayThreeDiv.id = 'dayThreeDiv'
  forecastWeatherDiv.appendChild(dayThreeDiv)

  const dayfourDiv = document.createElement('div')
  dayfourDiv.classList.add('dayfourDiv')
  dayfourDiv.id = 'dayFourDiv'
  forecastWeatherDiv.appendChild(dayfourDiv)
}

