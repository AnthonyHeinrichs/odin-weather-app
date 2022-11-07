const showWeatherData = (data, unit, forecast) => {
  // Getting the region name constructor to convert country codes
  const regionNames = new Intl.DisplayNames(
    ['en'], {type: 'region'}
  );

  // Getting all forecast day divs
  const dayTwoDiv = document.getElementById('dayTwoDiv')
  const dayThreeDiv = document.getElementById('dayThreeDiv')
  const dayFourDiv = document.getElementById('dayFourDiv')
  const days = [ dayTwoDiv, dayThreeDiv, dayFourDiv]

  // Saving temps for each day to an array to be averaged later
  let dayTwoTemps = []
  let dayThreeTemps = []
  let dayFourTemps = []

  // Creating array of days of the week to reference later
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  // Hiding the forecast divs
  for (let i = 0; i < days.length; i++) {
    days[i].classList.remove('show')
  }

  // Converting temperature from Kelvin to F or C
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
    
    // Showing all the day divs for forecast 
    for (let i = 0; i < days.length; i++) {
      days[i].classList.add('show')
    }

    // Creating flex divs for each forecast day
    const dayTwoFlex = document.createElement('div')
    dayTwoFlex.classList.add('flexForecast')
    dayTwoFlex.id = 'dayTwoFlex'
    dayTwoDiv.appendChild(dayTwoFlex)

    const dayThreeFlex = document.createElement('div')
    dayThreeFlex.classList.add('flexForecast')
    dayThreeFlex.id = 'dayThreeFlex'
    dayThreeDiv.appendChild(dayThreeFlex)

    const dayFourFlex = document.createElement('div')
    dayFourFlex.classList.add('flexForecast')
    dayFourFlex.id = 'dayFourFlex'
    dayFourDiv.appendChild(dayFourFlex)

    const dayTwoFlexLeft = document.createElement('div')
    dayTwoFlexLeft.classList.add('flexForecastLeft')
    dayTwoFlexLeft.id = 'dayTwoFlexLeft'
    dayTwoFlex.appendChild(dayTwoFlexLeft)

    const dayThreeFlexLeft = document.createElement('div')
    dayThreeFlexLeft.classList.add('flexForecastLeft')
    dayThreeFlexLeft.id = 'dayThreeFlexLeft'
    dayThreeFlex.appendChild(dayThreeFlexLeft)

    const dayFourFlexLeft = document.createElement('div')
    dayFourFlexLeft.classList.add('flexForecastLeft')
    dayFourFlexLeft.id = 'dayFourFlexLeft'
    dayFourFlex.appendChild(dayFourFlexLeft)

    const dayTwoHighLowFlex = document.createElement('div')
    dayTwoHighLowFlex.classList.add('flexForecast')
    dayTwoHighLowFlex.id = 'dayTwoFlex'
    dayTwoDiv.appendChild(dayTwoHighLowFlex)

    const dayThreeHighLowFlex = document.createElement('div')
    dayThreeHighLowFlex.classList.add('flexForecast')
    dayThreeHighLowFlex.id = 'dayThreeHighLowFlex'
    dayThreeDiv.appendChild(dayThreeHighLowFlex)

    const dayFourHighLowFlex = document.createElement('div')
    dayFourHighLowFlex.classList.add('flexForecast')
    dayFourHighLowFlex.id = 'dayFourHighLowFlex'
    dayFourDiv.appendChild(dayFourHighLowFlex)

    // Getting day of the week for today, tomorrow etc.
    const date = new Date()

    let dayTwo = new Date(date)
    dayTwo.setDate(date.getDate() + 1)
    dayTwo = dayTwo.getDay()

    const dayTwoDay = document.createElement('p')
    dayTwoDay.innerText = daysOfWeek[dayTwo]
    dayTwoDay.classList.add('forecastDay')
    dayTwoFlexLeft.appendChild(dayTwoDay)

    let dayThree = new Date(date)
    dayThree.setDate(date.getDate() + 2)
    dayThree = dayThree.getDay()

    const dayThreeDay = document.createElement('p')
    dayThreeDay.innerText = daysOfWeek[dayThree]
    dayThreeDay.classList.add('forecastDay')
    dayThreeFlexLeft.appendChild(dayThreeDay)

    let dayFour = new Date(date)
    dayFour.setDate(date.getDate() + 3)
    dayFour = dayFour.getDay()

    const dayFourDay = document.createElement('p')
    dayFourDay.innerText = daysOfWeek[dayFour]
    dayFourDay.classList.add('forecastDay')
    dayFourFlexLeft.appendChild(dayFourDay)

    // Checking if the forecast data is for today, tomorrow etc.
    const dataForecastList = data.list
    for (let i = 0; i < dataForecastList.length; i++) {
      // Getting the day of the week of the forecasted weather
      let day = new Date(dataForecastList[i].dt * 1000)
      day = day.getDay()
      // If day is today, tomorrow etc. then showing data in DOM
      if (day === dayTwo) {

        // Displaying time of temperature
        let time = new Date(dataForecastList[i].dt * 1000)
        time = time.getHours()
        
        //Displaying temperature by hour
        let hourTemp = dataForecastList[i].main.temp
        hourTemp = convertTemp(hourTemp)
        hourTemp = parseInt(hourTemp)
        dayTwoTemps.push(hourTemp)

        // Displaying weather description for day 2 (tomorrow)
        if (time === 13) {
          const weatherParam = document.createElement('p')
          let weather = dataForecastList[i].weather[0].main
          weatherParam.innerText = weather
          weatherParam.classList.add('forecastWeather')
          dayTwoFlexLeft.appendChild(weatherParam)
        }        

      } else if (day === dayThree) {

        // Displaying time of temperature
        let time = new Date(dataForecastList[i].dt * 1000)
        time = time.getHours()

        //Displaying temperature by hour
        let hourTemp = dataForecastList[i].main.temp
        hourTemp = convertTemp(hourTemp)
        hourTemp = parseInt(hourTemp)
        dayThreeTemps.push(hourTemp)

        // Displaying weather description for day 3 (day after tomorrow)
        if (time === 13) {
          const weatherParam = document.createElement('p')
          let weather = dataForecastList[i].weather[0].main
          weatherParam.innerText = weather
          weatherParam.classList.add('forecastWeather')
          dayThreeFlexLeft.appendChild(weatherParam)
        }

      } else if (day === dayFour) {
        // Displaying time of temperature

        // Displaying time of temperature
        let time = new Date(dataForecastList[i].dt * 1000)
        time = time.getHours()

        //Displaying temperature by hour
        let hourTemp = dataForecastList[i].main.temp
        hourTemp = convertTemp(hourTemp)
        hourTemp = parseInt(hourTemp)
        dayFourTemps.push(hourTemp)

        // Displaying weather description for day 3 (day after tomorrow)
        if (time === 13) {
          const weatherParam = document.createElement('p')
          let weather = dataForecastList[i].weather[0].main
          weatherParam.innerText = weather
          weatherParam.classList.add('forecastWeather')
          dayFourFlexLeft.appendChild(weatherParam)
        }
      }
    }

    // Getting daily averages and showing in forecast
    const dayTwoSum = dayTwoTemps.reduce((a, b) => a + b, 0)
    let dayTwoAverage = (dayTwoSum / dayTwoTemps.length).toFixed()

    const avgTwoDom = document.createElement('p')
    avgTwoDom.innerText = dayTwoAverage
    avgTwoDom.classList.add('forecastAverage')
    dayTwoFlex.appendChild(avgTwoDom)

    const dayThreeSum = dayThreeTemps.reduce((a, b) => a + b, 0)
    const dayThreeAverage = (dayThreeSum / dayThreeTemps.length).toFixed()

    const avgThreeDom = document.createElement('p')
    avgThreeDom.innerText = dayThreeAverage
    avgThreeDom.classList.add('forecastAverage')
    dayThreeFlex.appendChild(avgThreeDom)

    const dayFourSum = dayFourTemps.reduce((a, b) => a + b, 0)
    const dayFourAverage = (dayFourSum / dayFourTemps.length).toFixed()

    const avgFourDom = document.createElement('p')
    avgFourDom.innerText = dayFourAverage
    avgFourDom.classList.add('forecastAverage')
    dayFourFlex.appendChild(avgFourDom)

    // Getting daily high's and low's and showing in forecast
    const dayTwoHigh = Math.max(...dayTwoTemps)
    const dayTwoHighDom = document.createElement('p')
    dayTwoHighDom.classList.add('forecastHigh')
    dayTwoHighDom.innerText = `High: ${dayTwoHigh}`
    dayTwoHighLowFlex.appendChild(dayTwoHighDom)

    const dayTwoLow = Math.min(...dayTwoTemps)
    const dayTwoLowDom = document.createElement('p')
    dayTwoLowDom.classList.add('forecastLow')
    dayTwoLowDom.innerText = `Low: ${dayTwoLow}`
    dayTwoHighLowFlex.appendChild(dayTwoLowDom)

    const dayThreeHigh = Math.max(...dayThreeTemps)
    const dayThreeHighDom = document.createElement('p')
    dayThreeHighDom.classList.add('forecastHigh')
    dayThreeHighDom.innerText = `High: ${dayThreeHigh}`
    dayThreeHighLowFlex.appendChild(dayThreeHighDom)

    const dayThreeLow = Math.min(...dayThreeTemps)
    const dayThreeLowDom = document.createElement('p')
    dayThreeLowDom.classList.add('forecastLow')
    dayThreeLowDom.innerText = `Low: ${dayThreeLow}`
    dayThreeHighLowFlex.appendChild(dayThreeLowDom)

    const dayFourHigh = Math.max(...dayFourTemps)
    const dayFourHighDom = document.createElement('p')
    dayFourHighDom.classList.add('forecastHigh')
    dayFourHighDom.innerText = `High: ${dayFourHigh}`
    dayFourHighLowFlex.appendChild(dayFourHighDom)

    const dayFourLow = Math.min(...dayFourTemps)
    const dayFourLowDom = document.createElement('p')
    dayFourLowDom.classList.add('forecastLow')
    dayFourLowDom.innerText = `Low: ${dayFourLow}`
    dayFourHighLowFlex.appendChild(dayFourLowDom)

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
    const weather = data.weather[0].main
    const cityName = data.name
    const countryName = regionNames.of(data.sys.country)

    const city = document.getElementById('city')
    city.innerText = cityName
    
    const country = document.getElementById('country')
    country.innerText = countryName
    
    const currentWeather = document.getElementById('currentWeather')
    currentWeather.innerText = weather
  
    const temperature = document.getElementById('currentTemp')
    temperature.innerText = `${temp}°${unit}`
  }
}

export {showWeatherData}