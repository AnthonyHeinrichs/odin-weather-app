
const showWeatherData = (data, unit) => {
  let temp = 0

  if (unit === 'c') {
    let kelvin = data.main.temp
    temp = kelvin - 273.15
    temp = temp.toFixed()
  } else if (unit === 'f') {
    let kelvin = data.main.temp
    temp = (kelvin -273.15) * 1.8 + 32
    temp = temp.toFixed()
  }

  console.log(data)
  const weather = data.weather[0].description
  const cityName = data.name
  const countryName = data.sys.country
  
  data.main.temp

  const city = document.getElementById('city')
  city.innerHTML = cityName
  
  const country = document.getElementById('country')
  country.innerHTML = countryName
  
  const currentWeather = document.getElementById('currentWeather')
  currentWeather.innerHTML = weather

  const temperature = document.getElementById('currentTemp')
  temperature.innerHTML = temp

}

export {showWeatherData}