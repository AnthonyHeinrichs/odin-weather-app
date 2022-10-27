import { getWeatherData } from './components/get-weather'

const mainDiv = document.getElementById('main')

const mainTitle = document.createElement('h1')
mainTitle.innerHTML = 'Weather Forecast'
mainDiv.appendChild(mainTitle)

getWeatherData().then(data => {
  console.log(data)
})
