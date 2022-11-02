
const showWeatherData = (data) => {
  console.log(data)

  const city = document.getElementById('city')
  city.innerHTML = data.city.name
  
  const country = document.getElementById('country')
  country.innerHTML = data.city.country
}

export {showWeatherData}