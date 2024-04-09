const caesarCipher = require('../caesarCipher');

test("properly shifts", () => {
    expect(
        caesarCipher.caesarCipher("hatamoto")
    ).toBe("jcvcoqvq");
})

test("wraps z to a", () => {
    expect(
        caesarCipher.caesarCipher("yz")
    ).toBe("ab");
})

test("works with punctuation", () => {
    expect(
        caesarCipher.caesarCipher("hey there, friend.")
    ).toBe("jga vjgtg, htkgpf.");
})

test("works with upper and lower case letters", () => {
    expect(
        caesarCipher.caesarCipher("Hey TheRe, Friend.")
    ).toBe("jga vjgtg, htkgpf.");
})