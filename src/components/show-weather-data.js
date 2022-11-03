
const showWeatherData = (data, unit, forecast) => {
  const convertTemp = (temp) => {
    if (unit === 'c') {
      let kelvin = temp
      temp = kelvin - 273.15
      temp = temp.toFixed()
    } else if (unit === 'f') {
      let kelvin = temp
      temp = (kelvin -273.15) * 1.8 + 32
      temp = temp.toFixed()
    }
    return temp
  }

  if (forecast) {
    // Getting all forecast day divs
    const dayOneDiv = document.getElementById('dayOneDiv')
    const dayTwoDiv = document.getElementById('dayTwoDiv')
    const dayThreeDiv = document.getElementById('dayThreeDiv')
    const dayFourDiv = document.getElementById('dayFourDiv')
    const days = [dayOneDiv, dayTwoDiv, dayThreeDiv, dayFourDiv]
    
    // Iterating over the days to remove any child nodes
    for (let i = 0; i < days.length; i++) {
      // Checking first if the days have child nodes
      if (days[i].hasChildNodes()) {
        while (days[i].firstChild) {
          days[i].removeChild(days[i].firstChild)
        }
      }
    }    

    // Getting day of the week for today, tomorrow etc.
    const date = new Date()

    const dayOne = date.getDay()

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

    // Checking if the forecast data is for today, tomorrow etc.
    const dataForecastList = data.list
    for (let i = 0; i < dataForecastList.length; i++) {
      // Getting the day of the week of the forecasted weather
      let day = new Date(dataForecastList[i].dt * 1000)
      day = day.getDay()
      // If day is today, tomorrow etc. then showing data in DOM
      if (day === dayOne) {
        let weather = dataForecastList[i].weather[0].description
        let weatherPara = document.createElement('p')
        weatherPara.classList.add('forecastWeather')
        weatherPara.innerHTML = weather
        dayOneDiv.appendChild(weatherPara)
      } else if (day === dayTwo) {
        let weather = dataForecastList[i].weather[0].description
        let weatherPara = document.createElement('p')
        weatherPara.classList.add('forecastWeather')
        weatherPara.innerHTML = weather
        dayTwoDiv.appendChild(weatherPara)
      } else if (day === dayThree) {
        let weather = dataForecastList[i].weather[0].description
        let weatherPara = document.createElement('p')
        weatherPara.classList.add('forecastWeather')
        weatherPara.innerHTML = weather
        dayThreeDiv.appendChild(weatherPara)
      } else if (day === dayFour) {
        let weather = dataForecastList[i].weather[0].description
        let weatherPara = document.createElement('p')
        weatherPara.classList.add('forecastWeather')
        weatherPara.innerHTML = weather
        dayFourDiv.appendChild(weatherPara)
      }
    }
  } else {
    let temp = convertTemp(data.main.temp)
    const weather = data.weather[0].description
    const cityName = data.name
    const countryName = data.sys.country

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