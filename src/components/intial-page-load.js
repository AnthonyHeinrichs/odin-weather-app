import '../styles/loader-styles.css'
import '../global-styles.css'
import '../styles/forecast-weather.css'

export default function initialPageLoad() {
  const mainDiv = document.getElementById('main')

  const boxDiv = document.createElement('div')
  boxDiv.classList.add('box')
  mainDiv.appendChild(boxDiv)

  const optionsFlexDiv = document.createElement('div')
  optionsFlexDiv.classList.add('optionsDiv')
  boxDiv.appendChild(optionsFlexDiv)
  
  const form = document.createElement('form')
  form.id = 'form'
  optionsFlexDiv.appendChild(form)
  
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

  const temperatureBtnDiv = document.createElement('div')
  temperatureBtnDiv.classList.add('temperatureBtnDiv')
  optionsFlexDiv.appendChild(temperatureBtnDiv)

  const temperatureInput = document.createElement('input')
  temperatureInput.id = 'tempSwitch'
  temperatureInput.setAttribute('type', 'checkbox')
  temperatureBtnDiv.appendChild(temperatureInput)

  const temperatureLabel = document.createElement('label')
  temperatureLabel.classList.add('switchCheckboxLabel')
  temperatureLabel.id = 'switchCheckboxLabel'
  temperatureLabel.setAttribute('for', 'tempSwitch')
  temperatureBtnDiv.appendChild(temperatureLabel)

  const temperatureSpan = document.createElement('span')
  temperatureSpan.classList.add('switchLabelSpan')
  temperatureLabel.appendChild(temperatureSpan)

  const temperatureCText = document.createElement('p')
  temperatureCText.id = 'temperatureCText'
  temperatureCText.innerText = 'c'
  temperatureCText.classList.add('showTemp')
  temperatureBtnDiv.appendChild(temperatureCText)

  const temperatureFText = document.createElement('p')
  temperatureFText.id = 'temperatureFText'
  temperatureFText.innerText = 'f'
  temperatureFText.classList.add('hideTemp')
  temperatureBtnDiv.appendChild(temperatureFText)

  const weatherFlexBox = document.createElement('div')
  weatherFlexBox.classList.add('weatherFlex')
  boxDiv.appendChild(weatherFlexBox)
  
  const locationDiv = document.createElement('div')
  locationDiv.classList.add('locationDiv')
  weatherFlexBox.appendChild(locationDiv)

  const city = document.createElement('h2')
  city.id = 'city'
  locationDiv.appendChild(city)
  
  const country = document.createElement('h2')
  country.id = 'country'
  locationDiv.appendChild(country)

  const currentWeatherDiv = document.createElement('div')
  currentWeatherDiv.id = 'currentWeatherDiv'
  currentWeatherDiv.classList.add('currentWeatherDiv')
  weatherFlexBox.appendChild(currentWeatherDiv)

  const currentTemp = document.createElement('h3')
  currentTemp.classList.add('currentTemp')
  currentTemp.id = 'currentTemp'
  currentWeatherDiv.appendChild(currentTemp)

  const currentWeather = document.createElement('h3')
  currentWeather.classList.add('currentWeather')
  currentWeather.id = 'currentWeather'
  currentWeatherDiv.appendChild(currentWeather)

  const forecastBtnDiv = document.createElement('div')
  forecastBtnDiv.classList.add('forecastBtnDiv')
  boxDiv.appendChild(forecastBtnDiv)

  const forecastBtn = document.createElement('button')
  forecastBtn.id = 'forecastBtn'
  forecastBtn.innerText = 'Next 3 days'
  forecastBtn.classList.add('forecastBtn')
  forecastBtnDiv.appendChild(forecastBtn)

  const forecastWeatherDiv = document.createElement('div')
  forecastWeatherDiv.id = 'forecastWeatherDiv'
  forecastWeatherDiv.classList.add('forecastWeatherDiv')
  boxDiv.appendChild(forecastWeatherDiv)

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