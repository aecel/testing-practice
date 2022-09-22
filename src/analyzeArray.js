const analyzeArray = (array) => {
  if (Array.isArray(array)) {
    let returnObj = {
      average: null,
      min: Math.min(...array),
      max: Math.max(...array),
      length: array.length,
    }

    const sum = array.reduce((total, num) => {
      return total + num
    }, 0)
    returnObj.average = Math.round((sum / returnObj.length) * 100) / 100

    return returnObj
  } else {
    return null
  }
}

export default analyzeArray