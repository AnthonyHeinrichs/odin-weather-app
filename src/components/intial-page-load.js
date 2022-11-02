import '../styles/loader-styles.css'
import '../global-styles.css'

export default function initialPageLoad() {
  const mainDiv = document.getElementById('main')
  
  const form = document.createElement('form')
  form.id = 'form'
  mainDiv.appendChild(form)
  
  const locationLabel = document.createElement('label')
  locationLabel.setAttribute('for', 'location')
  locationLabel.innerHTML = 'Location:'
  form.appendChild(locationLabel)
  
  const locationInput = document.createElement('input')
  locationInput.type = 'text'
  locationInput.id = 'location'
  locationInput.value = 'Berlin'
  locationInput.setAttribute('name', 'location')
  form.appendChild(locationInput)

  const locationSubmitBtn = document.createElement('button')
  locationSubmitBtn.type = 'submit'
  locationSubmitBtn.innerHTML = 'Go'
  form.appendChild(locationSubmitBtn)

  const locationDiv = document.createElement('div')
  mainDiv.appendChild(locationDiv)

  const city = document.createElement('h2')
  city.innerHTML = 'Berlin'
  city.id = 'city'
  locationDiv.appendChild(city)
  
  const country = document.createElement('h2')
  country.innerHTML = 'DE'
  country.id = 'country'
  locationDiv.appendChild(country)
}

