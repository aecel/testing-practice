const isLetter = (letter) => {
  if ((letter >= "a" && letter <= "z") || (letter >= "A" && letter <= "Z")) {
    return true
  } else {
    return false
  }
}

const charCode = (letter) => {
  if (isLetter(letter)) {
    return letter.charCodeAt(0)
  } else {
    return null
  }
}

// Small letter char codes: 97-122
// Big letter char codes: 65-90

const shiftBy = (letter, shiftNum) => {
  if (isLetter(letter) && Number.isInteger(shiftNum)) {
    const code = charCode(letter)
    let shiftedCode = code + shiftNum

    if (code >= 97 && code <= 122) {
      if (shiftedCode >= 97 && shiftedCode <= 122) {
      } else {
        if (shiftedCode > 122) {
          shiftedCode = shiftedCode - 123 + 97
        } else {
          shiftedCode = shiftedCode - 96 + 122
        }
      }
    } else if (code >= 65 && code <= 90) {
      if (shiftedCode >= 65 && shiftedCode <= 90) {
      } else {
        if (shiftedCode > 90) {
          shiftedCode = shiftedCode - 91 + 65
        } else {
          shiftedCode = shiftedCode - 64 + 90
        }
      }
    }

    return String.fromCharCode(shiftedCode)
  } else {
    return letter
  }
}

const caesarCipher = (phrase, shiftNum) => {
  if (typeof phrase == "string" && Number.isInteger(shiftNum)) {
    let cipherPhrase = ""

    for (const letter of phrase) {
      cipherPhrase = cipherPhrase.concat(shiftBy(letter, shiftNum))
    }

    return cipherPhrase
  } else {
    return null
  }
}

export default caesarCipher
