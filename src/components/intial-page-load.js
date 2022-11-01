
export default function initialPageLoad() {
  const mainDiv = document.getElementById('main')
  
  const form = document.createElement('form')
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
}

