const { addNumber } = require("../index");

test("check addNumber", () => {
  expect(addNumber(1, 2)).toBe(3);
});