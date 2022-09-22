import caesarCipher from "./caesarCipher.js"

it("shifts A to B", () => {
  expect(caesarCipher("A", 1)).toBe("B")
})

it("shifts a to b", () => {
  expect(caesarCipher("a", 1)).toBe("b")
})

it("shifts ABCDEFGHIJKLMNOPQRSTUVWXYZ to BCDEFGHIJKLMNOPQRSTUVWXYZA", () => {
  expect(caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1)).toBe(
    "BCDEFGHIJKLMNOPQRSTUVWXYZA"
  )
})

it("shifts abcdefghijklmnopqrstuvwxyz to bcdefghijklmnopqrstuvwxyza", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  )
})

it("shifts abcdefghijklmnopqrstuvwxyz!?? to bcdefghijklmnopqrstuvwxyza!??", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz!??", 1)).toBe(
    "bcdefghijklmnopqrstuvwxyza!??"
  )
})

it("shifts abcdefghijklmnopqrstuvwxyz to zabcdefghijklmnopqrstuvwxy", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", -1)).toBe(
    "zabcdefghijklmnopqrstuvwxy"
  )
})

it("shifts ABCDEF! GHIJKLMNOPQRSTUV? WXYZ to NOPQRS! TUVWXYZABCDEFGHI? JKLM", () => {
  expect(caesarCipher("ABCDEF! GHIJKLMNOPQRSTUV? WXYZ", 13)).toBe(
    "NOPQRS! TUVWXYZABCDEFGHI? JKLM"
  )
})
