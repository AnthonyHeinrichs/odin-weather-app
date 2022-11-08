import initialPageLoad from './components/intial-page-load'
import { getCurrentWeatherData } from './components/get-weather'
import { getForecastWeatherData } from './components/get-weather'
import { getCityCoordinates } from './components/get-coordinates'
import { showWeatherData } from './components/show-weather-data'
import { convertTemp } from './components/helpers/convert-temp'

// Initially loading the HTML elements
initialPageLoad()
// Getting loading spinner to display when grabbing API data
const loader = document.getElementById('loader')
// setting my variables
let unit = 'c'
let location = 'Berlin'
let forecast = false

// Calling my API functions to grab the weather data
const getWeather = () => {
  getCityCoordinates(location).then(data => {
    // Checking if user wants current weather or forecasted weather
    if (data.cod === 200 && forecast === false) {
      let lon = data.coord.lon
      let lat = data.coord.lat
      getCurrentWeatherData(lon, lat).then(data => {
        // If API Call is sucessful, passing API data to show the weather
        showWeatherData(data, unit, forecast)
      })
    } else if (data.cod === 200 && forecast == true) {
      let lon = data.coord.lon
      let lat = data.coord.lat
      getForecastWeatherData(lon, lat).then(data => {
        showWeatherData(data, unit, forecast)
      })
    } else {
      // Currently alerting if city isn not found, temporary
      loader.classList.add('hidden')
      alert('city not found')
    }
  })
}
// Grabbing initial weather data
getWeather(location)

// Listening to location submit btn and displaying weather if clicked
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formLocation = document.getElementById('location')
  location = formLocation.value
  forecast = false

  getWeather(location)
}) 

// Listening to forecast btn and displaying forecast if clicked
const forecastBtn = document.getElementById('forecastBtn')
forecastBtn.addEventListener('click', () => {
  forecast = true
  
  getWeather(location)
})

const updateTempText = () => {
  const currentTemp = document.getElementById('currentTemp')
  let currentTempUpdate = currentTemp.innerText.split('°')
  currentTempUpdate = currentTempUpdate[0]
  parseInt(currentTempUpdate)
  currentTempUpdate = convertTemp(currentTempUpdate, unit, false)
  currentTemp.innerText = `${currentTempUpdate}°${unit}`

  const averageTemps = document.querySelectorAll('.forecastAverage')
  if (averageTemps.length > 0) {
    for (let i = 0; i < averageTemps.length; i++) {
     let convertedTemp = averageTemps[i].innerText.split('°')
     convertedTemp = convertedTemp[0]
     parseInt(convertedTemp)
     convertedTemp = convertTemp(convertedTemp, unit, false)
     averageTemps[i].innerHTML = `${convertedTemp}°${unit}`
    }
  }

  const highTemps = document.querySelectorAll('.forecastHigh')
  if (highTemps.length > 0) {
    for (let i = 0; i < highTemps.length; i++) {
      let convertedTemp = highTemps[i].innerText.split('°')
      convertedTemp = convertedTemp[0].split(' ')
      convertedTemp = convertedTemp[1]
      parseInt(convertedTemp)
      convertedTemp = convertTemp(convertedTemp, unit, false)
      highTemps[i].innerHTML = `High: ${convertedTemp}°${unit}`
    }
  }

  const lowTemps = document.querySelectorAll('.forecastLow')
  if (lowTemps.length > 0) {
    for (let i = 0; i < lowTemps.length; i++) {
      let convertedTemp = lowTemps[i].innerText.split('°')
      convertedTemp = convertedTemp[0].split(' ')
      convertedTemp = convertedTemp[1]
      parseInt(convertedTemp)
      convertedTemp = convertTemp(convertedTemp, unit, false)
      lowTemps[i].innerHTML = `Low: ${convertedTemp}°${unit}`
    }
  }
}

// Listening for temperature slider to determine temp unit
const tempSwitch = document.getElementById('tempSwitch')
const tempC = document.getElementById('temperatureCText')
const tempF = document.getElementById('temperatureFText')

tempSwitch.addEventListener('change', () => {
  if (tempSwitch.checked) {
    tempC.classList.remove('showTemp')
    tempC.classList.add('hideTemp')
    tempF.classList.add('showTemp')
    tempF.classList.remove('hideTemp')
    unit = 'f'
    updateTempText()
  } else {
    tempF.classList.remove('showTemp')
    tempF.classList.add('hideTemp')
    tempC.classList.add('showTemp')
    tempC.classList.remove('hideTemp')
    unit = 'c'
    updateTempText()
  }
})