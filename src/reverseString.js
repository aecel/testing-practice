const reverseString = (phrase) => {
  if (typeof phrase == "string") {
    let answer = []
    let j = phrase.length - 1
    phrase = phrase.split("")
    for (let i = 0; i < phrase.length; i++) {
      answer[i] = phrase[j]
      j--
    }
    return answer.join("")
  } else {
    return null
  }
}

export default reverseString
