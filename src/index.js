import { getWeatherData } from './components/get-weather'
import { getCityCoordinates } from './components/get-coordinates'
import initialPageLoad from './components/intial-page-load'

initialPageLoad()

const mainDiv = document.getElementById('main')

getCityCoordinates('Berlin').then(data => {
  console.log(data)
})

getWeatherData().then(data => {
  console.log(data)
})
