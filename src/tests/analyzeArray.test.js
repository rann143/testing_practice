const analyzeArray = require("../analyzeArray");

test("finds average, min, max, and length/works with unsorted array", () => {
    expect(
        analyzeArray.analyzeArray([1,8,3,4,2,6])
    ).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    )
})

test("works with duplicate values", () => {
    expect(
        analyzeArray.analyzeArray([1,2,2,3])
    ).toEqual(
        {
            average: 2,
            min: 1,
            max: 3,
            length: 4
        }
    )
})

test("works with negative values", () => {
    expect(
        analyzeArray.analyzeArray([1,-8,4])
    ).toEqual(
        {
            average: -1,
            min: -8,
            max: 4,
            length: 3
        }
    )
})