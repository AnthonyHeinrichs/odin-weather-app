import initialPageLoad from './components/intial-page-load'
import { getWeatherData } from './components/get-weather'
import { getCityCoordinates } from './components/get-coordinates'
import { showWeatherData } from './components/show-weather-data'

initialPageLoad()
const loader = document.getElementById('loader')
let unit = 'c'

getCityCoordinates('Berlin').then(data => {
  if (data.cod === 200) {
    let lon = data.coord.lon
    let lat = data.coord.lat
    let days = 7
    getWeatherData(lon, lat, days).then(data => {
      showWeatherData(data, unit)
    })
  } else {
    loader.classList.add('hidden')
    alert('city not found')
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let location = 'Berlin'

  const formLocation = document.getElementById('location')
  location = formLocation.value

  getCityCoordinates(location).then(data => {
    if (data.cod === 200) {
      let lon = data.coord.lon
      let lat = data.coord.lat
      let days = 7
      getWeatherData(lon, lat, days).then(data => {
        showWeatherData(data)
      })
    } else {
      loader.classList.add('hidden')
      alert('city not found')
    }
  })
}) 