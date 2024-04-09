/* eslint-disable no-unused-vars */
function capitalize(word) {
    const letters = word.split("");
    letters.splice(0, 1, letters[0].toUpperCase());
    return letters.join("");
}

exports.capitalize = capitalize;
