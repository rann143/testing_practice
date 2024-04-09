function analyzeArray(array) {

    const sorted = array.sort((a, b) => a - b);

    const obj = {
        average: sorted.reduce((prev, cur) => prev + cur, 0) / Number(sorted.length),
        min: sorted[0],
        max: sorted[sorted.length - 1],
        length: sorted.length
    }

    return obj;
}

exports.analyzeArray = analyzeArray;