import capitalize from "./capitalize.js"

it("capitalizes test into Test", () => {
  expect(capitalize("test")).toBe("Test")
})

it("capitalizes only the first word of a phrase", () => {
    expect(capitalize("test phrase")).toBe("Test phrase")
  })

it("returns same string if already capitalized", () => {
  expect(capitalize("Test")).toBe("Test")
})

it("returns null if input is not a string", () => {
  expect(capitalize(9)).toBeNull()
  expect(capitalize([9, 8, 7])).toBeNull()
  expect(capitalize({ name: "hello" })).toBeNull()
  expect(capitalize(true)).toBeNull()
  expect(capitalize(undefined)).toBeNull()
  expect(capitalize(null)).toBeNull()
})
