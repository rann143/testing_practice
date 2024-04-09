const calc = require("../calculator");

test("add 2 numbers", () => {
    expect(calc.calculator.add(2, 3)).toBe(5);
})
test("subtract 2 numbers", () => {
    expect(calc.calculator.subtract(2, 3)).toBe(-1);
})
test("divide 2 numbers", () => {
    expect(calc.calculator.divide(12, 3)).toBe(4);
})
test("multiply 2 numbers", () => {
    expect(calc.calculator.multiply(5, 3)).toBe(15);
})