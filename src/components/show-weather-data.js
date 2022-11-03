
const showWeatherData = (data, unit, forecast) => {
  // Getting all forecast day divs
  const dayOneDiv = document.getElementById('dayOneDiv')
  const dayTwoDiv = document.getElementById('dayTwoDiv')
  const dayThreeDiv = document.getElementById('dayThreeDiv')
  const dayFourDiv = document.getElementById('dayFourDiv')
  const days = [dayOneDiv, dayTwoDiv, dayThreeDiv, dayFourDiv]

  for (let i = 0; i < days.length; i++) {
    days[i].classList.remove('show')
  }

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
        // Displaying time of temperature
        let time = new Date(dataForecastList[i].dt * 1000)
        time = time.getHours()
        let hour = document.createElement('p')
        hour.classList.add('hour')
        hour.innerText = `${time}:00`
        dayOneDiv.appendChild(hour)

        // Displaying temperature by hour
        let hourTemp = dataForecastList[i].main.temp
        hourTemp = convertTemp(hourTemp)
        let hourTempParam = document.createElement('p')
        hourTempParam.classList.add('hourTemp')
        hourTempParam.innerText = `${hourTemp}`
        dayOneDiv.appendChild(hourTempParam)

        // Displaying weather description for day 1 (today)
        let weather = dataForecastList[i].weather[0].description
        let weatherParam = document.createElement('p')
        weatherParam.classList.add('forecastWeather')
        weatherParam.innerText = weather
        dayOneDiv.appendChild(weatherParam)
      } else if (day === dayTwo) {
        // Displaying time of temperature
        let time = new Date(dataForecastList[i].dt * 1000)
        time = time.getHours()
        let hour = document.createElement('p')
        hour.classList.add('hour')
        hour.innerText = `${time}:00`
        dayTwoDiv.appendChild(hour)

        //Displaying temperature by hour
        let hourTemp = dataForecastList[i].main.temp
        hourTemp = convertTemp(hourTemp)
        let hourTempParam = document.createElement('p')
        hourTempParam.classList.add('hourTemp')
        hourTempParam.innerText = `${hourTemp}`
        dayTwoDiv.appendChild(hourTempParam)

        // Displaying weather description for day 2 (tomorrow)
        let weather = dataForecastList[i].weather[0].description
        let weatherParam = document.createElement('p')
        weatherParam.classList.add('forecastWeather')
        weatherParam.innerText = weather
        dayTwoDiv.appendChild(weatherParam)
      } else if (day === dayThree) {
        // Displaying time of temperature
        let time = new Date(dataForecastList[i].dt * 1000)
        time = time.getHours()
        let hour = document.createElement('p')
        hour.classList.add('hour')
        hour.innerText = `${time}:00`
        dayThreeDiv.appendChild(hour)

        //Displaying temperature by hour
        let hourTemp = dataForecastList[i].main.temp
        hourTemp = convertTemp(hourTemp)
        let hourTempParam = document.createElement('p')
        hourTempParam.classList.add('hourTemp')
        hourTempParam.innerText = `${hourTemp}`
        dayThreeDiv.appendChild(hourTempParam)

        // Displaying weather description for day 3 (day after tomorrow)
        let weather = dataForecastList[i].weather[0].description
        let weatherParam = document.createElement('p')
        weatherParam.classList.add('forecastWeather')
        weatherParam.innerText = weather
        dayThreeDiv.appendChild(weatherParam)
      } else if (day === dayFour) {
        // Displaying time of temperature
        let time = new Date(dataForecastList[i].dt * 1000)
        time = time.getHours()
        let hour = document.createElement('p')
        hour.classList.add('hour')
        hour.innerText = `${time}:00`
        dayFourDiv.appendChild(hour)

        //Displaying temperature by hour
        let hourTemp = dataForecastList[i].main.temp
        hourTemp = convertTemp(hourTemp)
        let hourTempParam = document.createElement('p')
        hourTempParam.classList.add('hourTemp')
        hourTempParam.innerText = `${hourTemp}`
        dayFourDiv.appendChild(hourTempParam)

        // Displaying weather description for day 4 (day after the day after tomorrow)
        let weather = dataForecastList[i].weather[0].description
        let weatherParam = document.createElement('p')
        weatherParam.classList.add('forecastWeather')
        weatherParam.innerText = weather
        dayFourDiv.appendChild(weatherParam)
      }

      for (let i = 0; i < days.length; i++) {
        days[i].classList.add('show')
      }
    }
  } else {
    // Iterating over the days to remove any child nodes
    for (let i = 0; i < days.length; i++) {
      // Checking first if the days have child nodes
      if (days[i].hasChildNodes()) {
        while (days[i].firstChild) {
          days[i].removeChild(days[i].firstChild)
        }
      }
    }    

    // Getting daily weather data
    let temp = convertTemp(data.main.temp)
    const weather = data.weather[0].description
    const cityName = data.name
    const countryName = data.sys.country

    console.log('current weather', data)
    const city = document.getElementById('city')
    city.innerText = cityName
    
    const country = document.getElementById('country')
    country.innerText = countryName
    
    const currentWeather = document.getElementById('currentWeather')
    currentWeather.innerText = weather
  
    const temperature = document.getElementById('currentTemp')
    temperature.innerText = temp
  }
}

export {showWeatherData}