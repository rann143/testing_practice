/* eslint-disable no-unused-vars */
const capitalize = require("../capitalize");

test('capitalizes first letter of word', () => {
    expect(capitalize.capitalize("hatamoto")).toBe("Hatamoto");
})