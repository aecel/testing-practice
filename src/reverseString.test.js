import reverseString from "./reverseString.js"

it("reverses a word", () => {
  expect(reverseString("string")).toBe("gnirts")
  expect(reverseString("word")).toBe("drow")
  expect(reverseString("lmao")).toBe("oaml")
  expect(reverseString("yanny")).toBe("ynnay")
})

it("reverses phrases", () => {
  expect(reverseString("string phrases")).toBe("sesarhp gnirts")
  expect(reverseString("String Phrases")).toBe("sesarhP gnirtS")
})

it("returns null if input is not a string", () => {
  expect(reverseString(9)).toBeNull()
  expect(reverseString([9, 8, 7])).toBeNull()
  expect(reverseString({ name: "hello" })).toBeNull()
  expect(reverseString(true)).toBeNull()
  expect(reverseString(undefined)).toBeNull()
  expect(reverseString(null)).toBeNull()
})
