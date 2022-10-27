const getWeatherData = async (long, lat, days) => {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lon=13.4050&lat=52.5200&cont=1&appid=82401161e4362bdbac9573f0b61d3f82', {mode: 'cors'})
    const weatherData = await response.json()
    return weatherData
  } catch(err) {
    console.log(err)
  }
}

export {getWeatherData}