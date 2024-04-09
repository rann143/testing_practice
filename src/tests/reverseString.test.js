const reverse = require("../reverseString");

test("reverse string", () => {
    expect(reverse.reverseString("hatamoto")).toBe("otomatah");
})