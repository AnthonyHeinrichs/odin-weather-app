/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global-styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global-styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/tofino.jpg */ "./src/assets/tofino.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300;400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0px;\n  min-height: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n  background-size: cover;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n}\n\nh2, h3, p {\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n#main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.box {\n  margin-top: 24px;\n  margin-bottom: 24px;\n  min-height: 100%;\n  min-height: 90vh;\n  width: 90vw;\n  min-width: 95%;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.optionsDiv {\n  display: flex;\n  justify-content: space-between;\n}\n\n.temperatureBtnDiv {\n  margin-right: 48px;\n  position: relative;\n}\n\ninput[type=checkbox]{\n\theight: 0;\n\twidth: 0;\n\tvisibility: hidden;\n}\n\nlabel {\n\tcursor: pointer;\n\twidth: 80px;\n\theight: 34px;\n  margin-left: 8px;\n\tbackground: rgb(129, 126, 126);\n\tdisplay: block;\n\tborder-radius: 100px;\n\tposition: relative;\n}\n\nlabel:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 5px;\n\twidth: 24px;\n\theight: 24px;\n\tbackground: #fff;\n\tborder-radius: 90px;\n\ttransition: 0.3s;\n}\n\ninput:checked + label {\n\tbackground: #000000;\n}\n\ninput:checked + label:after {\n\tleft: calc(100% - 5px);\n\ttransform: translateX(-100%);\n}\n\nlabel:active:after {\n\twidth: px;\n}\n\nform {\n  margin-left: 12px;\n  margin-top: 18px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 8px;\n}\n\n#temperatureFText {\n  font-family: 'Bebas Neue',Arial, Helvetica, sans-serif;\n  pointer-events: none;\n  user-select: none;\n  position: absolute;\n  top: 18px;\n  left: 18px;\n  color: white;\n  margin-left: 12px;\n  margin-top: 2px;\n  font-size: 30px;\n  font-weight: 800;\n  transform:translateX(-100%);\n}\n\n#temperatureCText {\n  font-family: 'Bebas Neue',Arial, Helvetica, sans-serif;\n  pointer-events: none;\n  user-select: none;\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  margin-left: 12px;\n  margin-top: 2px;\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.hideTemp {\n  opacity: 0;\n  transition: all 0.2s;\n}\n\n.showTemp {\n  opacity: 1;\n}\n\n@media(prefers-reduced-motion) {\n  .hideTemp {\n    transition: none;\n  }\n}\n\n#location {\n  padding: 8px;\n  height: 18px;\n  width: 140px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: none;\n  background: #D9D9D9;\n}\n\n#submit {\n  font-size: 18px;\n  height: 35px;\n  background: #120404;\n  border: none;\n  border-radius: 5px;\n  color: white;\n}\n\n.weatherFlex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: baseline;\n  margin-top: 36px;\n}\n\n#city {\n  font-family: 'Zilla Slab','Bebas Neue',Arial, Helvetica, sans-serif;\n  font-size: calc(40px + 3vw);\n  letter-spacing: 4px;\n  margin-top: 12px;\n}\n\n#country {\n  font-family: 'Zilla Slab','Bebas Neue',Arial, Helvetica, sans-serif;\n  letter-spacing: 4px;\n  font-size: 36px;\n}\n\n#currentTemp {\n  font-family: 'Zilla Slab','Bebas Neue',Arial, Helvetica, sans-serif;\n  font-size: calc(80px + 4vw);\n  margin-top: 0px;\n}\n\n#currentWeather {\n  font-family: 'Zilla Slab','Bebas Neue',Arial, Helvetica, sans-serif;\n  letter-spacing: 4px;\n  font-size: 36px;\n  margin-top: -6px;\n}\n\n.currentWeatherDiv {\n  display: flex;\n  flex-direction: column;\n}\n\n.forecastBtnDiv {\n  margin-top: 62px;\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.forecastBtn {\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  background: black;\n  border: none;\n  border-radius: 10px;\n  height: 30px;\n  width: 120px;\n}\n\n/* Mobile styles */\n\n@media screen and (max-width: 600px) {\n  .weatherFlex {\n    flex-direction: column;\n    justify-content: baseline;\n    align-items: center;\n  }\n\n  #currentTemp {\n    margin-top: 24px;\n  }\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/global-styles.css"],"names":[],"mappings":"AAGA;EACE,WAAW;EACX,gBAAgB;EAChB,iFAAoE;EACpE,sBAAsB;EACtB,8BAA8B;EAC9B,2BAA2B;EAC3B,yBAAyB;AAC3B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;EACX,cAAc;EACd,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;CACC,SAAS;CACT,QAAQ;CACR,kBAAkB;AACnB;;AAEA;CACC,eAAe;CACf,WAAW;CACX,YAAY;EACX,gBAAgB;CACjB,8BAA8B;CAC9B,cAAc;CACd,oBAAoB;CACpB,kBAAkB;AACnB;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,QAAQ;CACR,SAAS;CACT,WAAW;CACX,YAAY;CACZ,gBAAgB;CAChB,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,4BAA4B;AAC7B;;AAEA;CACC,SAAS;AACV;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,sDAAsD;EACtD,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,sDAAsD;EACtD,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,mEAAmE;EACnE,2BAA2B;EAC3B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,mEAAmE;EACnE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mEAAmE;EACnE,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,mEAAmE;EACnE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA,kBAAkB;;AAElB;EACE;IACE,sBAAsB;IACtB,yBAAyB;IACzB,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;EAClB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300;400;500;600;700&display=swap');\n\nbody {\n  margin: 0px;\n  min-height: 100%;\n  background: url('./assets/tofino.jpg') no-repeat center center fixed;\n  background-size: cover;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n}\n\nh2, h3, p {\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n#main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.box {\n  margin-top: 24px;\n  margin-bottom: 24px;\n  min-height: 100%;\n  min-height: 90vh;\n  width: 90vw;\n  min-width: 95%;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.optionsDiv {\n  display: flex;\n  justify-content: space-between;\n}\n\n.temperatureBtnDiv {\n  margin-right: 48px;\n  position: relative;\n}\n\ninput[type=checkbox]{\n\theight: 0;\n\twidth: 0;\n\tvisibility: hidden;\n}\n\nlabel {\n\tcursor: pointer;\n\twidth: 80px;\n\theight: 34px;\n  margin-left: 8px;\n\tbackground: rgb(129, 126, 126);\n\tdisplay: block;\n\tborder-radius: 100px;\n\tposition: relative;\n}\n\nlabel:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 5px;\n\twidth: 24px;\n\theight: 24px;\n\tbackground: #fff;\n\tborder-radius: 90px;\n\ttransition: 0.3s;\n}\n\ninput:checked + label {\n\tbackground: #000000;\n}\n\ninput:checked + label:after {\n\tleft: calc(100% - 5px);\n\ttransform: translateX(-100%);\n}\n\nlabel:active:after {\n\twidth: px;\n}\n\nform {\n  margin-left: 12px;\n  margin-top: 18px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 8px;\n}\n\n#temperatureFText {\n  font-family: 'Bebas Neue',Arial, Helvetica, sans-serif;\n  pointer-events: none;\n  user-select: none;\n  position: absolute;\n  top: 18px;\n  left: 18px;\n  color: white;\n  margin-left: 12px;\n  margin-top: 2px;\n  font-size: 30px;\n  font-weight: 800;\n  transform:translateX(-100%);\n}\n\n#temperatureCText {\n  font-family: 'Bebas Neue',Arial, Helvetica, sans-serif;\n  pointer-events: none;\n  user-select: none;\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  margin-left: 12px;\n  margin-top: 2px;\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.hideTemp {\n  opacity: 0;\n  transition: all 0.2s;\n}\n\n.showTemp {\n  opacity: 1;\n}\n\n@media(prefers-reduced-motion) {\n  .hideTemp {\n    transition: none;\n  }\n}\n\n#location {\n  padding: 8px;\n  height: 18px;\n  width: 140px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: none;\n  background: #D9D9D9;\n}\n\n#submit {\n  font-size: 18px;\n  height: 35px;\n  background: #120404;\n  border: none;\n  border-radius: 5px;\n  color: white;\n}\n\n.weatherFlex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: baseline;\n  margin-top: 36px;\n}\n\n#city {\n  font-family: 'Zilla Slab','Bebas Neue',Arial, Helvetica, sans-serif;\n  font-size: calc(40px + 3vw);\n  letter-spacing: 4px;\n  margin-top: 12px;\n}\n\n#country {\n  font-family: 'Zilla Slab','Bebas Neue',Arial, Helvetica, sans-serif;\n  letter-spacing: 4px;\n  font-size: 36px;\n}\n\n#currentTemp {\n  font-family: 'Zilla Slab','Bebas Neue',Arial, Helvetica, sans-serif;\n  font-size: calc(80px + 4vw);\n  margin-top: 0px;\n}\n\n#currentWeather {\n  font-family: 'Zilla Slab','Bebas Neue',Arial, Helvetica, sans-serif;\n  letter-spacing: 4px;\n  font-size: 36px;\n  margin-top: -6px;\n}\n\n.currentWeatherDiv {\n  display: flex;\n  flex-direction: column;\n}\n\n.forecastBtnDiv {\n  margin-top: 62px;\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.forecastBtn {\n  font-size: 18px;\n  font-weight: 400;\n  color: white;\n  background: black;\n  border: none;\n  border-radius: 10px;\n  height: 30px;\n  width: 120px;\n}\n\n/* Mobile styles */\n\n@media screen and (max-width: 600px) {\n  .weatherFlex {\n    flex-direction: column;\n    justify-content: baseline;\n    align-items: center;\n  }\n\n  #currentTemp {\n    margin-top: 24px;\n  }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/forecast-weather.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/forecast-weather.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".forecastWeatherDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  margin-top: 48px;\n  margin-bottom: 48px;\n}\n\n.hide {\n  opacity: 0;\n  filter: blur(2px);\n  transform: translateX(-100%);\n  transition: all 0.2s;\n}\n\n.show {\n  opacity: 1;\n  filter: blur(0);\n  transform: translateX(0)\n}\n\n@media(prefers-reduced-motion) {\n  .hide {\n    transition: none;\n  }\n}\n\n#dayTwoDiv {\n  transition-delay: 100ms;\n}\n\n#dayThreeDiv {\n  transition-delay: 200ms;\n}\n\n#dayFourDiv {\n  transition-delay: 300ms;\n}\n\n.forecastDayDiv {\n  width: 300px;\n  min-width: 260px;\n  background: black;\n  color: white;\n  border-radius: 5px;\n}\n\n.flexForecast {\n  display: flex;\n  padding: 12px;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.forecastDay {\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.forecastWeather {\n  margin-top: 2px;\n  font-size: 18px;\n}\n\n.weatherIconDiv {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n\n.forecastAverage {\n  margin-left: 24px;\n  font-size: 62px;\n  font-weight: 100;\n}\n\n.forecastHigh, .forecastLow {\n  font-size: 24px;\n  margin-bottom: 12px;\n}\n\n/* Mobile styles */\n\n@media screen and (max-width: 900px) {\n  .forecastDayDiv {\n    width: 85vw;\n    background: black;\n    color: white;\n    border-radius: 5px;\n  }\n\n  .forecastWeatherDiv {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/forecast-weather.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,4BAA4B;EAC5B,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,eAAe;EACf;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA,kBAAkB;;AAElB;EACE;IACE,WAAW;IACX,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;AACF","sourcesContent":[".forecastWeatherDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  margin-top: 48px;\n  margin-bottom: 48px;\n}\n\n.hide {\n  opacity: 0;\n  filter: blur(2px);\n  transform: translateX(-100%);\n  transition: all 0.2s;\n}\n\n.show {\n  opacity: 1;\n  filter: blur(0);\n  transform: translateX(0)\n}\n\n@media(prefers-reduced-motion) {\n  .hide {\n    transition: none;\n  }\n}\n\n#dayTwoDiv {\n  transition-delay: 100ms;\n}\n\n#dayThreeDiv {\n  transition-delay: 200ms;\n}\n\n#dayFourDiv {\n  transition-delay: 300ms;\n}\n\n.forecastDayDiv {\n  width: 300px;\n  min-width: 260px;\n  background: black;\n  color: white;\n  border-radius: 5px;\n}\n\n.flexForecast {\n  display: flex;\n  padding: 12px;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.forecastDay {\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.forecastWeather {\n  margin-top: 2px;\n  font-size: 18px;\n}\n\n.weatherIconDiv {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n\n.forecastAverage {\n  margin-left: 24px;\n  font-size: 62px;\n  font-weight: 100;\n}\n\n.forecastHigh, .forecastLow {\n  font-size: 24px;\n  margin-bottom: 12px;\n}\n\n/* Mobile styles */\n\n@media screen and (max-width: 900px) {\n  .forecastDayDiv {\n    width: 85vw;\n    background: black;\n    color: white;\n    border-radius: 5px;\n  }\n\n  .forecastWeatherDiv {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/loader-styles.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/loader-styles.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#loader {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n#loader:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.144);\n}\n\n#loader:not(:required) {\n  /* hide \"loading...\" text */\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n#loader:not(:required):after {\n  content: '';\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 1500ms infinite linear;\n  -moz-animation: spinner 1500ms infinite linear;\n  -ms-animation: spinner 1500ms infinite linear;\n  -o-animation: spinner 1500ms infinite linear;\n  animation: spinner 1500ms infinite linear;\n  border-radius: 0.5em;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n}\n\n\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@-moz-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/loader-styles.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,UAAU;EACV,cAAc;EACd,YAAY;EACZ,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,cAAc;EACd,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,sCAAsC;AACxC;;AAEA;EACE,2BAA2B;EAC3B,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,WAAW;EACX,cAAc;EACd,eAAe;EACf,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,iDAAiD;EACjD,8CAA8C;EAC9C,6CAA6C;EAC7C,4CAA4C;EAC5C,yCAAyC;EACzC,oBAAoB;EACpB,8SAA8S;EAC9S,wSAAwS;AAC1S;;;AAGA;EACE;IACE,+BAA+B;IAC/B,4BAA4B;IAC5B,2BAA2B;IAC3B,0BAA0B;IAC1B,uBAAuB;EACzB;EACA;IACE,iCAAiC;IACjC,8BAA8B;IAC9B,6BAA6B;IAC7B,4BAA4B;IAC5B,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,+BAA+B;IAC/B,4BAA4B;IAC5B,2BAA2B;IAC3B,0BAA0B;IAC1B,uBAAuB;EACzB;EACA;IACE,iCAAiC;IACjC,8BAA8B;IAC9B,6BAA6B;IAC7B,4BAA4B;IAC5B,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,+BAA+B;IAC/B,4BAA4B;IAC5B,2BAA2B;IAC3B,0BAA0B;IAC1B,uBAAuB;EACzB;EACA;IACE,iCAAiC;IACjC,8BAA8B;IAC9B,6BAA6B;IAC7B,4BAA4B;IAC5B,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,+BAA+B;IAC/B,4BAA4B;IAC5B,2BAA2B;IAC3B,0BAA0B;IAC1B,uBAAuB;EACzB;EACA;IACE,iCAAiC;IACjC,8BAA8B;IAC9B,6BAA6B;IAC7B,4BAA4B;IAC5B,yBAAyB;EAC3B;AACF","sourcesContent":["#loader {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n#loader:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.144);\n}\n\n#loader:not(:required) {\n  /* hide \"loading...\" text */\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n#loader:not(:required):after {\n  content: '';\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 1500ms infinite linear;\n  -moz-animation: spinner 1500ms infinite linear;\n  -ms-animation: spinner 1500ms infinite linear;\n  -o-animation: spinner 1500ms infinite linear;\n  animation: spinner 1500ms infinite linear;\n  border-radius: 0.5em;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n}\n\n\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@-moz-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/global-styles.css":
/*!*******************************!*\
  !*** ./src/global-styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global-styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/global-styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/forecast-weather.css":
/*!*****************************************!*\
  !*** ./src/styles/forecast-weather.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_forecast_weather_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./forecast-weather.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/forecast-weather.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_forecast_weather_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_forecast_weather_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_forecast_weather_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_forecast_weather_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/loader-styles.css":
/*!**************************************!*\
  !*** ./src/styles/loader-styles.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loader_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./loader-styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/loader-styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loader_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loader_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_loader_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_loader_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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
/* harmony export */   "getCurrentWeatherData": () => (/* binding */ getCurrentWeatherData),
/* harmony export */   "getForecastWeatherData": () => (/* binding */ getForecastWeatherData)
/* harmony export */ });
const getCurrentWeatherData = async (lon, lat) => {
  const loader = document.getElementById('loader')
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=82401161e4362bdbac9573f0b61d3f82`, {mode: 'cors'})
    const weatherData = await response.json()
    loader.classList.add('hidden')
    return weatherData
  } catch(err) {
    loader.classList.add('hidden')
    console.log(err)
  }
}

const getForecastWeatherData = async (lon, lat) => {
  const loader = document.getElementById('loader')
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=82401161e4362bdbac9573f0b61d3f82`, {mode: 'cors'})
    const weatherData = await response.json()
    loader.classList.add('hidden')
    return weatherData
  } catch(err) {
    loader.classList.add('hidden')
    console.log(err)
  }
}




/***/ }),

/***/ "./src/components/helpers/convert-temp.js":
/*!************************************************!*\
  !*** ./src/components/helpers/convert-temp.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTemp": () => (/* binding */ convertTemp)
/* harmony export */ });
const convertTemp = (temp, unit, kelvin) => {
  if (kelvin) {
    if (unit === 'c') {
      let kelvin = temp
      temp = kelvin - 273.15
      temp = temp.toFixed()
    } else if (unit === 'f') {
      let kelvin = temp
      temp = (kelvin -273.15) * 1.8 + 32
      temp = temp.toFixed()
    }
  } else {
    if (unit === 'c') {
      temp = (temp - 32) * 0.5556
      temp = temp.toFixed()
    } else if (unit === 'f') {
      temp = temp * 1.8 + 32
      temp = temp.toFixed()
    }
  }
  return temp
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
/* harmony import */ var _styles_loader_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/loader-styles.css */ "./src/styles/loader-styles.css");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-styles.css */ "./src/global-styles.css");
/* harmony import */ var _styles_forecast_weather_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/forecast-weather.css */ "./src/styles/forecast-weather.css");




function initialPageLoad() {
  const mainDiv = document.getElementById('main')

  const boxDiv = document.createElement('div')
  boxDiv.classList.add('box')
  mainDiv.appendChild(boxDiv)

  const optionsFlexDiv = document.createElement('div')
  optionsFlexDiv.classList.add('optionsDiv')
  boxDiv.appendChild(optionsFlexDiv)
  
  const form = document.createElement('form')
  form.id = 'form'
  optionsFlexDiv.appendChild(form)
  
  const locationInput = document.createElement('input')
  locationInput.type = 'text'
  locationInput.id = 'location'
  locationInput.value = 'Berlin'
  locationInput.setAttribute('name', 'location')
  form.appendChild(locationInput)

  const locationSubmitBtn = document.createElement('button')
  locationSubmitBtn.type = 'submit'
  locationSubmitBtn.id = 'submit'
  locationSubmitBtn.innerText = 'Search'
  form.appendChild(locationSubmitBtn)

  const temperatureBtnDiv = document.createElement('div')
  temperatureBtnDiv.classList.add('temperatureBtnDiv')
  optionsFlexDiv.appendChild(temperatureBtnDiv)

  const temperatureInput = document.createElement('input')
  temperatureInput.id = 'tempSwitch'
  temperatureInput.setAttribute('type', 'checkbox')
  temperatureBtnDiv.appendChild(temperatureInput)

  const temperatureLabel = document.createElement('label')
  temperatureLabel.classList.add('switchCheckboxLabel')
  temperatureLabel.id = 'switchCheckboxLabel'
  temperatureLabel.setAttribute('for', 'tempSwitch')
  temperatureBtnDiv.appendChild(temperatureLabel)

  const temperatureSpan = document.createElement('span')
  temperatureSpan.classList.add('switchLabelSpan')
  temperatureLabel.appendChild(temperatureSpan)

  const temperatureCText = document.createElement('p')
  temperatureCText.id = 'temperatureCText'
  temperatureCText.innerText = 'c'
  temperatureCText.classList.add('showTemp')
  temperatureBtnDiv.appendChild(temperatureCText)

  const temperatureFText = document.createElement('p')
  temperatureFText.id = 'temperatureFText'
  temperatureFText.innerText = 'f'
  temperatureFText.classList.add('hideTemp')
  temperatureBtnDiv.appendChild(temperatureFText)

  const weatherFlexBox = document.createElement('div')
  weatherFlexBox.classList.add('weatherFlex')
  boxDiv.appendChild(weatherFlexBox)
  
  const locationDiv = document.createElement('div')
  locationDiv.classList.add('locationDiv')
  weatherFlexBox.appendChild(locationDiv)

  const city = document.createElement('h2')
  city.id = 'city'
  locationDiv.appendChild(city)
  
  const country = document.createElement('h2')
  country.id = 'country'
  locationDiv.appendChild(country)

  const currentWeatherDiv = document.createElement('div')
  currentWeatherDiv.id = 'currentWeatherDiv'
  currentWeatherDiv.classList.add('currentWeatherDiv')
  weatherFlexBox.appendChild(currentWeatherDiv)

  const currentTemp = document.createElement('h3')
  currentTemp.classList.add('currentTemp')
  currentTemp.id = 'currentTemp'
  currentWeatherDiv.appendChild(currentTemp)

  const currentWeather = document.createElement('h3')
  currentWeather.classList.add('currentWeather')
  currentWeather.id = 'currentWeather'
  currentWeatherDiv.appendChild(currentWeather)

  const forecastBtnDiv = document.createElement('div')
  forecastBtnDiv.classList.add('forecastBtnDiv')
  boxDiv.appendChild(forecastBtnDiv)

  const forecastBtn = document.createElement('button')
  forecastBtn.id = 'forecastBtn'
  forecastBtn.innerText = 'Next 3 days'
  forecastBtn.classList.add('forecastBtn')
  forecastBtnDiv.appendChild(forecastBtn)

  const forecastWeatherDiv = document.createElement('div')
  forecastWeatherDiv.id = 'forecastWeatherDiv'
  forecastWeatherDiv.classList.add('forecastWeatherDiv')
  boxDiv.appendChild(forecastWeatherDiv)

  const dayTwoDiv = document.createElement('div')
  dayTwoDiv.classList.add('forecastDayDiv')
  dayTwoDiv.classList.add('hide')
  dayTwoDiv.id = 'dayTwoDiv'
  forecastWeatherDiv.appendChild(dayTwoDiv)

  const dayThreeDiv = document.createElement('div')
  dayThreeDiv.classList.add('forecastDayDiv')
  dayThreeDiv.classList.add('hide')
  dayThreeDiv.id = 'dayThreeDiv'
  forecastWeatherDiv.appendChild(dayThreeDiv)

  const dayfourDiv = document.createElement('div')
  dayfourDiv.classList.add('forecastDayDiv')
  dayfourDiv.classList.add('hide')
  dayfourDiv.id = 'dayFourDiv'
  forecastWeatherDiv.appendChild(dayfourDiv)
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
/* harmony import */ var _helpers_convert_temp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/convert-temp */ "./src/components/helpers/convert-temp.js");


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
  

  if (forecast) {
    console.log(data)
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

    const dayTwoWeatherIcon = document.createElement('div')
    dayTwoWeatherIcon.classList.add('weatherIconDiv')
    dayTwoDiv.appendChild(dayTwoWeatherIcon)

    const dayThreeWeatherIcon = document.createElement('div')
    dayThreeWeatherIcon.classList.add('weatherIconDiv')
    dayThreeDiv.appendChild(dayThreeWeatherIcon)

    const dayFourWeatherIcon = document.createElement('div')
    dayFourWeatherIcon.classList.add('weatherIconDiv')
    dayFourDiv.appendChild(dayFourWeatherIcon)

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
        hourTemp = (0,_helpers_convert_temp__WEBPACK_IMPORTED_MODULE_0__.convertTemp)(hourTemp, unit, true)
        hourTemp = parseInt(hourTemp)
        dayTwoTemps.push(hourTemp)

        // Displaying weather description and weather icon for day 2 (tomorrow)
        if (time === 13) {
          const weatherParam = document.createElement('p')
          let weather = dataForecastList[i].weather[0].main
          weatherParam.innerText = weather
          weatherParam.classList.add('forecastWeather')
          dayTwoFlexLeft.appendChild(weatherParam)

          const weatherIcon = document.createElement('img')
          let icon = dataForecastList[i].weather[0].icon
          weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
          weatherIcon.alt = 'Weather icon'
          weatherIcon.classList.add('weatherIcon')
          dayTwoWeatherIcon.appendChild(weatherIcon)
        }        

      } else if (day === dayThree) {

        // Displaying time of temperature
        let time = new Date(dataForecastList[i].dt * 1000)
        time = time.getHours()

        //Displaying temperature by hour
        let hourTemp = dataForecastList[i].main.temp
        hourTemp = (0,_helpers_convert_temp__WEBPACK_IMPORTED_MODULE_0__.convertTemp)(hourTemp, unit, true)
        hourTemp = parseInt(hourTemp)
        dayThreeTemps.push(hourTemp)

        // Displaying weather description and weather icon for day 3 (day after tomorrow)
        if (time === 13) {
          const weatherParam = document.createElement('p')
          let weather = dataForecastList[i].weather[0].main
          weatherParam.innerText = weather
          weatherParam.classList.add('forecastWeather')
          dayThreeFlexLeft.appendChild(weatherParam)

          const weatherIcon = document.createElement('img')
          let icon = dataForecastList[i].weather[0].icon
          weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
          weatherIcon.alt = 'Weather icon'
          weatherIcon.classList.add('weatherIcon')
          dayThreeWeatherIcon.appendChild(weatherIcon)
        }

      } else if (day === dayFour) {
        // Displaying time of temperature

        // Displaying time of temperature
        let time = new Date(dataForecastList[i].dt * 1000)
        time = time.getHours()

        //Displaying temperature by hour
        let hourTemp = dataForecastList[i].main.temp
        hourTemp = (0,_helpers_convert_temp__WEBPACK_IMPORTED_MODULE_0__.convertTemp)(hourTemp, unit, true)
        hourTemp = parseInt(hourTemp)
        dayFourTemps.push(hourTemp)

        // Displaying weather description and weather icon for day 3 (day after tomorrow)
        if (time === 13) {
          const weatherParam = document.createElement('p')
          let weather = dataForecastList[i].weather[0].main
          weatherParam.innerText = weather
          weatherParam.classList.add('forecastWeather')
          dayFourFlexLeft.appendChild(weatherParam)

          const weatherIcon = document.createElement('img')
          let icon = dataForecastList[i].weather[0].icon
          weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
          weatherIcon.alt = 'Weather icon'
          weatherIcon.classList.add('weatherIcon')
          dayFourWeatherIcon.appendChild(weatherIcon)
        }
      }
    }

    // Getting daily averages and showing in forecast
    const dayTwoSum = dayTwoTemps.reduce((a, b) => a + b, 0)
    const dayTwoAverage = (dayTwoSum / dayTwoTemps.length).toFixed()

    const avgTwoDom = document.createElement('p')
    avgTwoDom.innerText = `${dayTwoAverage}°${unit}`
    avgTwoDom.classList.add('forecastAverage')
    dayTwoFlex.appendChild(avgTwoDom)

    const dayThreeSum = dayThreeTemps.reduce((a, b) => a + b, 0)
    const dayThreeAverage = (dayThreeSum / dayThreeTemps.length).toFixed()

    const avgThreeDom = document.createElement('p')
    avgThreeDom.innerText = `${dayThreeAverage}°${unit}`
    avgThreeDom.classList.add('forecastAverage')
    dayThreeFlex.appendChild(avgThreeDom)

    const dayFourSum = dayFourTemps.reduce((a, b) => a + b, 0)
    const dayFourAverage = (dayFourSum / dayFourTemps.length).toFixed()

    const avgFourDom = document.createElement('p')
    avgFourDom.innerText = `${dayFourAverage}°${unit}`
    avgFourDom.classList.add('forecastAverage')
    dayFourFlex.appendChild(avgFourDom)

    // Getting daily high's and low's and showing in forecast
    const dayTwoHigh = Math.max(...dayTwoTemps)
    const dayTwoHighDom = document.createElement('p')
    dayTwoHighDom.classList.add('forecastHigh')
    dayTwoHighDom.innerText = `High: ${dayTwoHigh}°${unit}`
    dayTwoHighLowFlex.appendChild(dayTwoHighDom)

    const dayTwoLow = Math.min(...dayTwoTemps)
    const dayTwoLowDom = document.createElement('p')
    dayTwoLowDom.classList.add('forecastLow')
    dayTwoLowDom.innerText = `Low: ${dayTwoLow}°${unit}`
    dayTwoHighLowFlex.appendChild(dayTwoLowDom)

    const dayThreeHigh = Math.max(...dayThreeTemps)
    const dayThreeHighDom = document.createElement('p')
    dayThreeHighDom.classList.add('forecastHigh')
    dayThreeHighDom.innerText = `High: ${dayThreeHigh}°${unit}`
    dayThreeHighLowFlex.appendChild(dayThreeHighDom)

    const dayThreeLow = Math.min(...dayThreeTemps)
    const dayThreeLowDom = document.createElement('p')
    dayThreeLowDom.classList.add('forecastLow')
    dayThreeLowDom.innerText = `Low: ${dayThreeLow}°${unit}`
    dayThreeHighLowFlex.appendChild(dayThreeLowDom)

    const dayFourHigh = Math.max(...dayFourTemps)
    const dayFourHighDom = document.createElement('p')
    dayFourHighDom.classList.add('forecastHigh')
    dayFourHighDom.innerText = `High: ${dayFourHigh}°${unit}`
    dayFourHighLowFlex.appendChild(dayFourHighDom)

    const dayFourLow = Math.min(...dayFourTemps)
    const dayFourLowDom = document.createElement('p')
    dayFourLowDom.classList.add('forecastLow')
    dayFourLowDom.innerText = `Low: ${dayFourLow}°${unit}`
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
    let temp = (0,_helpers_convert_temp__WEBPACK_IMPORTED_MODULE_0__.convertTemp)(data.main.temp, unit, true)
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



/***/ }),

/***/ "./src/assets/tofino.jpg":
/*!*******************************!*\
  !*** ./src/assets/tofino.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db776c1225a6a7977eec.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _components_helpers_convert_temp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/helpers/convert-temp */ "./src/components/helpers/convert-temp.js");







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

const updateTempText = () => {
  const currentTemp = document.getElementById('currentTemp')
  let currentTempUpdate = currentTemp.innerText.split('°')
  currentTempUpdate = currentTempUpdate[0]
  parseInt(currentTempUpdate)
  currentTempUpdate = (0,_components_helpers_convert_temp__WEBPACK_IMPORTED_MODULE_4__.convertTemp)(currentTempUpdate, unit, false)
  currentTemp.innerText = `${currentTempUpdate}°${unit}`

  const averageTemps = document.querySelectorAll('.forecastAverage')
  if (averageTemps.length > 0) {
    for (let i = 0; i < averageTemps.length; i++) {
     let convertedTemp = averageTemps[i].innerText.split('°')
     convertedTemp = convertedTemp[0]
     parseInt(convertedTemp)
     convertedTemp = (0,_components_helpers_convert_temp__WEBPACK_IMPORTED_MODULE_4__.convertTemp)(convertedTemp, unit, false)
     averageTemps[i].innerHTML = `${convertedTemp}°${unit}`
    }
  }

  const highTemps = document.querySelectorAll('.forecastHigh')
  if (highTemps.length > 0) {
    for (let i = 0; i < highTemps.length; i++) {
      let convertedTemp = highTemps[i].innerText.split('°')
      convertedTemp = convertedTemp[0].split(' ')
      convertedTemp = convertedTemp[1]
      parseInt(convertedTemp)
      convertedTemp = (0,_components_helpers_convert_temp__WEBPACK_IMPORTED_MODULE_4__.convertTemp)(convertedTemp, unit, false)
      highTemps[i].innerHTML = `High: ${convertedTemp}°${unit}`
    }
  }

  const lowTemps = document.querySelectorAll('.forecastLow')
  if (lowTemps.length > 0) {
    for (let i = 0; i < lowTemps.length; i++) {
      let convertedTemp = lowTemps[i].innerText.split('°')
      convertedTemp = convertedTemp[0].split(' ')
      convertedTemp = convertedTemp[1]
      parseInt(convertedTemp)
      convertedTemp = (0,_components_helpers_convert_temp__WEBPACK_IMPORTED_MODULE_4__.convertTemp)(convertedTemp, unit, false)
      lowTemps[i].innerHTML = `Low: ${convertedTemp}°${unit}`
    }
  }
}

// Listening for temperature slider to determine temp unit
const tempSwitch = document.getElementById('tempSwitch')
const tempC = document.getElementById('temperatureCText')
const tempF = document.getElementById('temperatureFText')

tempSwitch.addEventListener('change', () => {
  if (tempSwitch.checked) {
    tempC.classList.remove('showTemp')
    tempC.classList.add('hideTemp')
    tempF.classList.add('showTemp')
    tempF.classList.remove('hideTemp')
    unit = 'f'
    updateTempText()
  } else {
    tempF.classList.remove('showTemp')
    tempF.classList.add('hideTemp')
    tempC.classList.add('showTemp')
    tempC.classList.remove('hideTemp')
    unit = 'c'
    updateTempText()
  }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkVBQVc7QUFDaEMsb0NBQW9DLGNBQWMsR0FBRyxLQUFLO0FBQzFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkVBQVc7QUFDakMsd0NBQXdDLGNBQWMsR0FBRyxLQUFLO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkVBQVc7QUFDakMsc0NBQXNDLGNBQWMsR0FBRyxLQUFLO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9nbG9iYWwtc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9mb3JlY2FzdC13ZWF0aGVyLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9sb2FkZXItc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9nbG9iYWwtc3R5bGVzLmNzcz8wZTcwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL2ZvcmVjYXN0LXdlYXRoZXIuY3NzPzMzNmEiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbG9hZGVyLXN0eWxlcy5jc3M/NjcwOSIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9nZXQtY29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2dldC13ZWF0aGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9oZWxwZXJzL2NvbnZlcnQtdGVtcC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvaW50aWFsLXBhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvc2hvdy13ZWF0aGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy90b2Zpbm8uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVppbGxhK1NsYWI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuaDIsIGgzLCBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm94IHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICB3aWR0aDogOTB2dztcXG4gIG1pbi13aWR0aDogOTUlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm9wdGlvbnNEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlQnRuRGl2IHtcXG4gIG1hcmdpbi1yaWdodDogNDhweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF17XFxuXFx0aGVpZ2h0OiAwO1xcblxcdHdpZHRoOiAwO1xcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxubGFiZWwge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR3aWR0aDogODBweDtcXG5cXHRoZWlnaHQ6IDM0cHg7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcblxcdGJhY2tncm91bmQ6IHJnYigxMjksIDEyNiwgMTI2KTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRib3JkZXItcmFkaXVzOiAxMDBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxhYmVsOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0bGVmdDogNXB4O1xcblxcdHdpZHRoOiAyNHB4O1xcblxcdGhlaWdodDogMjRweDtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDkwcHg7XFxuXFx0dHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcXG5cXHRiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xcblxcdGxlZnQ6IGNhbGMoMTAwJSAtIDVweCk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxubGFiZWw6YWN0aXZlOmFmdGVyIHtcXG5cXHR3aWR0aDogcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICBtYXJnaW4tdG9wOiAxOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbiN0ZW1wZXJhdHVyZUZUZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE4cHg7XFxuICBsZWZ0OiAxOHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG4jdGVtcGVyYXR1cmVDVGV4dCB7XFxuICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxOHB4O1xcbiAgcmlnaHQ6IDE4cHg7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5oaWRlVGVtcCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi5zaG93VGVtcCB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5AbWVkaWEocHJlZmVycy1yZWR1Y2VkLW1vdGlvbikge1xcbiAgLmhpZGVUZW1wIHtcXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIH1cXG59XFxuXFxuI2xvY2F0aW9uIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGhlaWdodDogMThweDtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNEOUQ5RDk7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYmFja2dyb3VuZDogIzEyMDQwNDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLndlYXRoZXJGbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIG1hcmdpbi10b3A6IDM2cHg7XFxufVxcblxcbiNjaXR5IHtcXG4gIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYicsJ0JlYmFzIE5ldWUnLEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IGNhbGMoNDBweCArIDN2dyk7XFxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuI2NvdW50cnkge1xcbiAgZm9udC1mYW1pbHk6ICdaaWxsYSBTbGFiJywnQmViYXMgTmV1ZScsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICBmb250LXNpemU6IDM2cHg7XFxufVxcblxcbiNjdXJyZW50VGVtcCB7XFxuICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInLCdCZWJhcyBOZXVlJyxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiBjYWxjKDgwcHggKyA0dncpO1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbn1cXG5cXG4jY3VycmVudFdlYXRoZXIge1xcbiAgZm9udC1mYW1pbHk6ICdaaWxsYSBTbGFiJywnQmViYXMgTmV1ZScsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBtYXJnaW4tdG9wOiAtNnB4O1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXJEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JlY2FzdEJ0bkRpdiB7XFxuICBtYXJnaW4tdG9wOiA2MnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdEJ0biB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4vKiBNb2JpbGUgc3R5bGVzICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC53ZWF0aGVyRmxleCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogYmFzZWxpbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjY3VycmVudFRlbXAge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgfVxcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ2xvYmFsLXN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlGQUFvRTtFQUNwRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxRQUFRO0NBQ1Isa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZUFBZTtDQUNmLFdBQVc7Q0FDWCxZQUFZO0VBQ1gsZ0JBQWdCO0NBQ2pCLDhCQUE4QjtDQUM5QixjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxzREFBc0Q7RUFDdEQsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUVBQW1FO0VBQ25FLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUVBQW1FO0VBQ25FLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUVBQW1FO0VBQ25FLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUVBQW1FO0VBQ25FLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRTtJQUNFLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1aaWxsYStTbGFiOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvdG9maW5vLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmgyLCBoMywgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI21haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJveCB7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgd2lkdGg6IDkwdnc7XFxuICBtaW4td2lkdGg6IDk1JTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5vcHRpb25zRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50ZW1wZXJhdHVyZUJ0bkRpdiB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hde1xcblxcdGhlaWdodDogMDtcXG5cXHR3aWR0aDogMDtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbmxhYmVsIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0d2lkdGg6IDgwcHg7XFxuXFx0aGVpZ2h0OiAzNHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMTI5LCAxMjYsIDEyNik7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5sYWJlbDphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdGxlZnQ6IDVweDtcXG5cXHR3aWR0aDogMjRweDtcXG5cXHRoZWlnaHQ6IDI0cHg7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiA5MHB4O1xcblxcdHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XFxuXFx0YmFja2dyb3VuZDogIzAwMDAwMDtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXG5cXHRsZWZ0OiBjYWxjKDEwMCUgLSA1cHgpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbmxhYmVsOmFjdGl2ZTphZnRlciB7XFxuXFx0d2lkdGg6IHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogMThweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4jdGVtcGVyYXR1cmVGVGV4dCB7XFxuICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxOHB4O1xcbiAgbGVmdDogMThweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuI3RlbXBlcmF0dXJlQ1RleHQge1xcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJyxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMThweDtcXG4gIHJpZ2h0OiAxOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uaGlkZVRlbXAge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4uc2hvd1RlbXAge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuQG1lZGlhKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pIHtcXG4gIC5oaWRlVGVtcCB7XFxuICAgIHRyYW5zaXRpb246IG5vbmU7XFxuICB9XFxufVxcblxcbiNsb2NhdGlvbiB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICB3aWR0aDogMTQwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjRDlEOUQ5O1xcbn1cXG5cXG4jc3VibWl0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJhY2tncm91bmQ6ICMxMjA0MDQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi53ZWF0aGVyRmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBtYXJnaW4tdG9wOiAzNnB4O1xcbn1cXG5cXG4jY2l0eSB7XFxuICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInLCdCZWJhcyBOZXVlJyxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiBjYWxjKDQwcHggKyAzdncpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbiNjb3VudHJ5IHtcXG4gIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYicsJ0JlYmFzIE5ldWUnLEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4jY3VycmVudFRlbXAge1xcbiAgZm9udC1mYW1pbHk6ICdaaWxsYSBTbGFiJywnQmViYXMgTmV1ZScsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogY2FsYyg4MHB4ICsgNHZ3KTtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG59XFxuXFxuI2N1cnJlbnRXZWF0aGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYicsJ0JlYmFzIE5ldWUnLEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgbWFyZ2luLXRvcDogLTZweDtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9yZWNhc3RCdG5EaXYge1xcbiAgbWFyZ2luLXRvcDogNjJweDtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3RCdG4ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuLyogTW9iaWxlIHN0eWxlcyAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAud2VhdGhlckZsZXgge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI2N1cnJlbnRUZW1wIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gIH1cXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcmVjYXN0V2VhdGhlckRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogNDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxufVxcblxcbi5oaWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBmaWx0ZXI6IGJsdXIoMnB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuLnNob3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIGZpbHRlcjogYmx1cigwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxcbn1cXG5cXG5AbWVkaWEocHJlZmVycy1yZWR1Y2VkLW1vdGlvbikge1xcbiAgLmhpZGUge1xcbiAgICB0cmFuc2l0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5cXG4jZGF5VHdvRGl2IHtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDEwMG1zO1xcbn1cXG5cXG4jZGF5VGhyZWVEaXYge1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMjAwbXM7XFxufVxcblxcbiNkYXlGb3VyRGl2IHtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDMwMG1zO1xcbn1cXG5cXG4uZm9yZWNhc3REYXlEaXYge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWluLXdpZHRoOiAyNjBweDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZmxleEZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3REYXkge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvcmVjYXN0V2VhdGhlciB7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi53ZWF0aGVySWNvbkRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uZm9yZWNhc3RBdmVyYWdlIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbiAgZm9udC1zaXplOiA2MnB4O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLmZvcmVjYXN0SGlnaCwgLmZvcmVjYXN0TG93IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi8qIE1vYmlsZSBzdHlsZXMgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmZvcmVjYXN0RGF5RGl2IHtcXG4gICAgd2lkdGg6IDg1dnc7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG5cXG4gIC5mb3JlY2FzdFdlYXRoZXJEaXYge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb3JlY2FzdC13ZWF0aGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb3JlY2FzdFdlYXRoZXJEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG4gIG1hcmdpbi10b3A6IDQ4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZmlsdGVyOiBibHVyKDJweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi5zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBmaWx0ZXI6IGJsdXIoMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcXG59XFxuXFxuQG1lZGlhKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pIHtcXG4gIC5oaWRlIHtcXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIH1cXG59XFxuXFxuI2RheVR3b0RpdiB7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAxMDBtcztcXG59XFxuXFxuI2RheVRocmVlRGl2IHtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDIwMG1zO1xcbn1cXG5cXG4jZGF5Rm91ckRpdiB7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAzMDBtcztcXG59XFxuXFxuLmZvcmVjYXN0RGF5RGl2IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1pbi13aWR0aDogMjYwcHg7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZsZXhGb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0RGF5IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mb3JlY2FzdFdlYXRoZXIge1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ud2VhdGhlckljb25EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmZvcmVjYXN0QXZlcmFnZSB7XFxuICBtYXJnaW4tbGVmdDogMjRweDtcXG4gIGZvbnQtc2l6ZTogNjJweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5mb3JlY2FzdEhpZ2gsIC5mb3JlY2FzdExvdyB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4vKiBNb2JpbGUgc3R5bGVzICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5mb3JlY2FzdERheURpdiB7XFxuICAgIHdpZHRoOiA4NXZ3O1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuXFxuICAuZm9yZWNhc3RXZWF0aGVyRGl2IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNsb2FkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogOTk5O1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMmVtO1xcbiAgb3ZlcmZsb3c6IHNob3c7XFxuICBtYXJnaW46IGF1dG87XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbiNsb2FkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTQ0KTtcXG59XFxuXFxuI2xvYWRlcjpub3QoOnJlcXVpcmVkKSB7XFxuICAvKiBoaWRlIFxcXCJsb2FkaW5nLi4uXFxcIiB0ZXh0ICovXFxuICBmb250OiAwLzAgYTtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbiNsb2FkZXI6bm90KDpyZXF1aXJlZCk6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAtbW96LWFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcbiAgLW1zLWFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcbiAgLW8tYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxuICBhbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIDEuNWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNSkgLTEuNWVtIDAgMCAwLCByZ2JhKDAsIDAsIDAsIDAuNSkgLTEuMWVtIC0xLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMCAtMS41ZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIDEuNWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjVlbSAwIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcXG59XFxuXFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkAtbW96LWtleWZyYW1lcyBzcGlubmVyIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5ALW8ta2V5ZnJhbWVzIHNwaW5uZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc3Bpbm5lciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9sb2FkZXItc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlEQUFpRDtFQUNqRCw4Q0FBOEM7RUFDOUMsNkNBQTZDO0VBQzdDLDRDQUE0QztFQUM1Qyx5Q0FBeUM7RUFDekMsb0JBQW9CO0VBQ3BCLDhTQUE4UztFQUM5Uyx3U0FBd1M7QUFDMVM7OztBQUdBO0VBQ0U7SUFDRSwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHlCQUF5QjtFQUMzQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1Qix5QkFBeUI7RUFDM0I7QUFDRjtBQUNBO0VBQ0U7SUFDRSwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2xvYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBvdmVyZmxvdzogc2hvdztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuI2xvYWRlcjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNDQpO1xcbn1cXG5cXG4jbG9hZGVyOm5vdCg6cmVxdWlyZWQpIHtcXG4gIC8qIGhpZGUgXFxcImxvYWRpbmcuLi5cXFwiIHRleHQgKi9cXG4gIGZvbnQ6IDAvMCBhO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuI2xvYWRlcjpub3QoOnJlcXVpcmVkKTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgd2lkdGg6IDFlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgbWFyZ2luLXRvcDogLTAuNWVtO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcXG4gIC1tb3otYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAtbXMtYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAtby1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcXG4gIGFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43NSkgMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC41KSAtMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC41KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43NSkgMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgLTEuNWVtIDAgMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgLTEuNWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAxLjFlbSAtMS4xZW0gMCAwO1xcbn1cXG5cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQC1tb3ota2V5ZnJhbWVzIHNwaW5uZXIge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkAtby1rZXlmcmFtZXMgc3Bpbm5lciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzcGlubmVyIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLXN0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC1zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZvcmVjYXN0LXdlYXRoZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JlY2FzdC13ZWF0aGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkZXItc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9hZGVyLXN0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZ2V0Q2l0eUNvb3JkaW5hdGVzID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpXG4gIGxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTgyNDAxMTYxZTQzNjJiZGJhYzk1NzNmMGI2MWQzZjgyYCwge21vZGU6ICdjb3JzJ30pXG4gICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXR1cm4gY2l0eURhdGFcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBjb25zb2xlLmxvZyhlcnIpXG4gIH1cbn1cblxuZXhwb3J0IHtnZXRDaXR5Q29vcmRpbmF0ZXN9IiwiY29uc3QgZ2V0Q3VycmVudFdlYXRoZXJEYXRhID0gYXN5bmMgKGxvbiwgbGF0KSA9PiB7XG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKVxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xvbj0ke2xvbn0mbGF0PSR7bGF0fSZhcHBpZD04MjQwMTE2MWU0MzYyYmRiYWM5NTczZjBiNjFkM2Y4MmAsIHttb2RlOiAnY29ycyd9KVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhXG4gIH0gY2F0Y2goZXJyKSB7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgY29uc29sZS5sb2coZXJyKVxuICB9XG59XG5cbmNvbnN0IGdldEZvcmVjYXN0V2VhdGhlckRhdGEgPSBhc3luYyAobG9uLCBsYXQpID0+IHtcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD04MjQwMTE2MWU0MzYyYmRiYWM5NTczZjBiNjFkM2Y4MmAsIHttb2RlOiAnY29ycyd9KVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhXG4gIH0gY2F0Y2goZXJyKSB7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgY29uc29sZS5sb2coZXJyKVxuICB9XG59XG5cblxuZXhwb3J0IHtnZXRDdXJyZW50V2VhdGhlckRhdGEsIGdldEZvcmVjYXN0V2VhdGhlckRhdGF9IiwiY29uc3QgY29udmVydFRlbXAgPSAodGVtcCwgdW5pdCwga2VsdmluKSA9PiB7XG4gIGlmIChrZWx2aW4pIHtcbiAgICBpZiAodW5pdCA9PT0gJ2MnKSB7XG4gICAgICBsZXQga2VsdmluID0gdGVtcFxuICAgICAgdGVtcCA9IGtlbHZpbiAtIDI3My4xNVxuICAgICAgdGVtcCA9IHRlbXAudG9GaXhlZCgpXG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnZicpIHtcbiAgICAgIGxldCBrZWx2aW4gPSB0ZW1wXG4gICAgICB0ZW1wID0gKGtlbHZpbiAtMjczLjE1KSAqIDEuOCArIDMyXG4gICAgICB0ZW1wID0gdGVtcC50b0ZpeGVkKClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHVuaXQgPT09ICdjJykge1xuICAgICAgdGVtcCA9ICh0ZW1wIC0gMzIpICogMC41NTU2XG4gICAgICB0ZW1wID0gdGVtcC50b0ZpeGVkKClcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdmJykge1xuICAgICAgdGVtcCA9IHRlbXAgKiAxLjggKyAzMlxuICAgICAgdGVtcCA9IHRlbXAudG9GaXhlZCgpXG4gICAgfVxuICB9XG4gIHJldHVybiB0ZW1wXG59XG5cbmV4cG9ydCB7Y29udmVydFRlbXB9IiwiaW1wb3J0ICcuLi9zdHlsZXMvbG9hZGVyLXN0eWxlcy5jc3MnXG5pbXBvcnQgJy4uL2dsb2JhbC1zdHlsZXMuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZm9yZWNhc3Qtd2VhdGhlci5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxQYWdlTG9hZCgpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcblxuICBjb25zdCBib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBib3hEaXYuY2xhc3NMaXN0LmFkZCgnYm94JylcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChib3hEaXYpXG5cbiAgY29uc3Qgb3B0aW9uc0ZsZXhEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBvcHRpb25zRmxleERpdi5jbGFzc0xpc3QuYWRkKCdvcHRpb25zRGl2JylcbiAgYm94RGl2LmFwcGVuZENoaWxkKG9wdGlvbnNGbGV4RGl2KVxuICBcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICBmb3JtLmlkID0gJ2Zvcm0nXG4gIG9wdGlvbnNGbGV4RGl2LmFwcGVuZENoaWxkKGZvcm0pXG4gIFxuICBjb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBsb2NhdGlvbklucHV0LnR5cGUgPSAndGV4dCdcbiAgbG9jYXRpb25JbnB1dC5pZCA9ICdsb2NhdGlvbidcbiAgbG9jYXRpb25JbnB1dC52YWx1ZSA9ICdCZXJsaW4nXG4gIGxvY2F0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2xvY2F0aW9uJylcbiAgZm9ybS5hcHBlbmRDaGlsZChsb2NhdGlvbklucHV0KVxuXG4gIGNvbnN0IGxvY2F0aW9uU3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgbG9jYXRpb25TdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnXG4gIGxvY2F0aW9uU3VibWl0QnRuLmlkID0gJ3N1Ym1pdCdcbiAgbG9jYXRpb25TdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ1NlYXJjaCdcbiAgZm9ybS5hcHBlbmRDaGlsZChsb2NhdGlvblN1Ym1pdEJ0bilcblxuICBjb25zdCB0ZW1wZXJhdHVyZUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRlbXBlcmF0dXJlQnRuRGl2LmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlQnRuRGl2JylcbiAgb3B0aW9uc0ZsZXhEaXYuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVCdG5EaXYpXG5cbiAgY29uc3QgdGVtcGVyYXR1cmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgdGVtcGVyYXR1cmVJbnB1dC5pZCA9ICd0ZW1wU3dpdGNoJ1xuICB0ZW1wZXJhdHVyZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gIHRlbXBlcmF0dXJlQnRuRGl2LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlSW5wdXQpXG5cbiAgY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgdGVtcGVyYXR1cmVMYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2hDaGVja2JveExhYmVsJylcbiAgdGVtcGVyYXR1cmVMYWJlbC5pZCA9ICdzd2l0Y2hDaGVja2JveExhYmVsJ1xuICB0ZW1wZXJhdHVyZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RlbXBTd2l0Y2gnKVxuICB0ZW1wZXJhdHVyZUJ0bkRpdi5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZUxhYmVsKVxuXG4gIGNvbnN0IHRlbXBlcmF0dXJlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICB0ZW1wZXJhdHVyZVNwYW4uY2xhc3NMaXN0LmFkZCgnc3dpdGNoTGFiZWxTcGFuJylcbiAgdGVtcGVyYXR1cmVMYWJlbC5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZVNwYW4pXG5cbiAgY29uc3QgdGVtcGVyYXR1cmVDVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICB0ZW1wZXJhdHVyZUNUZXh0LmlkID0gJ3RlbXBlcmF0dXJlQ1RleHQnXG4gIHRlbXBlcmF0dXJlQ1RleHQuaW5uZXJUZXh0ID0gJ2MnXG4gIHRlbXBlcmF0dXJlQ1RleHQuY2xhc3NMaXN0LmFkZCgnc2hvd1RlbXAnKVxuICB0ZW1wZXJhdHVyZUJ0bkRpdi5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZUNUZXh0KVxuXG4gIGNvbnN0IHRlbXBlcmF0dXJlRlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgdGVtcGVyYXR1cmVGVGV4dC5pZCA9ICd0ZW1wZXJhdHVyZUZUZXh0J1xuICB0ZW1wZXJhdHVyZUZUZXh0LmlubmVyVGV4dCA9ICdmJ1xuICB0ZW1wZXJhdHVyZUZUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGVUZW1wJylcbiAgdGVtcGVyYXR1cmVCdG5EaXYuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVGVGV4dClcblxuICBjb25zdCB3ZWF0aGVyRmxleEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHdlYXRoZXJGbGV4Qm94LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJGbGV4JylcbiAgYm94RGl2LmFwcGVuZENoaWxkKHdlYXRoZXJGbGV4Qm94KVxuICBcbiAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsb2NhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbkRpdicpXG4gIHdlYXRoZXJGbGV4Qm94LmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KVxuXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIGNpdHkuaWQgPSAnY2l0eSdcbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQoY2l0eSlcbiAgXG4gIGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIGNvdW50cnkuaWQgPSAnY291bnRyeSdcbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQoY291bnRyeSlcblxuICBjb25zdCBjdXJyZW50V2VhdGhlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGN1cnJlbnRXZWF0aGVyRGl2LmlkID0gJ2N1cnJlbnRXZWF0aGVyRGl2J1xuICBjdXJyZW50V2VhdGhlckRpdi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50V2VhdGhlckRpdicpXG4gIHdlYXRoZXJGbGV4Qm94LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyRGl2KVxuXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50VGVtcCcpXG4gIGN1cnJlbnRUZW1wLmlkID0gJ2N1cnJlbnRUZW1wJ1xuICBjdXJyZW50V2VhdGhlckRpdi5hcHBlbmRDaGlsZChjdXJyZW50VGVtcClcblxuICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgY3VycmVudFdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnY3VycmVudFdlYXRoZXInKVxuICBjdXJyZW50V2VhdGhlci5pZCA9ICdjdXJyZW50V2VhdGhlcidcbiAgY3VycmVudFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXIpXG5cbiAgY29uc3QgZm9yZWNhc3RCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBmb3JlY2FzdEJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdEJ0bkRpdicpXG4gIGJveERpdi5hcHBlbmRDaGlsZChmb3JlY2FzdEJ0bkRpdilcblxuICBjb25zdCBmb3JlY2FzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGZvcmVjYXN0QnRuLmlkID0gJ2ZvcmVjYXN0QnRuJ1xuICBmb3JlY2FzdEJ0bi5pbm5lclRleHQgPSAnTmV4dCAzIGRheXMnXG4gIGZvcmVjYXN0QnRuLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0QnRuJylcbiAgZm9yZWNhc3RCdG5EaXYuYXBwZW5kQ2hpbGQoZm9yZWNhc3RCdG4pXG5cbiAgY29uc3QgZm9yZWNhc3RXZWF0aGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZm9yZWNhc3RXZWF0aGVyRGl2LmlkID0gJ2ZvcmVjYXN0V2VhdGhlckRpdidcbiAgZm9yZWNhc3RXZWF0aGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0V2VhdGhlckRpdicpXG4gIGJveERpdi5hcHBlbmRDaGlsZChmb3JlY2FzdFdlYXRoZXJEaXYpXG5cbiAgY29uc3QgZGF5VHdvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZGF5VHdvRGl2LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0RGF5RGl2JylcbiAgZGF5VHdvRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICBkYXlUd29EaXYuaWQgPSAnZGF5VHdvRGl2J1xuICBmb3JlY2FzdFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoZGF5VHdvRGl2KVxuXG4gIGNvbnN0IGRheVRocmVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZGF5VGhyZWVEaXYuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3REYXlEaXYnKVxuICBkYXlUaHJlZURpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgZGF5VGhyZWVEaXYuaWQgPSAnZGF5VGhyZWVEaXYnXG4gIGZvcmVjYXN0V2VhdGhlckRpdi5hcHBlbmRDaGlsZChkYXlUaHJlZURpdilcblxuICBjb25zdCBkYXlmb3VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZGF5Zm91ckRpdi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdERheURpdicpXG4gIGRheWZvdXJEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gIGRheWZvdXJEaXYuaWQgPSAnZGF5Rm91ckRpdidcbiAgZm9yZWNhc3RXZWF0aGVyRGl2LmFwcGVuZENoaWxkKGRheWZvdXJEaXYpXG59IiwiaW1wb3J0IHsgY29udmVydFRlbXAgfSBmcm9tIFwiLi9oZWxwZXJzL2NvbnZlcnQtdGVtcFwiO1xuXG5jb25zdCBzaG93V2VhdGhlckRhdGEgPSAoZGF0YSwgdW5pdCwgZm9yZWNhc3QpID0+IHtcbiAgLy8gR2V0dGluZyB0aGUgcmVnaW9uIG5hbWUgY29uc3RydWN0b3IgdG8gY29udmVydCBjb3VudHJ5IGNvZGVzXG4gIGNvbnN0IHJlZ2lvbk5hbWVzID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFxuICAgIFsnZW4nXSwge3R5cGU6ICdyZWdpb24nfVxuICApO1xuXG4gIC8vIEdldHRpbmcgYWxsIGZvcmVjYXN0IGRheSBkaXZzXG4gIGNvbnN0IGRheVR3b0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlUd29EaXYnKVxuICBjb25zdCBkYXlUaHJlZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlUaHJlZURpdicpXG4gIGNvbnN0IGRheUZvdXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5Rm91ckRpdicpXG4gIGNvbnN0IGRheXMgPSBbIGRheVR3b0RpdiwgZGF5VGhyZWVEaXYsIGRheUZvdXJEaXZdXG5cbiAgLy8gU2F2aW5nIHRlbXBzIGZvciBlYWNoIGRheSB0byBhbiBhcnJheSB0byBiZSBhdmVyYWdlZCBsYXRlclxuICBsZXQgZGF5VHdvVGVtcHMgPSBbXVxuICBsZXQgZGF5VGhyZWVUZW1wcyA9IFtdXG4gIGxldCBkYXlGb3VyVGVtcHMgPSBbXVxuXG4gIC8vIENyZWF0aW5nIGFycmF5IG9mIGRheXMgb2YgdGhlIHdlZWsgdG8gcmVmZXJlbmNlIGxhdGVyXG4gIGNvbnN0IGRheXNPZldlZWsgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cblxuICAvLyBIaWRpbmcgdGhlIGZvcmVjYXN0IGRpdnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGF5c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcbiAgfVxuXG4gIC8vIENvbnZlcnRpbmcgdGVtcGVyYXR1cmUgZnJvbSBLZWx2aW4gdG8gRiBvciBDXG4gIFxuXG4gIGlmIChmb3JlY2FzdCkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgLy8gSXRlcmF0aW5nIG92ZXIgdGhlIGRheXMgdG8gcmVtb3ZlIGFueSBjaGlsZCBub2Rlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gQ2hlY2tpbmcgZmlyc3QgaWYgdGhlIGRheXMgaGF2ZSBjaGlsZCBub2Rlc1xuICAgICAgaWYgKGRheXNbaV0uaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIHdoaWxlIChkYXlzW2ldLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBkYXlzW2ldLnJlbW92ZUNoaWxkKGRheXNbaV0uZmlyc3RDaGlsZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBTaG93aW5nIGFsbCB0aGUgZGF5IGRpdnMgZm9yIGZvcmVjYXN0IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGF5c1tpXS5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgICB9XG5cbiAgICAvLyBDcmVhdGluZyBmbGV4IGRpdnMgZm9yIGVhY2ggZm9yZWNhc3QgZGF5XG4gICAgY29uc3QgZGF5VHdvRmxleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGF5VHdvRmxleC5jbGFzc0xpc3QuYWRkKCdmbGV4Rm9yZWNhc3QnKVxuICAgIGRheVR3b0ZsZXguaWQgPSAnZGF5VHdvRmxleCdcbiAgICBkYXlUd29EaXYuYXBwZW5kQ2hpbGQoZGF5VHdvRmxleClcblxuICAgIGNvbnN0IGRheVRocmVlRmxleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGF5VGhyZWVGbGV4LmNsYXNzTGlzdC5hZGQoJ2ZsZXhGb3JlY2FzdCcpXG4gICAgZGF5VGhyZWVGbGV4LmlkID0gJ2RheVRocmVlRmxleCdcbiAgICBkYXlUaHJlZURpdi5hcHBlbmRDaGlsZChkYXlUaHJlZUZsZXgpXG5cbiAgICBjb25zdCBkYXlGb3VyRmxleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGF5Rm91ckZsZXguY2xhc3NMaXN0LmFkZCgnZmxleEZvcmVjYXN0JylcbiAgICBkYXlGb3VyRmxleC5pZCA9ICdkYXlGb3VyRmxleCdcbiAgICBkYXlGb3VyRGl2LmFwcGVuZENoaWxkKGRheUZvdXJGbGV4KVxuXG4gICAgY29uc3QgZGF5VHdvRmxleExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRheVR3b0ZsZXhMZWZ0LmNsYXNzTGlzdC5hZGQoJ2ZsZXhGb3JlY2FzdExlZnQnKVxuICAgIGRheVR3b0ZsZXhMZWZ0LmlkID0gJ2RheVR3b0ZsZXhMZWZ0J1xuICAgIGRheVR3b0ZsZXguYXBwZW5kQ2hpbGQoZGF5VHdvRmxleExlZnQpXG5cbiAgICBjb25zdCBkYXlUaHJlZUZsZXhMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkYXlUaHJlZUZsZXhMZWZ0LmNsYXNzTGlzdC5hZGQoJ2ZsZXhGb3JlY2FzdExlZnQnKVxuICAgIGRheVRocmVlRmxleExlZnQuaWQgPSAnZGF5VGhyZWVGbGV4TGVmdCdcbiAgICBkYXlUaHJlZUZsZXguYXBwZW5kQ2hpbGQoZGF5VGhyZWVGbGV4TGVmdClcblxuICAgIGNvbnN0IGRheUZvdXJGbGV4TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGF5Rm91ckZsZXhMZWZ0LmNsYXNzTGlzdC5hZGQoJ2ZsZXhGb3JlY2FzdExlZnQnKVxuICAgIGRheUZvdXJGbGV4TGVmdC5pZCA9ICdkYXlGb3VyRmxleExlZnQnXG4gICAgZGF5Rm91ckZsZXguYXBwZW5kQ2hpbGQoZGF5Rm91ckZsZXhMZWZ0KVxuXG4gICAgY29uc3QgZGF5VHdvV2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRheVR3b1dlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJJY29uRGl2JylcbiAgICBkYXlUd29EaXYuYXBwZW5kQ2hpbGQoZGF5VHdvV2VhdGhlckljb24pXG5cbiAgICBjb25zdCBkYXlUaHJlZVdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkYXlUaHJlZVdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJJY29uRGl2JylcbiAgICBkYXlUaHJlZURpdi5hcHBlbmRDaGlsZChkYXlUaHJlZVdlYXRoZXJJY29uKVxuXG4gICAgY29uc3QgZGF5Rm91cldlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkYXlGb3VyV2VhdGhlckljb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlckljb25EaXYnKVxuICAgIGRheUZvdXJEaXYuYXBwZW5kQ2hpbGQoZGF5Rm91cldlYXRoZXJJY29uKVxuXG4gICAgY29uc3QgZGF5VHdvSGlnaExvd0ZsZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRheVR3b0hpZ2hMb3dGbGV4LmNsYXNzTGlzdC5hZGQoJ2ZsZXhGb3JlY2FzdCcpXG4gICAgZGF5VHdvSGlnaExvd0ZsZXguaWQgPSAnZGF5VHdvRmxleCdcbiAgICBkYXlUd29EaXYuYXBwZW5kQ2hpbGQoZGF5VHdvSGlnaExvd0ZsZXgpXG5cbiAgICBjb25zdCBkYXlUaHJlZUhpZ2hMb3dGbGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkYXlUaHJlZUhpZ2hMb3dGbGV4LmNsYXNzTGlzdC5hZGQoJ2ZsZXhGb3JlY2FzdCcpXG4gICAgZGF5VGhyZWVIaWdoTG93RmxleC5pZCA9ICdkYXlUaHJlZUhpZ2hMb3dGbGV4J1xuICAgIGRheVRocmVlRGl2LmFwcGVuZENoaWxkKGRheVRocmVlSGlnaExvd0ZsZXgpXG5cbiAgICBjb25zdCBkYXlGb3VySGlnaExvd0ZsZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRheUZvdXJIaWdoTG93RmxleC5jbGFzc0xpc3QuYWRkKCdmbGV4Rm9yZWNhc3QnKVxuICAgIGRheUZvdXJIaWdoTG93RmxleC5pZCA9ICdkYXlGb3VySGlnaExvd0ZsZXgnXG4gICAgZGF5Rm91ckRpdi5hcHBlbmRDaGlsZChkYXlGb3VySGlnaExvd0ZsZXgpXG5cbiAgICAvLyBHZXR0aW5nIGRheSBvZiB0aGUgd2VlayBmb3IgdG9kYXksIHRvbW9ycm93IGV0Yy5cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuXG4gICAgbGV0IGRheVR3byA9IG5ldyBEYXRlKGRhdGUpXG4gICAgZGF5VHdvLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKVxuICAgIGRheVR3byA9IGRheVR3by5nZXREYXkoKVxuXG4gICAgY29uc3QgZGF5VHdvRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGF5VHdvRGF5LmlubmVyVGV4dCA9IGRheXNPZldlZWtbZGF5VHdvXVxuICAgIGRheVR3b0RheS5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdERheScpXG4gICAgZGF5VHdvRmxleExlZnQuYXBwZW5kQ2hpbGQoZGF5VHdvRGF5KVxuXG4gICAgbGV0IGRheVRocmVlID0gbmV3IERhdGUoZGF0ZSlcbiAgICBkYXlUaHJlZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMilcbiAgICBkYXlUaHJlZSA9IGRheVRocmVlLmdldERheSgpXG5cbiAgICBjb25zdCBkYXlUaHJlZURheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRheVRocmVlRGF5LmlubmVyVGV4dCA9IGRheXNPZldlZWtbZGF5VGhyZWVdXG4gICAgZGF5VGhyZWVEYXkuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3REYXknKVxuICAgIGRheVRocmVlRmxleExlZnQuYXBwZW5kQ2hpbGQoZGF5VGhyZWVEYXkpXG5cbiAgICBsZXQgZGF5Rm91ciA9IG5ldyBEYXRlKGRhdGUpXG4gICAgZGF5Rm91ci5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMylcbiAgICBkYXlGb3VyID0gZGF5Rm91ci5nZXREYXkoKVxuXG4gICAgY29uc3QgZGF5Rm91ckRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRheUZvdXJEYXkuaW5uZXJUZXh0ID0gZGF5c09mV2Vla1tkYXlGb3VyXVxuICAgIGRheUZvdXJEYXkuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3REYXknKVxuICAgIGRheUZvdXJGbGV4TGVmdC5hcHBlbmRDaGlsZChkYXlGb3VyRGF5KVxuXG4gICAgLy8gQ2hlY2tpbmcgaWYgdGhlIGZvcmVjYXN0IGRhdGEgaXMgZm9yIHRvZGF5LCB0b21vcnJvdyBldGMuXG4gICAgY29uc3QgZGF0YUZvcmVjYXN0TGlzdCA9IGRhdGEubGlzdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUZvcmVjYXN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gR2V0dGluZyB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBmb3JlY2FzdGVkIHdlYXRoZXJcbiAgICAgIGxldCBkYXkgPSBuZXcgRGF0ZShkYXRhRm9yZWNhc3RMaXN0W2ldLmR0ICogMTAwMClcbiAgICAgIGRheSA9IGRheS5nZXREYXkoKVxuICAgICAgLy8gSWYgZGF5IGlzIHRvZGF5LCB0b21vcnJvdyBldGMuIHRoZW4gc2hvd2luZyBkYXRhIGluIERPTVxuICAgICAgaWYgKGRheSA9PT0gZGF5VHdvKSB7XG5cbiAgICAgICAgLy8gRGlzcGxheWluZyB0aW1lIG9mIHRlbXBlcmF0dXJlXG4gICAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoZGF0YUZvcmVjYXN0TGlzdFtpXS5kdCAqIDEwMDApXG4gICAgICAgIHRpbWUgPSB0aW1lLmdldEhvdXJzKClcbiAgICAgICAgXG4gICAgICAgIC8vRGlzcGxheWluZyB0ZW1wZXJhdHVyZSBieSBob3VyXG4gICAgICAgIGxldCBob3VyVGVtcCA9IGRhdGFGb3JlY2FzdExpc3RbaV0ubWFpbi50ZW1wXG4gICAgICAgIGhvdXJUZW1wID0gY29udmVydFRlbXAoaG91clRlbXAsIHVuaXQsIHRydWUpXG4gICAgICAgIGhvdXJUZW1wID0gcGFyc2VJbnQoaG91clRlbXApXG4gICAgICAgIGRheVR3b1RlbXBzLnB1c2goaG91clRlbXApXG5cbiAgICAgICAgLy8gRGlzcGxheWluZyB3ZWF0aGVyIGRlc2NyaXB0aW9uIGFuZCB3ZWF0aGVyIGljb24gZm9yIGRheSAyICh0b21vcnJvdylcbiAgICAgICAgaWYgKHRpbWUgPT09IDEzKSB7XG4gICAgICAgICAgY29uc3Qgd2VhdGhlclBhcmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgbGV0IHdlYXRoZXIgPSBkYXRhRm9yZWNhc3RMaXN0W2ldLndlYXRoZXJbMF0ubWFpblxuICAgICAgICAgIHdlYXRoZXJQYXJhbS5pbm5lclRleHQgPSB3ZWF0aGVyXG4gICAgICAgICAgd2VhdGhlclBhcmFtLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0V2VhdGhlcicpXG4gICAgICAgICAgZGF5VHdvRmxleExlZnQuYXBwZW5kQ2hpbGQod2VhdGhlclBhcmFtKVxuXG4gICAgICAgICAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICAgIGxldCBpY29uID0gZGF0YUZvcmVjYXN0TGlzdFtpXS53ZWF0aGVyWzBdLmljb25cbiAgICAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUAyeC5wbmdgXG4gICAgICAgICAgd2VhdGhlckljb24uYWx0ID0gJ1dlYXRoZXIgaWNvbidcbiAgICAgICAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVySWNvbicpXG4gICAgICAgICAgZGF5VHdvV2VhdGhlckljb24uYXBwZW5kQ2hpbGQod2VhdGhlckljb24pXG4gICAgICAgIH0gICAgICAgIFxuXG4gICAgICB9IGVsc2UgaWYgKGRheSA9PT0gZGF5VGhyZWUpIHtcblxuICAgICAgICAvLyBEaXNwbGF5aW5nIHRpbWUgb2YgdGVtcGVyYXR1cmVcbiAgICAgICAgbGV0IHRpbWUgPSBuZXcgRGF0ZShkYXRhRm9yZWNhc3RMaXN0W2ldLmR0ICogMTAwMClcbiAgICAgICAgdGltZSA9IHRpbWUuZ2V0SG91cnMoKVxuXG4gICAgICAgIC8vRGlzcGxheWluZyB0ZW1wZXJhdHVyZSBieSBob3VyXG4gICAgICAgIGxldCBob3VyVGVtcCA9IGRhdGFGb3JlY2FzdExpc3RbaV0ubWFpbi50ZW1wXG4gICAgICAgIGhvdXJUZW1wID0gY29udmVydFRlbXAoaG91clRlbXAsIHVuaXQsIHRydWUpXG4gICAgICAgIGhvdXJUZW1wID0gcGFyc2VJbnQoaG91clRlbXApXG4gICAgICAgIGRheVRocmVlVGVtcHMucHVzaChob3VyVGVtcClcblxuICAgICAgICAvLyBEaXNwbGF5aW5nIHdlYXRoZXIgZGVzY3JpcHRpb24gYW5kIHdlYXRoZXIgaWNvbiBmb3IgZGF5IDMgKGRheSBhZnRlciB0b21vcnJvdylcbiAgICAgICAgaWYgKHRpbWUgPT09IDEzKSB7XG4gICAgICAgICAgY29uc3Qgd2VhdGhlclBhcmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgbGV0IHdlYXRoZXIgPSBkYXRhRm9yZWNhc3RMaXN0W2ldLndlYXRoZXJbMF0ubWFpblxuICAgICAgICAgIHdlYXRoZXJQYXJhbS5pbm5lclRleHQgPSB3ZWF0aGVyXG4gICAgICAgICAgd2VhdGhlclBhcmFtLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0V2VhdGhlcicpXG4gICAgICAgICAgZGF5VGhyZWVGbGV4TGVmdC5hcHBlbmRDaGlsZCh3ZWF0aGVyUGFyYW0pXG5cbiAgICAgICAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgICAgbGV0IGljb24gPSBkYXRhRm9yZWNhc3RMaXN0W2ldLndlYXRoZXJbMF0uaWNvblxuICAgICAgICAgIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2BcbiAgICAgICAgICB3ZWF0aGVySWNvbi5hbHQgPSAnV2VhdGhlciBpY29uJ1xuICAgICAgICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJJY29uJylcbiAgICAgICAgICBkYXlUaHJlZVdlYXRoZXJJY29uLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKVxuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoZGF5ID09PSBkYXlGb3VyKSB7XG4gICAgICAgIC8vIERpc3BsYXlpbmcgdGltZSBvZiB0ZW1wZXJhdHVyZVxuXG4gICAgICAgIC8vIERpc3BsYXlpbmcgdGltZSBvZiB0ZW1wZXJhdHVyZVxuICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKGRhdGFGb3JlY2FzdExpc3RbaV0uZHQgKiAxMDAwKVxuICAgICAgICB0aW1lID0gdGltZS5nZXRIb3VycygpXG5cbiAgICAgICAgLy9EaXNwbGF5aW5nIHRlbXBlcmF0dXJlIGJ5IGhvdXJcbiAgICAgICAgbGV0IGhvdXJUZW1wID0gZGF0YUZvcmVjYXN0TGlzdFtpXS5tYWluLnRlbXBcbiAgICAgICAgaG91clRlbXAgPSBjb252ZXJ0VGVtcChob3VyVGVtcCwgdW5pdCwgdHJ1ZSlcbiAgICAgICAgaG91clRlbXAgPSBwYXJzZUludChob3VyVGVtcClcbiAgICAgICAgZGF5Rm91clRlbXBzLnB1c2goaG91clRlbXApXG5cbiAgICAgICAgLy8gRGlzcGxheWluZyB3ZWF0aGVyIGRlc2NyaXB0aW9uIGFuZCB3ZWF0aGVyIGljb24gZm9yIGRheSAzIChkYXkgYWZ0ZXIgdG9tb3Jyb3cpXG4gICAgICAgIGlmICh0aW1lID09PSAxMykge1xuICAgICAgICAgIGNvbnN0IHdlYXRoZXJQYXJhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgIGxldCB3ZWF0aGVyID0gZGF0YUZvcmVjYXN0TGlzdFtpXS53ZWF0aGVyWzBdLm1haW5cbiAgICAgICAgICB3ZWF0aGVyUGFyYW0uaW5uZXJUZXh0ID0gd2VhdGhlclxuICAgICAgICAgIHdlYXRoZXJQYXJhbS5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdFdlYXRoZXInKVxuICAgICAgICAgIGRheUZvdXJGbGV4TGVmdC5hcHBlbmRDaGlsZCh3ZWF0aGVyUGFyYW0pXG5cbiAgICAgICAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgICAgbGV0IGljb24gPSBkYXRhRm9yZWNhc3RMaXN0W2ldLndlYXRoZXJbMF0uaWNvblxuICAgICAgICAgIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2BcbiAgICAgICAgICB3ZWF0aGVySWNvbi5hbHQgPSAnV2VhdGhlciBpY29uJ1xuICAgICAgICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJJY29uJylcbiAgICAgICAgICBkYXlGb3VyV2VhdGhlckljb24uYXBwZW5kQ2hpbGQod2VhdGhlckljb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXR0aW5nIGRhaWx5IGF2ZXJhZ2VzIGFuZCBzaG93aW5nIGluIGZvcmVjYXN0XG4gICAgY29uc3QgZGF5VHdvU3VtID0gZGF5VHdvVGVtcHMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMClcbiAgICBjb25zdCBkYXlUd29BdmVyYWdlID0gKGRheVR3b1N1bSAvIGRheVR3b1RlbXBzLmxlbmd0aCkudG9GaXhlZCgpXG5cbiAgICBjb25zdCBhdmdUd29Eb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhdmdUd29Eb20uaW5uZXJUZXh0ID0gYCR7ZGF5VHdvQXZlcmFnZX3CsCR7dW5pdH1gXG4gICAgYXZnVHdvRG9tLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0QXZlcmFnZScpXG4gICAgZGF5VHdvRmxleC5hcHBlbmRDaGlsZChhdmdUd29Eb20pXG5cbiAgICBjb25zdCBkYXlUaHJlZVN1bSA9IGRheVRocmVlVGVtcHMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMClcbiAgICBjb25zdCBkYXlUaHJlZUF2ZXJhZ2UgPSAoZGF5VGhyZWVTdW0gLyBkYXlUaHJlZVRlbXBzLmxlbmd0aCkudG9GaXhlZCgpXG5cbiAgICBjb25zdCBhdmdUaHJlZURvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGF2Z1RocmVlRG9tLmlubmVyVGV4dCA9IGAke2RheVRocmVlQXZlcmFnZX3CsCR7dW5pdH1gXG4gICAgYXZnVGhyZWVEb20uY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3RBdmVyYWdlJylcbiAgICBkYXlUaHJlZUZsZXguYXBwZW5kQ2hpbGQoYXZnVGhyZWVEb20pXG5cbiAgICBjb25zdCBkYXlGb3VyU3VtID0gZGF5Rm91clRlbXBzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApXG4gICAgY29uc3QgZGF5Rm91ckF2ZXJhZ2UgPSAoZGF5Rm91clN1bSAvIGRheUZvdXJUZW1wcy5sZW5ndGgpLnRvRml4ZWQoKVxuXG4gICAgY29uc3QgYXZnRm91ckRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGF2Z0ZvdXJEb20uaW5uZXJUZXh0ID0gYCR7ZGF5Rm91ckF2ZXJhZ2V9wrAke3VuaXR9YFxuICAgIGF2Z0ZvdXJEb20uY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3RBdmVyYWdlJylcbiAgICBkYXlGb3VyRmxleC5hcHBlbmRDaGlsZChhdmdGb3VyRG9tKVxuXG4gICAgLy8gR2V0dGluZyBkYWlseSBoaWdoJ3MgYW5kIGxvdydzIGFuZCBzaG93aW5nIGluIGZvcmVjYXN0XG4gICAgY29uc3QgZGF5VHdvSGlnaCA9IE1hdGgubWF4KC4uLmRheVR3b1RlbXBzKVxuICAgIGNvbnN0IGRheVR3b0hpZ2hEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkYXlUd29IaWdoRG9tLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0SGlnaCcpXG4gICAgZGF5VHdvSGlnaERvbS5pbm5lclRleHQgPSBgSGlnaDogJHtkYXlUd29IaWdofcKwJHt1bml0fWBcbiAgICBkYXlUd29IaWdoTG93RmxleC5hcHBlbmRDaGlsZChkYXlUd29IaWdoRG9tKVxuXG4gICAgY29uc3QgZGF5VHdvTG93ID0gTWF0aC5taW4oLi4uZGF5VHdvVGVtcHMpXG4gICAgY29uc3QgZGF5VHdvTG93RG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGF5VHdvTG93RG9tLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0TG93JylcbiAgICBkYXlUd29Mb3dEb20uaW5uZXJUZXh0ID0gYExvdzogJHtkYXlUd29Mb3d9wrAke3VuaXR9YFxuICAgIGRheVR3b0hpZ2hMb3dGbGV4LmFwcGVuZENoaWxkKGRheVR3b0xvd0RvbSlcblxuICAgIGNvbnN0IGRheVRocmVlSGlnaCA9IE1hdGgubWF4KC4uLmRheVRocmVlVGVtcHMpXG4gICAgY29uc3QgZGF5VGhyZWVIaWdoRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGF5VGhyZWVIaWdoRG9tLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0SGlnaCcpXG4gICAgZGF5VGhyZWVIaWdoRG9tLmlubmVyVGV4dCA9IGBIaWdoOiAke2RheVRocmVlSGlnaH3CsCR7dW5pdH1gXG4gICAgZGF5VGhyZWVIaWdoTG93RmxleC5hcHBlbmRDaGlsZChkYXlUaHJlZUhpZ2hEb20pXG5cbiAgICBjb25zdCBkYXlUaHJlZUxvdyA9IE1hdGgubWluKC4uLmRheVRocmVlVGVtcHMpXG4gICAgY29uc3QgZGF5VGhyZWVMb3dEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkYXlUaHJlZUxvd0RvbS5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdExvdycpXG4gICAgZGF5VGhyZWVMb3dEb20uaW5uZXJUZXh0ID0gYExvdzogJHtkYXlUaHJlZUxvd33CsCR7dW5pdH1gXG4gICAgZGF5VGhyZWVIaWdoTG93RmxleC5hcHBlbmRDaGlsZChkYXlUaHJlZUxvd0RvbSlcblxuICAgIGNvbnN0IGRheUZvdXJIaWdoID0gTWF0aC5tYXgoLi4uZGF5Rm91clRlbXBzKVxuICAgIGNvbnN0IGRheUZvdXJIaWdoRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGF5Rm91ckhpZ2hEb20uY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3RIaWdoJylcbiAgICBkYXlGb3VySGlnaERvbS5pbm5lclRleHQgPSBgSGlnaDogJHtkYXlGb3VySGlnaH3CsCR7dW5pdH1gXG4gICAgZGF5Rm91ckhpZ2hMb3dGbGV4LmFwcGVuZENoaWxkKGRheUZvdXJIaWdoRG9tKVxuXG4gICAgY29uc3QgZGF5Rm91ckxvdyA9IE1hdGgubWluKC4uLmRheUZvdXJUZW1wcylcbiAgICBjb25zdCBkYXlGb3VyTG93RG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGF5Rm91ckxvd0RvbS5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdExvdycpXG4gICAgZGF5Rm91ckxvd0RvbS5pbm5lclRleHQgPSBgTG93OiAke2RheUZvdXJMb3d9wrAke3VuaXR9YFxuICAgIGRheUZvdXJIaWdoTG93RmxleC5hcHBlbmRDaGlsZChkYXlGb3VyTG93RG9tKVxuXG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0aW5nIG92ZXIgdGhlIGRheXMgdG8gcmVtb3ZlIGFueSBjaGlsZCBub2Rlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gQ2hlY2tpbmcgZmlyc3QgaWYgdGhlIGRheXMgaGF2ZSBjaGlsZCBub2Rlc1xuICAgICAgaWYgKGRheXNbaV0uaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIHdoaWxlIChkYXlzW2ldLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBkYXlzW2ldLnJlbW92ZUNoaWxkKGRheXNbaV0uZmlyc3RDaGlsZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gICAgXG5cbiAgICAvLyBHZXR0aW5nIGRhaWx5IHdlYXRoZXIgZGF0YVxuICAgIGxldCB0ZW1wID0gY29udmVydFRlbXAoZGF0YS5tYWluLnRlbXAsIHVuaXQsIHRydWUpXG4gICAgY29uc3Qgd2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5tYWluXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkYXRhLm5hbWVcbiAgICBjb25zdCBjb3VudHJ5TmFtZSA9IHJlZ2lvbk5hbWVzLm9mKGRhdGEuc3lzLmNvdW50cnkpXG5cbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKVxuICAgIGNpdHkuaW5uZXJUZXh0ID0gY2l0eU5hbWVcbiAgICBcbiAgICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnknKVxuICAgIGNvdW50cnkuaW5uZXJUZXh0ID0gY291bnRyeU5hbWVcbiAgICBcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50V2VhdGhlcicpXG4gICAgY3VycmVudFdlYXRoZXIuaW5uZXJUZXh0ID0gd2VhdGhlclxuICBcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGVtcCcpXG4gICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gYCR7dGVtcH3CsCR7dW5pdH1gXG4gIH1cbn1cblxuZXhwb3J0IHtzaG93V2VhdGhlckRhdGF9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSAnLi9jb21wb25lbnRzL2ludGlhbC1wYWdlLWxvYWQnXG5pbXBvcnQgeyBnZXRDdXJyZW50V2VhdGhlckRhdGEgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2V0LXdlYXRoZXInXG5pbXBvcnQgeyBnZXRGb3JlY2FzdFdlYXRoZXJEYXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL2dldC13ZWF0aGVyJ1xuaW1wb3J0IHsgZ2V0Q2l0eUNvb3JkaW5hdGVzIH0gZnJvbSAnLi9jb21wb25lbnRzL2dldC1jb29yZGluYXRlcydcbmltcG9ydCB7IHNob3dXZWF0aGVyRGF0YSB9IGZyb20gJy4vY29tcG9uZW50cy9zaG93LXdlYXRoZXItZGF0YSdcbmltcG9ydCB7IGNvbnZlcnRUZW1wIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlbHBlcnMvY29udmVydC10ZW1wJ1xuXG4vLyBJbml0aWFsbHkgbG9hZGluZyB0aGUgSFRNTCBlbGVtZW50c1xuaW5pdGlhbFBhZ2VMb2FkKClcbi8vIEdldHRpbmcgbG9hZGluZyBzcGlubmVyIHRvIGRpc3BsYXkgd2hlbiBncmFiYmluZyBBUEkgZGF0YVxuY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpXG4vLyBzZXR0aW5nIG15IHZhcmlhYmxlc1xubGV0IHVuaXQgPSAnYydcbmxldCBsb2NhdGlvbiA9ICdCZXJsaW4nXG5sZXQgZm9yZWNhc3QgPSBmYWxzZVxuXG4vLyBDYWxsaW5nIG15IEFQSSBmdW5jdGlvbnMgdG8gZ3JhYiB0aGUgd2VhdGhlciBkYXRhXG5jb25zdCBnZXRXZWF0aGVyID0gKCkgPT4ge1xuICBnZXRDaXR5Q29vcmRpbmF0ZXMobG9jYXRpb24pLnRoZW4oZGF0YSA9PiB7XG4gICAgLy8gQ2hlY2tpbmcgaWYgdXNlciB3YW50cyBjdXJyZW50IHdlYXRoZXIgb3IgZm9yZWNhc3RlZCB3ZWF0aGVyXG4gICAgaWYgKGRhdGEuY29kID09PSAyMDAgJiYgZm9yZWNhc3QgPT09IGZhbHNlKSB7XG4gICAgICBsZXQgbG9uID0gZGF0YS5jb29yZC5sb25cbiAgICAgIGxldCBsYXQgPSBkYXRhLmNvb3JkLmxhdFxuICAgICAgZ2V0Q3VycmVudFdlYXRoZXJEYXRhKGxvbiwgbGF0KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAvLyBJZiBBUEkgQ2FsbCBpcyBzdWNlc3NmdWwsIHBhc3NpbmcgQVBJIGRhdGEgdG8gc2hvdyB0aGUgd2VhdGhlclxuICAgICAgICBzaG93V2VhdGhlckRhdGEoZGF0YSwgdW5pdCwgZm9yZWNhc3QpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoZGF0YS5jb2QgPT09IDIwMCAmJiBmb3JlY2FzdCA9PSB0cnVlKSB7XG4gICAgICBsZXQgbG9uID0gZGF0YS5jb29yZC5sb25cbiAgICAgIGxldCBsYXQgPSBkYXRhLmNvb3JkLmxhdFxuICAgICAgZ2V0Rm9yZWNhc3RXZWF0aGVyRGF0YShsb24sIGxhdCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2hvd1dlYXRoZXJEYXRhKGRhdGEsIHVuaXQsIGZvcmVjYXN0KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3VycmVudGx5IGFsZXJ0aW5nIGlmIGNpdHkgaXNuIG5vdCBmb3VuZCwgdGVtcG9yYXJ5XG4gICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIGFsZXJ0KCdjaXR5IG5vdCBmb3VuZCcpXG4gICAgfVxuICB9KVxufVxuLy8gR3JhYmJpbmcgaW5pdGlhbCB3ZWF0aGVyIGRhdGFcbmdldFdlYXRoZXIobG9jYXRpb24pXG5cbi8vIExpc3RlbmluZyB0byBsb2NhdGlvbiBzdWJtaXQgYnRuIGFuZCBkaXNwbGF5aW5nIHdlYXRoZXIgaWYgY2xpY2tlZFxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBmb3JtTG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKVxuICBsb2NhdGlvbiA9IGZvcm1Mb2NhdGlvbi52YWx1ZVxuICBmb3JlY2FzdCA9IGZhbHNlXG5cbiAgZ2V0V2VhdGhlcihsb2NhdGlvbilcbn0pIFxuXG4vLyBMaXN0ZW5pbmcgdG8gZm9yZWNhc3QgYnRuIGFuZCBkaXNwbGF5aW5nIGZvcmVjYXN0IGlmIGNsaWNrZWRcbmNvbnN0IGZvcmVjYXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmVjYXN0QnRuJylcbmZvcmVjYXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBmb3JlY2FzdCA9IHRydWVcbiAgXG4gIGdldFdlYXRoZXIobG9jYXRpb24pXG59KVxuXG5jb25zdCB1cGRhdGVUZW1wVGV4dCA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRlbXAnKVxuICBsZXQgY3VycmVudFRlbXBVcGRhdGUgPSBjdXJyZW50VGVtcC5pbm5lclRleHQuc3BsaXQoJ8KwJylcbiAgY3VycmVudFRlbXBVcGRhdGUgPSBjdXJyZW50VGVtcFVwZGF0ZVswXVxuICBwYXJzZUludChjdXJyZW50VGVtcFVwZGF0ZSlcbiAgY3VycmVudFRlbXBVcGRhdGUgPSBjb252ZXJ0VGVtcChjdXJyZW50VGVtcFVwZGF0ZSwgdW5pdCwgZmFsc2UpXG4gIGN1cnJlbnRUZW1wLmlubmVyVGV4dCA9IGAke2N1cnJlbnRUZW1wVXBkYXRlfcKwJHt1bml0fWBcblxuICBjb25zdCBhdmVyYWdlVGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yZWNhc3RBdmVyYWdlJylcbiAgaWYgKGF2ZXJhZ2VUZW1wcy5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdmVyYWdlVGVtcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgbGV0IGNvbnZlcnRlZFRlbXAgPSBhdmVyYWdlVGVtcHNbaV0uaW5uZXJUZXh0LnNwbGl0KCfCsCcpXG4gICAgIGNvbnZlcnRlZFRlbXAgPSBjb252ZXJ0ZWRUZW1wWzBdXG4gICAgIHBhcnNlSW50KGNvbnZlcnRlZFRlbXApXG4gICAgIGNvbnZlcnRlZFRlbXAgPSBjb252ZXJ0VGVtcChjb252ZXJ0ZWRUZW1wLCB1bml0LCBmYWxzZSlcbiAgICAgYXZlcmFnZVRlbXBzW2ldLmlubmVySFRNTCA9IGAke2NvbnZlcnRlZFRlbXB9wrAke3VuaXR9YFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhpZ2hUZW1wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlY2FzdEhpZ2gnKVxuICBpZiAoaGlnaFRlbXBzLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpZ2hUZW1wcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNvbnZlcnRlZFRlbXAgPSBoaWdoVGVtcHNbaV0uaW5uZXJUZXh0LnNwbGl0KCfCsCcpXG4gICAgICBjb252ZXJ0ZWRUZW1wID0gY29udmVydGVkVGVtcFswXS5zcGxpdCgnICcpXG4gICAgICBjb252ZXJ0ZWRUZW1wID0gY29udmVydGVkVGVtcFsxXVxuICAgICAgcGFyc2VJbnQoY29udmVydGVkVGVtcClcbiAgICAgIGNvbnZlcnRlZFRlbXAgPSBjb252ZXJ0VGVtcChjb252ZXJ0ZWRUZW1wLCB1bml0LCBmYWxzZSlcbiAgICAgIGhpZ2hUZW1wc1tpXS5pbm5lckhUTUwgPSBgSGlnaDogJHtjb252ZXJ0ZWRUZW1wfcKwJHt1bml0fWBcbiAgICB9XG4gIH1cblxuICBjb25zdCBsb3dUZW1wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlY2FzdExvdycpXG4gIGlmIChsb3dUZW1wcy5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb3dUZW1wcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNvbnZlcnRlZFRlbXAgPSBsb3dUZW1wc1tpXS5pbm5lclRleHQuc3BsaXQoJ8KwJylcbiAgICAgIGNvbnZlcnRlZFRlbXAgPSBjb252ZXJ0ZWRUZW1wWzBdLnNwbGl0KCcgJylcbiAgICAgIGNvbnZlcnRlZFRlbXAgPSBjb252ZXJ0ZWRUZW1wWzFdXG4gICAgICBwYXJzZUludChjb252ZXJ0ZWRUZW1wKVxuICAgICAgY29udmVydGVkVGVtcCA9IGNvbnZlcnRUZW1wKGNvbnZlcnRlZFRlbXAsIHVuaXQsIGZhbHNlKVxuICAgICAgbG93VGVtcHNbaV0uaW5uZXJIVE1MID0gYExvdzogJHtjb252ZXJ0ZWRUZW1wfcKwJHt1bml0fWBcbiAgICB9XG4gIH1cbn1cblxuLy8gTGlzdGVuaW5nIGZvciB0ZW1wZXJhdHVyZSBzbGlkZXIgdG8gZGV0ZXJtaW5lIHRlbXAgdW5pdFxuY29uc3QgdGVtcFN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wU3dpdGNoJylcbmNvbnN0IHRlbXBDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlQ1RleHQnKVxuY29uc3QgdGVtcEYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmVGVGV4dCcpXG5cbnRlbXBTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICBpZiAodGVtcFN3aXRjaC5jaGVja2VkKSB7XG4gICAgdGVtcEMuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd1RlbXAnKVxuICAgIHRlbXBDLmNsYXNzTGlzdC5hZGQoJ2hpZGVUZW1wJylcbiAgICB0ZW1wRi5jbGFzc0xpc3QuYWRkKCdzaG93VGVtcCcpXG4gICAgdGVtcEYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZVRlbXAnKVxuICAgIHVuaXQgPSAnZidcbiAgICB1cGRhdGVUZW1wVGV4dCgpXG4gIH0gZWxzZSB7XG4gICAgdGVtcEYuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd1RlbXAnKVxuICAgIHRlbXBGLmNsYXNzTGlzdC5hZGQoJ2hpZGVUZW1wJylcbiAgICB0ZW1wQy5jbGFzc0xpc3QuYWRkKCdzaG93VGVtcCcpXG4gICAgdGVtcEMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZVRlbXAnKVxuICAgIHVuaXQgPSAnYydcbiAgICB1cGRhdGVUZW1wVGV4dCgpXG4gIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9