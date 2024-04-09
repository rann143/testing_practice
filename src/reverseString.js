function reverseString(string) {

    const result = string.split('').reverse().join('');

    return result;

}

exports.reverseString = reverseString;