const getCityCoordinates = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82401161e4362bdbac9573f0b61d3f82`, {mode: 'cors'})
    const cityData = await response.json()
    return cityData
  } catch(err) {
    console.log(err)
  }
}

export {getCityCoordinates}