const getCurrentWeatherData = async (lon, lat) => {
  const loader = document.getElementById('loader')
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=82401161e4362bdbac9573f0b61d3f82`, {mode: 'cors'})
    const weatherData = await response.json()
    loader.classList.add('hidden')
    return weatherData
  } catch(err) {
    loader.classList.add('hidden')
    console.log(err)
  }
}

const getForecastWeatherData = async (lon, lat) => {
  const loader = document.getElementById('loader')
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=82401161e4362bdbac9573f0b61d3f82`, {mode: 'cors'})
    const weatherData = await response.json()
    loader.classList.add('hidden')
    return weatherData
  } catch(err) {
    loader.classList.add('hidden')
    console.log(err)
  }
}


export {getCurrentWeatherData, getForecastWeatherData}