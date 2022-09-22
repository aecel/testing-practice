import { add, subtract, divide, multiply } from "./calculator.js"

it("adds 2 and 1", () => {
  expect(add(2, 1)).toBe(3)
})

it("subtracts 1 from 2", () => {
  expect(subtract(2, 1)).toBe(1)
})

it("multiplies 2 and 1", () => {
  expect(multiply(2, 1)).toBe(2)
})

it("divides 1 from 2", () => {
  expect(divide(2, 1)).toBe(2)
})
