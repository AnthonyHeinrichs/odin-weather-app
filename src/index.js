import initialPageLoad from './components/intial-page-load'
import { getCurrentWeatherData } from './components/get-weather'
import { getForecastWeatherData } from './components/get-weather'
import { getCityCoordinates } from './components/get-coordinates'
import { showWeatherData } from './components/show-weather-data'

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

