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

export {convertTemp}