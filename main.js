/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/get-coordinates.js":
/*!*******************************************!*\
  !*** ./src/components/get-coordinates.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCityCoordinates": () => (/* binding */ getCityCoordinates)
/* harmony export */ });
const getCityCoordinates = async (city) => {
  const loader = document.getElementById('loader')
  loader.classList.remove('hidden')

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82401161e4362bdbac9573f0b61d3f82`, {mode: 'cors'})
    const cityData = await response.json()
    return cityData
  } catch(err) {
    loader.classList.add('hidden')
    console.log(err)
  }
}



/***/ }),

/***/ "./src/components/get-weather.js":
/*!***************************************!*\
  !*** ./src/components/get-weather.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
const getWeatherData = async (lon, lat, days) => {
  const loader = document.getElementById('loader')
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&cont=${days}&appid=82401161e4362bdbac9573f0b61d3f82`, {mode: 'cors'})
    const weatherData = await response.json()
    loader.classList.add('hidden')
    return weatherData
  } catch(err) {
    loader.classList.add('hidden')
    console.log(err)
  }
}



/***/ }),

/***/ "./src/components/intial-page-load.js":
/*!********************************************!*\
  !*** ./src/components/intial-page-load.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialPageLoad)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../styles/loader-styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../global-styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



function initialPageLoad() {
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
  city.id = 'city'
  locationDiv.appendChild(city)
  
  const country = document.createElement('h2')
  country.id = 'country'
  locationDiv.appendChild(country)

  const currentWeatherDiv = document.createElement('div')
  mainDiv.appendChild(currentWeatherDiv)

  const currentWeather = document.createElement('h3')
  currentWeather.classList.add('currentWeather')
  currentWeather.id = 'currentWeather'
  currentWeatherDiv.appendChild(currentWeather)

  const currentTemp = document.createElement('h3')
  currentTemp.classList.add('currentTemp')
  currentTemp.id = 'currentTemp'
  currentWeatherDiv.appendChild(currentTemp)
}



/***/ }),

/***/ "./src/components/show-weather-data.js":
/*!*********************************************!*\
  !*** ./src/components/show-weather-data.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showWeatherData": () => (/* binding */ showWeatherData)
/* harmony export */ });

const showWeatherData = (data, unit) => {
  let temp = 0

  if (unit == 'c') {
    let kelvin = data.main.temp
    temp = kelvin - 273.15
    temp = temp.toFixed()
  } else if (unit == 'f') {
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_intial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/intial-page-load */ "./src/components/intial-page-load.js");
/* harmony import */ var _components_get_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/get-weather */ "./src/components/get-weather.js");
/* harmony import */ var _components_get_coordinates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/get-coordinates */ "./src/components/get-coordinates.js");
/* harmony import */ var _components_show_weather_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/show-weather-data */ "./src/components/show-weather-data.js");






// Initially loading the HTML elements
(0,_components_intial_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])()
// Getting loading spinner to display when grabbing API data
const loader = document.getElementById('loader')
// setting my variables
let unit = 'c'
let location = 'Berlin'
let forecast = false

// Calling my API functions to grab the weather data
const getWeather = () => {
  ;(0,_components_get_coordinates__WEBPACK_IMPORTED_MODULE_2__.getCityCoordinates)(location).then(data => {
    // Checking if user wants current weather or forecasted weather
    if (data.cod === 200 && forecast === false) {
      let lon = data.coord.lon
      let lat = data.coord.lat
      ;(0,_components_get_weather__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeatherData)(lon, lat).then(data => {
        // If API Call is sucessful, passing API data to show the weather
        ;(0,_components_show_weather_data__WEBPACK_IMPORTED_MODULE_3__.showWeatherData)(data, unit, forecast)
      })
    } else if (data.cod === 200 && forecast == true) {
      let lon = data.coord.lon
      let lat = data.coord.lat
      ;(0,_components_get_weather__WEBPACK_IMPORTED_MODULE_1__.getForecastWeatherData)(lon, lat).then(data => {
        ;(0,_components_show_weather_data__WEBPACK_IMPORTED_MODULE_3__.showWeatherData)(data, unit, forecast)
      })
    } else {
      // Currently alerting if city isn not found, temporary
      loader.classList.add('hidden')
      alert('city not found')
    }
  })
}
// Grabbing initial weather data
getWeather(location)

// Listening to location submit btn and displaying weather if clicked
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formLocation = document.getElementById('location')
  location = formLocation.value
  forecast = false

  getWeather(location)
}) 

// Listening to forecast btn and displaying forecast if clicked
const forecastBtn = document.getElementById('forecastBtn')
forecastBtn.addEventListener('click', () => {
  forecast = true
  
  getWeather(location)
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNGQUFzRixLQUFLLDJDQUEyQyxhQUFhO0FBQ25KO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0YsSUFBSSxPQUFPLElBQUksUUFBUSxLQUFLLDJDQUEyQyxhQUFhO0FBQzVLO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWG9DO0FBQ1A7O0FBRWQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04yRDtBQUNLO0FBQ0M7QUFDQTtBQUNEOztBQUVoRTtBQUNBLHdFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLGdGQUFrQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0VBQXFCO0FBQzNCO0FBQ0EsUUFBUSwrRUFBZTtBQUN2QixPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNLGdGQUFzQjtBQUM1QixRQUFRLCtFQUFlO0FBQ3ZCLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZ2V0LWNvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9nZXQtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvaW50aWFsLXBhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvc2hvdy13ZWF0aGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0Q2l0eUNvb3JkaW5hdGVzID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpXG4gIGxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTgyNDAxMTYxZTQzNjJiZGJhYzk1NzNmMGI2MWQzZjgyYCwge21vZGU6ICdjb3JzJ30pXG4gICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXR1cm4gY2l0eURhdGFcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBjb25zb2xlLmxvZyhlcnIpXG4gIH1cbn1cblxuZXhwb3J0IHtnZXRDaXR5Q29vcmRpbmF0ZXN9IiwiY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyAobG9uLCBsYXQsIGRheXMpID0+IHtcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bG9uPSR7bG9ufSZsYXQ9JHtsYXR9JmNvbnQ9JHtkYXlzfSZhcHBpZD04MjQwMTE2MWU0MzYyYmRiYWM5NTczZjBiNjFkM2Y4MmAsIHttb2RlOiAnY29ycyd9KVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhXG4gIH0gY2F0Y2goZXJyKSB7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgY29uc29sZS5sb2coZXJyKVxuICB9XG59XG5cbmV4cG9ydCB7Z2V0V2VhdGhlckRhdGF9IiwiaW1wb3J0ICcuLi9zdHlsZXMvbG9hZGVyLXN0eWxlcy5jc3MnXG5pbXBvcnQgJy4uL2dsb2JhbC1zdHlsZXMuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG4gIFxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gIGZvcm0uaWQgPSAnZm9ybSdcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChmb3JtKVxuICBcbiAgY29uc3QgbG9jYXRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgbG9jYXRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsb2NhdGlvbicpXG4gIGxvY2F0aW9uTGFiZWwuaW5uZXJIVE1MID0gJ0xvY2F0aW9uOidcbiAgZm9ybS5hcHBlbmRDaGlsZChsb2NhdGlvbkxhYmVsKVxuICBcbiAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgbG9jYXRpb25JbnB1dC50eXBlID0gJ3RleHQnXG4gIGxvY2F0aW9uSW5wdXQuaWQgPSAnbG9jYXRpb24nXG4gIGxvY2F0aW9uSW5wdXQudmFsdWUgPSAnQmVybGluJ1xuICBsb2NhdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdsb2NhdGlvbicpXG4gIGZvcm0uYXBwZW5kQ2hpbGQobG9jYXRpb25JbnB1dClcblxuICBjb25zdCBsb2NhdGlvblN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGxvY2F0aW9uU3VibWl0QnRuLnR5cGUgPSAnc3VibWl0J1xuICBsb2NhdGlvblN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnR28nXG4gIGZvcm0uYXBwZW5kQ2hpbGQobG9jYXRpb25TdWJtaXRCdG4pXG5cbiAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtYWluRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KVxuXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIGNpdHkuaWQgPSAnY2l0eSdcbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQoY2l0eSlcbiAgXG4gIGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIGNvdW50cnkuaWQgPSAnY291bnRyeSdcbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQoY291bnRyeSlcblxuICBjb25zdCBjdXJyZW50V2VhdGhlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJEaXYpXG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGN1cnJlbnRXZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRXZWF0aGVyJylcbiAgY3VycmVudFdlYXRoZXIuaWQgPSAnY3VycmVudFdlYXRoZXInXG4gIGN1cnJlbnRXZWF0aGVyRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyKVxuXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50VGVtcCcpXG4gIGN1cnJlbnRUZW1wLmlkID0gJ2N1cnJlbnRUZW1wJ1xuICBjdXJyZW50V2VhdGhlckRpdi5hcHBlbmRDaGlsZChjdXJyZW50VGVtcClcbn1cblxuIiwiXG5jb25zdCBzaG93V2VhdGhlckRhdGEgPSAoZGF0YSwgdW5pdCkgPT4ge1xuICBsZXQgdGVtcCA9IDBcblxuICBpZiAodW5pdCA9PSAnYycpIHtcbiAgICBsZXQga2VsdmluID0gZGF0YS5tYWluLnRlbXBcbiAgICB0ZW1wID0ga2VsdmluIC0gMjczLjE1XG4gICAgdGVtcCA9IHRlbXAudG9GaXhlZCgpXG4gIH0gZWxzZSBpZiAodW5pdCA9PSAnZicpIHtcbiAgICBsZXQga2VsdmluID0gZGF0YS5tYWluLnRlbXBcbiAgICB0ZW1wID0gKGtlbHZpbiAtMjczLjE1KSAqIDEuOCArIDMyXG4gICAgdGVtcCA9IHRlbXAudG9GaXhlZCgpXG4gIH1cblxuICBjb25zb2xlLmxvZyhkYXRhKVxuICBjb25zdCB3ZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gIGNvbnN0IGNpdHlOYW1lID0gZGF0YS5uYW1lXG4gIGNvbnN0IGNvdW50cnlOYW1lID0gZGF0YS5zeXMuY291bnRyeVxuICBcbiAgZGF0YS5tYWluLnRlbXBcblxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKVxuICBjaXR5LmlubmVySFRNTCA9IGNpdHlOYW1lXG4gIFxuICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnknKVxuICBjb3VudHJ5LmlubmVySFRNTCA9IGNvdW50cnlOYW1lXG4gIFxuICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50V2VhdGhlcicpXG4gIGN1cnJlbnRXZWF0aGVyLmlubmVySFRNTCA9IHdlYXRoZXJcblxuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGVtcCcpXG4gIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IHRlbXBcbn1cblxuZXhwb3J0IHtzaG93V2VhdGhlckRhdGF9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbFBhZ2VMb2FkIGZyb20gJy4vY29tcG9uZW50cy9pbnRpYWwtcGFnZS1sb2FkJ1xuaW1wb3J0IHsgZ2V0Q3VycmVudFdlYXRoZXJEYXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL2dldC13ZWF0aGVyJ1xuaW1wb3J0IHsgZ2V0Rm9yZWNhc3RXZWF0aGVyRGF0YSB9IGZyb20gJy4vY29tcG9uZW50cy9nZXQtd2VhdGhlcidcbmltcG9ydCB7IGdldENpdHlDb29yZGluYXRlcyB9IGZyb20gJy4vY29tcG9uZW50cy9nZXQtY29vcmRpbmF0ZXMnXG5pbXBvcnQgeyBzaG93V2VhdGhlckRhdGEgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hvdy13ZWF0aGVyLWRhdGEnXG5cbi8vIEluaXRpYWxseSBsb2FkaW5nIHRoZSBIVE1MIGVsZW1lbnRzXG5pbml0aWFsUGFnZUxvYWQoKVxuLy8gR2V0dGluZyBsb2FkaW5nIHNwaW5uZXIgdG8gZGlzcGxheSB3aGVuIGdyYWJiaW5nIEFQSSBkYXRhXG5jb25zdCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJylcbi8vIHNldHRpbmcgbXkgdmFyaWFibGVzXG5sZXQgdW5pdCA9ICdjJ1xubGV0IGxvY2F0aW9uID0gJ0JlcmxpbidcbmxldCBmb3JlY2FzdCA9IGZhbHNlXG5cbi8vIENhbGxpbmcgbXkgQVBJIGZ1bmN0aW9ucyB0byBncmFiIHRoZSB3ZWF0aGVyIGRhdGFcbmNvbnN0IGdldFdlYXRoZXIgPSAoKSA9PiB7XG4gIGdldENpdHlDb29yZGluYXRlcyhsb2NhdGlvbikudGhlbihkYXRhID0+IHtcbiAgICAvLyBDaGVja2luZyBpZiB1c2VyIHdhbnRzIGN1cnJlbnQgd2VhdGhlciBvciBmb3JlY2FzdGVkIHdlYXRoZXJcbiAgICBpZiAoZGF0YS5jb2QgPT09IDIwMCAmJiBmb3JlY2FzdCA9PT0gZmFsc2UpIHtcbiAgICAgIGxldCBsb24gPSBkYXRhLmNvb3JkLmxvblxuICAgICAgbGV0IGxhdCA9IGRhdGEuY29vcmQubGF0XG4gICAgICBnZXRDdXJyZW50V2VhdGhlckRhdGEobG9uLCBsYXQpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIC8vIElmIEFQSSBDYWxsIGlzIHN1Y2Vzc2Z1bCwgcGFzc2luZyBBUEkgZGF0YSB0byBzaG93IHRoZSB3ZWF0aGVyXG4gICAgICAgIHNob3dXZWF0aGVyRGF0YShkYXRhLCB1bml0LCBmb3JlY2FzdClcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChkYXRhLmNvZCA9PT0gMjAwICYmIGZvcmVjYXN0ID09IHRydWUpIHtcbiAgICAgIGxldCBsb24gPSBkYXRhLmNvb3JkLmxvblxuICAgICAgbGV0IGxhdCA9IGRhdGEuY29vcmQubGF0XG4gICAgICBnZXRGb3JlY2FzdFdlYXRoZXJEYXRhKGxvbiwgbGF0KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzaG93V2VhdGhlckRhdGEoZGF0YSwgdW5pdCwgZm9yZWNhc3QpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDdXJyZW50bHkgYWxlcnRpbmcgaWYgY2l0eSBpc24gbm90IGZvdW5kLCB0ZW1wb3JhcnlcbiAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgYWxlcnQoJ2NpdHkgbm90IGZvdW5kJylcbiAgICB9XG4gIH0pXG59XG4vLyBHcmFiYmluZyBpbml0aWFsIHdlYXRoZXIgZGF0YVxuZ2V0V2VhdGhlcihsb2NhdGlvbilcblxuLy8gTGlzdGVuaW5nIHRvIGxvY2F0aW9uIHN1Ym1pdCBidG4gYW5kIGRpc3BsYXlpbmcgd2VhdGhlciBpZiBjbGlja2VkXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGZvcm1Mb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpXG4gIGxvY2F0aW9uID0gZm9ybUxvY2F0aW9uLnZhbHVlXG4gIGZvcmVjYXN0ID0gZmFsc2VcblxuICBnZXRXZWF0aGVyKGxvY2F0aW9uKVxufSkgXG5cbi8vIExpc3RlbmluZyB0byBmb3JlY2FzdCBidG4gYW5kIGRpc3BsYXlpbmcgZm9yZWNhc3QgaWYgY2xpY2tlZFxuY29uc3QgZm9yZWNhc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3RCdG4nKVxuZm9yZWNhc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGZvcmVjYXN0ID0gdHJ1ZVxuICBcbiAgZ2V0V2VhdGhlcihsb2NhdGlvbilcbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==