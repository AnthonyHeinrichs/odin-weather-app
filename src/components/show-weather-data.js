
const showWeatherData = (data, unit, forecast) => {
  if (forecast) {
    const date = new Date()

    const dayOne = date.getDay()
    console.log('today', dayOne)

    let dayTwo = new Date(date)
    dayTwo.setDate(date.getDate() + 1)
    dayTwo = dayTwo.getDay()

    let dayThree = new Date(date)
    dayThree.setDate(date.getDate() + 2)
    dayThree = dayThree.getDay()

    let dayFour = new Date(date)
    dayFour.setDate(date.getDate() + 3)
    dayFour = dayFour.getDay()
  
    console.log('forecast', data)

    const dataForecastList = data.list

    for (let i = 0; i < dataForecastList.length; i++) {
      let day = new Date(dataForecastList[i].dt * 1000)
      day = day.getDay()

      if (day === dayOne) {
        console.log( 'today is', dataForecastList[i].weather[0].description)
      } else if (day === dayTwo) {
        console.log( 'tomorrow is', dataForecastList[i].weather[0].description)
      } else if (day === dayThree) {
        console.log( 'the day after tomorrow is', dataForecastList[i].weather[0].description)
      } else if (day === dayFour) {
        console.log( 'the day after the day after tomorrow is', dataForecastList[i].weather[0].description)
      }
    }

  } else {
    let temp = 0
    const weather = data.weather[0].description
    const cityName = data.name
    const countryName = data.sys.country

    if (unit === 'c') {
      let kelvin = data.main.temp
      temp = kelvin - 273.15
      temp = temp.toFixed()
    } else if (unit === 'f') {
      let kelvin = data.main.temp
      temp = (kelvin -273.15) * 1.8 + 32
      temp = temp.toFixed()
    }

    console.log('current weather', data)
    const city = document.getElementById('city')
    city.innerHTML = cityName
    
    const country = document.getElementById('country')
    country.innerHTML = countryName
    
    const currentWeather = document.getElementById('currentWeather')
    currentWeather.innerHTML = weather
  
    const temperature = document.getElementById('currentTemp')
    temperature.innerHTML = temp
  }
}

export {showWeatherData}