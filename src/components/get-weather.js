const getWeatherData = async (lon, lat, days) => {
  const loader = document.getElementById('loader')
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lon=${lon}&lat=${lat}&cont=${days}&appid=82401161e4362bdbac9573f0b61d3f82`, {mode: 'cors'})
    const weatherData = await response.json()
    loader.classList.add('hidden')
    return weatherData
  } catch(err) {
    loader.classList.add('hidden')
    console.log(err)
  }
}

export {getWeatherData}